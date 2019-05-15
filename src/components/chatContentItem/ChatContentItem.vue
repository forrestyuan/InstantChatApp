<template>
<div class="chatBox">
  <div v-if="time" class="time_delay"><span>{{time}}</span></div>
  <div v-if="type < 0" class="friend_item">
    <div class="friend_headshot">
      <img :src="imgSrc" alt="">
    </div>
    <div class="friend_msg_box">
      <div class="friend_name">{{username}}</div>
      <div class="friend_txt" v-emotion="content"></div>
    </div>
  </div>
  <div v-if="type > 0" class="me_item">
    <div class="me_headshot">
      <img :src="imgSrc" alt="">
    </div>
    <div class="me_msg_box">
      <div class="me_txt" v-emotion="content"></div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "chat-content-item",
  props:["type", "imgSrc","username","content","time"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script> 
<style lang="scss" scoped>
/*S 聊天页面*/
.overflow-hide{overflow: hidden!important;}
.friend_item,.me_item{position:relative;margin:20px 0;text-align: left;}
.friend_item .friend_headshot,.me_item .me_headshot{position: absolute;width: 30px;height: 30px;left: 0;top: 0;padding: 2px;background-color: #fff;}
.me_item .me_headshot{left:auto;right: 0;text-align: right;background-color: #fff;}
.friend_item .friend_headshot img,
.me_item .me_headshot img{width:30px;height: 30px;}
.friend_item .friend_msg_box,
.me_item .me_msg_box{position: relative;margin-left:40px;}
.me_item .me_msg_box{margin-left:unset;margin-right: 40px;}
.friend_item .friend_msg_box .friend_name{font-size: 12px;color:#888;padding-left:5px;margin-bottom: 5px;}
.friend_item .friend_msg_box,
.me_item .me_msg_box{overflow: hidden;}

.friend_item .friend_msg_box .friend_txt,
.me_item .me_msg_box .me_txt{background-color: #fff;border-radius: 10px;padding:5px;float: left;font-size: 14px;color:#000;}
.me_item .me_msg_box .me_txt{float:right;background-color: #ffe20c;}

.chatBox .time_delay {text-align: center;}
.chatBox .time_delay span{display: inline-block;padding:2px 5px;font-size: 12px;color:#fff;background-color: #ccc;border-radius: 6px;}

</style>

