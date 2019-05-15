<template>
    <div class="wrapHeader">
         <van-nav-bar class="van-nav-bar-self" :title="title" fixed>
             <div slot="left" class="van-nav-bar-left-self">
                <slot name="lt"></slot>
             </div>
             <div slot="right">
               <slot name="rt"></slot>
             </div>
         </van-nav-bar>
    </div>
</template>
<script>
export default {
  name: "head-bar",
  props: {
    title: String
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script> 
<style lang="scss" scoped>
$bgColor: #555;
$fontSize: 20px;
$fontColor: #fff;
.wrapHeader {
  display: inline-block;
  overflow: hidden;
  margin-bottom: 40px;
}
.van-nav-bar-self {
  background: $bgColor;
  color: $fontColor;
  font-size: $fontSize;
  margin-bottom: 50px;
  z-index: 1000!important;
}
</style>

