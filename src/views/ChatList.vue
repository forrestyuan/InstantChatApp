<template>
  <div class="home" @click="hideListOper">
    <head-bar>
      <span slot="lt">初心{{!list.length? ``:`(${list.length})`}}</span>
      <search-more slot="rt"/>
    </head-bar>

    <van-notice-bar mode="closeable">{{rollingTxt}}</van-notice-bar>
    <div
      v-longtap="{fn:showListOper,param1:key,param2:item,param3:list}"
      v-for="(item,key) in list"
      :key="key"
    >
      <list-item
        :url="item.url"
        :headshot="item.headshot"
        :username="item.username"
        :date="item.date"
        :content="item.content"
        :toid="item.to_id"
        :num="item.num"
      />
    </div>
    <!-- 弹出上下文框框 -->
    <sub-menu
      ref="ctxMenu"
      v-if="contextMenu.show"
      :posX="contextMenu.x"
      :posY="contextMenu.y"
      @hideListOper="hideListOper"
      @setNotRead="setNotRead"
      @setToTop="setToTop"
      @deleteMsg="deleteMsg"
    />
  </div>
</template>
<script>
import { ajax, mixin } from "../utils/index.js";
import searchMore from "@/components/headBar/Search-More";
export default {
  name: "chat-list",
  components: {
    "search-more": searchMore
  },
  data() {
    return {
      contextMenu: {
        show: false,
        x: 0,
        y: 0,
        operItem: {
          key: null,
          item: null,
          list: null
        }
      },
      rollingTxt: "",
      list: []
    };
  },
  methods: {
    setNotRead() {
      let operItem = this.list[this.contextMenu.operItem.key];
      if (operItem.num <= 0) {
        ++operItem.num;
        this.setToTop();
      }
    },
    setToTop() {
      let topItem = this.list.splice(this.contextMenu.operItem.key, 1);
      this.list.unshift(...topItem);
    },
    deleteMsg() {
      this.list.splice(this.contextMenu.operItem.key, 1);
    },
    hideListOper() {
      this.contextMenu.show = false;
    },
    showListOper(e, g, val) {
      let { x, y } = { ...g.firstTouchPosition };
      let screeW =
        window.document.documentElement.clientWidth ||
        window.document.documentElement.offsetWidth;
      let screeH =
        window.document.documentElement.clientHeight ||
        window.document.documentElement.offsetHeight;
      x = x > screeW - 130 ? screeW - 130 : x;
      y = y > screeH - 207 ? screeH - 207 : y;
      this.contextMenu.x = x;
      this.contextMenu.y = y;
      this.contextMenu.show = true;
      this.contextMenu.operItem.key = val.param1;
      this.contextMenu.operItem.item = val.param2;
      this.contextMenu.operItem.list = val.param3;
    }
  },
  created() {
    //请求滚动条信息
    ajax.call(this, "getTips", {}, (res, err) => {
      if (!err) {
        this.rollingTxt = res.tips;
      } else {
        this.$toast("滚动信息请求失败");
      }
    });
    //请求聊天列表
    ajax.call(this, "getChatList", { uid: 1 }, (res, err) => {
      if (!err) {
        this.list = res.list;
      }
    });
  },
  mixins: [mixin]
};
</script>
<style lang="scss" scoped>
</style>

