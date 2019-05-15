<template>
  <div>
    <div class="bar-right-self">
      <van-icon name="search" @click="Search" />
      <van-icon name="add-o"  @click="showPopList" />
    </div>
    <div id="popUpList" v-show="showPop" class="popList-self">
        <van-cell v-for="(item,index) in popList" :key="index" :title="item.title" @click="item.callback">
          <van-icon slot="icon" :name="item.icon" />
      </van-cell>
    </div>
    <div style="position:fixed;left:0;top:45px;z-index:2000;background:#eee" v-if="showScan">
        <fox-scan @hideScans="hideScans"/>
    </div>
  </div>
</template>
<script>
import PhotoView from "@/components/PhotoView";
export default {
  name: "search-more",
  components: {
    "fox-scan": PhotoView
  },
  data() {
    return {
      showPop: false,
      showScan: false,
      popList: [
        { title: "发起群聊", icon: "chat", callback: this.emptyFunc },
        { title: "添加朋友", icon: "contact", callback: this.emptyFunc },
        { title: "扫一扫", icon: "aim", callback: this.showScans },
        { title: "收付款", icon: "value-card", callback: this.emptyFunc },
        { title: "帮助和反馈", icon: "question", callback: this.emptyFunc }
      ]
    };
  },
  methods: {
    Search() {
      console.log("search");
    },
    showPopList() {
      this.showPop = !this.showPop;
    },
    showScans() {
      console.log("godo");
      this.showScan = true;
      this.showPopList();
    },
    hideScans() {
      this.showScan = false;
    },
    emptyFunc() {
      console.log("empty fucn");
      this.showPopList();
    }
  },
  mounted() {
    window.onscroll = () => {
      this.showPop = false;
    };
  }
};
</script>
<style lang="scss" scoped>
$bgColor: #555;
$fontSize: 20px;
$smallFontSize: 14px;
$fontColor: #fff;
.bar-right-self {
  & .van-icon-search {
    color: $fontColor;
    margin-right: $fontSize;
    font-size: $fontSize;
  }
  & .van-icon-add-o {
    color: $fontColor;
    font-size: $fontSize;
  }
}

.popList-self {
  position: fixed;
  right: 10px;
  top: 45px;
  z-index: 20010;
  width: 45vw;
  & .van-cell {
    background: $bgColor;
    color: $fontColor;
    line-height: 1;
    padding: 15px 10px;
    &:not(:last-child)::after {
      border-bottom: 1px solid #444;
      left: 0;
    }
    &:first-child {
      border-top: 1px solid #444;
    }
    & .van-icon {
      color: $fontColor;
    }
  }
}
</style>

