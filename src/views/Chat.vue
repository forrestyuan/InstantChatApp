<template>
  <section>
    <head-bar>
      <span slot="lt" @click="onClickLeft">
        <van-icon name="arrow-left"/>聊天
      </span>
      <van-icon name="home" slot="rt"/>
    </head-bar>
    <div class="box">
      <van-pull-refresh :disabled="!refresh" v-model="isLoading" @refresh="onRefresh">
        <ul
          ref="messageBox"
          id="messages"
          :style="showMoreTab ? 'height:calc(100vh - 229px)':'height:calc(100vh - 79px)'"
        >
          <chat-item
            v-for="(item,index) in msgItemList"
            :key="index"
            :type="item.type"
            :imgSrc="item.imgSrc"
            :username="item.username"
            :content="item.content"
            :time="item.time"
          />
        </ul>
      </van-pull-refresh>
      <div class="form" :style="showMoreTab ? 'bottom:0;':''">
        <div class="wrapSend">
          <textarea v-model="msg" multiple autocomplete="off"/>
          <button v-show="msg" @click="sendMsg">发送</button>
          <div class="tab-more">
            <van-icon name="like-o" @click="showTabMore(0)"></van-icon>
            <van-icon v-show="!msg" name="add-o" @click="showTabMore(1)"></van-icon>
          </div>
        </div>
        <div v-show="emotionZone" class="moreZone">
          <emotion-list @injectEmoj="setEmoj"/>
        </div>
        <div v-show="moreOptionsZone" class="moreZone">这是更多区域,哎呦，不错哦，yeah</div>
      </div>
    </div>
  </section>
</template>
<script>
import io from "socket.io-client/dist/socket.io.js";
import { ajax, mixin } from "../utils/index.js";
import chatConItem from "@/components/chatContentItem/ChatContentItem.vue";

const socket = io();
export default {
  name: "chatroom",
  components: { chatItem: chatConItem },
  data() {
    return {
      isLoading: true,
      refresh: false,
      showMoreTab: false,
      emotionZone: false,
      moreOptionsZone: false,

      msg: "",
      chatbox: null,
      msgItemList: [],
      lastTime: "1995-03-17"
    };
  },
  methods: { 
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    setEmoj(val) {
      this.msg += val;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showTabMore(type) {
      this.emotionZone = false;
      this.moreOptionsZone = false;
      if (type == 0) {
        this.emotionZone = true;
      } else {
        this.moreOptionsZone = true;
      }
      this.showMoreTab = true;
      this.chatbox.scrollTo(0, this.chatbox.scrollHeight);
    },
    buildChatMsg() {
      let imgSrc = this.$route.params.headshot;
      let username = this.$route.params.username;
      let timeObj = this.getTime(this.lastTime) || {};
      if (timeObj.time) {
        this.lastTime = timeObj.curTime;
      }
      let msgStruct = {
        type: -1,
        imgSrc,
        username,
        content: this.msg,
        time: timeObj.time || false
      };
      return JSON.stringify(msgStruct);
    },
    sendMsg() {
      //发送消息
      socket.emit("chat message", this.buildChatMsg());
      this.msg = "";
    },

    initialChat() {
      this.chatbox = this.$refs.messageBox;
      // 监听服务器返回的消息
      socket.on("chat message", data => {
        this.msgItemList.push(JSON.parse(data));
        this.chatbox.scrollTo(0, this.chatbox.scrollHeight);
      });
      //读取历史消息
      ajax.call(this, "readHistory", {}, (res, err) => {
        if (!err) {
          let list = res.content;
          list.forEach(val =>
            this.msgItemList.push(JSON.parse(val.replace(/\r*\n*/gim, "")))
          ); 
        }
      });
    },
    initCommon() {
      this.chatbox.onscroll = () => {
        this.refresh = this.chatbox.scrollTop == 0 ? true : false; //监听滚动事件，上拉刷新数据
      };
      this.chatbox.ontouchend = () => {
        this.showMoreTab = false; //隐藏showmoreTab
      };
    }
  },
  mounted() {
    this.initialChat();
    this.initCommon();
    this.chatbox.scrollTo(0, this.chatbox.scrollHeight);
  },
  beforeCreate() {
    this.$store.commit("updateIsLoadTabBarState", { status: false });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("updateIsLoadTabBarState", { status: true });
    next();
  },
  mixins: [mixin]
};
</script>
<style lang="scss" scoped>
$shadow: 2px 2px 4px 2px #ccc;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.van-nav-bar .van-icon {
  color: #fff !important;
}
body {
  font: 14px Helvetica, Arial;
}
.box {
  position: relative;
}
.form {
  background: #fff;
  position: fixed;
  width: 100%;
  left: 0;
  border: solid 1px #ccc;
  z-index: 1000;
  & .wrapSend {
    border-bottom: solid 1px #efefef;
    overflow: hidden;
    & textarea {
      float: left;
      border: 0;
      padding-top: 11px;
      width: 75%;
      min-width: 200px;
      height: 100%;
      left: 0;
      resize: none;
      height: 35px;
      box-sizing: border-box;
      background-color: rgba(220, 220, 220, 0.2);
    }
    & button {
      float: right;
      width: 40px;
      background: #249c29;
      border: none;
      height: 30px;
      right: 0;
      margin-top: 3px;
      line-height: 100%;
      font-size: 12px;
      color: white;
    }
    & .tab-more {
      float: right;
      & .van-icon-add-o,
      & .van-icon-like-o {
        font-size: 25px;
        margin-top: 4px;
        margin-right: 10px;
        float: left;
        color: #222;
      }
    }
  }
  & .moreZone {
    position: relative;
    height: 150px;
    width: 100%;
  }
}
.van-pull-refresh #messages {
  list-style-type: none;
  margin: 0;
  padding: 10px 5px;
  background: rgba(190, 190, 190, 0.3);
  height: calc(100vh - 79px);
  overflow-y: scroll;
  border-radius: 5px;
}
.msgItem {
  padding: 10px;
  margin: 5px 0;
  text-align: left;
}
</style>

