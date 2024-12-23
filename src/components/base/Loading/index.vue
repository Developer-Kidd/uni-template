<!-- 全局loading -->
<template>
  <view class="mask-container">
    <view class="loading-wrapper">
      <div class="cube cube-1"></div>
      <div class="cube cube-2"></div>
      <div class="cube cube-3"></div>
      <div class="cube cube-4"></div>
      <div class="cube cube-5"></div>
      <div class="cube cube-6"></div>
      <div class="cube cube-7"></div>
      <div class="cube cube-8"></div>
      <div class="cube cube-9"></div>
    </view>
  </view>
</template>
<script lang="ts" setup name="loading"></script>
<style lang="scss" scoped>
@import "@/styles/base/_extend.scss";
.mask-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: $uni-bg-color-mask;
  .loading-wrapper {
    width: 4em;
    height: 4em;
    @extend .align-center;
  }
  .cube {
    width: 33%;
    height: 33%;
    background-color: $uni-color-primary;
    float: left;
    animation: cube-scale-delay 1.3s infinite ease-in-out;
    &.cube-1 {
      animation-delay: 0.2s;
    }
    &.cube-2 {
      animation-delay: 0.3s;
    }
    &.cube-3 {
      animation-delay: 0.4s;
    }
    &.cube-4 {
      animation-delay: 0.1s;
    }
    &.cube-5 {
      animation-delay: 0.2s;
    }
    &.cube-6 {
      animation-delay: 0.3s;
    }
    &.cube-7 {
      animation-delay: 0s;
    }
    &.cube-8 {
      animation-delay: 0.1s;
    }
    &.cube-9 {
      animation-delay: 0.2s;
    }
  }
}

@keyframes cube-scale-delay {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>
