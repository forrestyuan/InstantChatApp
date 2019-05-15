<template>
  <div class="wrapTabbar">
    <van-tabbar v-model="activeCode">
      <van-tabbar-item icon="chat-o" to="/" >消息</van-tabbar-item>
      <!-- <van-tabbar-item icon="contact" to="/">初心</van-tabbar-item> -->
      <van-tabbar-item icon="eye-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name:'tab-bar',
  data(){
    return{
      activeCode:0
    }
  }
}
</script>

<style lang="scss">
.wrapTabbar{
    display: inline-block;
    overflow: hidden;
    margin-top: 45px;
}
</style>
