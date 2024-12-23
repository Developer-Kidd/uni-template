/*
 * url 相关处理方法 - 仅h5有效
 * author: zhijie
 */

/*
 * 获取url参数
 * @params url: 需要解析的url 默认为当前展示页面的url
 * @return: 返回一个包含所有url参数的对象
 */
export const getUrlParams = (url: string = location.href): Record<string, string> => {
  const result: Record<string, string> = {};
  const search = url.split("?").slice(1);
  if (!search.length) return result;
  search.forEach(str => {
    const paramsArr = str.split("&");
    paramsArr.forEach(paramStr => {
      const [key, value] = paramStr.split("=");
      result[key] = decodeURIComponent(value.replace(/#\/.*/, ""));
    });
  });
  return result;
};

/*
 * 将对象转换成为url参数
 * @params params: 当前需要转换的url参数
 * @return: 返回一个url参数格式的字符串
 */
export const parseUrlParams = (params: Record<string, string>): string => {
  return Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
};

/*
 * 新增一个url参数
 * @params url: url地址 @params params: 新增的参数key-value格式
 * @return: 返回一个url参数格式的字符串
 */
export const addUrlParams = (url: string, params: Record<string, string>): string => {
  const urlParams = getUrlParams(url);
  Object.assign(urlParams, params);
  const index = url.lastIndexOf("?");
  const href = index > -1 ? url.slice(0, index) : url;
  const searchParams = parseUrlParams(urlParams);
  return `${href}${searchParams ? "?" : ""}${searchParams}`;
};

/*
 * 删除url参数
 * @params keys: 需要删除的参数key值(数组格式) @params jumpMethod: 跳转方式
 */
export const removeUrlSearchParams = (
  keys = [] as string[],
  jumpMethod: "navigateTo" | "redirectTo" | "reLaunch" | "switchTab" = "redirectTo"
) => {
  const url = location.href;
  const { origin, pathname, hash } = location;
  const params = keys.length ? getUrlParams(url) : {};
  keys.forEach(key => {
    if (key in params) {
      delete params[key];
    }
  });
  const _hash = hash.split("?")[0];
  const newUrl = addUrlParams(`${origin}${pathname}${_hash}`, params);
  history.replaceState(null, document.title, newUrl);
  (uni as any)[jumpMethod]({ url: `${_hash.replace("#", "")}?${parseUrlParams(params)}` });
};
