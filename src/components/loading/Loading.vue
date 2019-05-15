<template>
  <div v-if="loading" class="wrapLoading">
    <van-loading type="spinner"/>
    <span class="loadingTxt">&nbsp;&nbsp;loading...</span>
  </div>
</template>
<script>
export default {
  props: ["loading"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.wrapLoading {
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & .loadingTxt {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>

