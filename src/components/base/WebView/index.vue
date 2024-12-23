<template>
  <web-view :src="props.src" v-bind="$attrs"></web-view>
</template>
<script lang="ts" setup name="webview">
// 属性
const props = defineProps<{ src: string }>();
</script>
<style lang="scss" scoped></style>
