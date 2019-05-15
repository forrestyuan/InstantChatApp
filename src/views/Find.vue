<template>
  <div class="wrap">
    <van-tabs v-model="activeTab" @click="tabClickEvent" :sticky="true">
      <van-tab v-for="(item, key) in groupList" :key="'tab'+key" :title="item.name">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="wrapSubGroup" v-for="(info,sub) in newsList" :key="'info'+sub">
            <van-card
              :style="'max-height:60px;margin-bottom:10px'"
              :num="info.created_at.substring(0,10)"
              :title="info.title"
              :thumb="info.icon"
            />
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <!-- loading -->
    <loading :loading="isShowLoadingNews"/>
  </div>
</template>
<script>
import { ajax, mixin } from "../utils/index.js";
export default {
  name: "findpage",
  data() {
    return {
      activeTab: 0,
      newsList: [],
      // loadPage:1,

      groupList: [],
      isShowLoadingNews: false,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 10);
      //this.initSubGroup(this.groupList[this.activeTab].en_name,this.loadPage)
    },
    tabClickEvent(index, title) {
      if (index == this.activeTab) {
        return false;
      }
      console.log(index, title);
    },
    initSubGroup(group) {
      this.isShowLoadingNews = true;
      ajax.call(
        null,
        `http://gank.io/api/xiandu/category/${group}`,
        {},
        (res, err) => {
          console.log(res)
          if (!err) {
            this.isShowLoadingNews = false;
            this.newsList = res.results;
            this.$toast("刷新成功");
            
          } else {
            console.log(err);
          }
        },
        "get"
      );
    }
  },
  beforeCreate() {
    ajax.call(
      null,
      "http://gank.io/api/xiandu/categories",
      {},
      (res, err) => {
        if (!err) {
          this.groupList = res.results;
          this.initSubGroup(res.results[0].en_name);
        } else {
          console.log(err);
        }
      },
      "get"
    );
  },
  watch:{
    activeTab(val){
      this.initSubGroup(this.groupList[val].en_name);
    }
  },
  mixins: [mixin]
};
</script>
<style lang="scss">
.wrapNewsBox {
  padding: 5px;
  width: 100%;
  margin: 0;
}
.wrapNewsBox * {
  max-width: 100%;
}
.wrapNewsBox p {
  text-align: left;
  text-indent: 2em;
  line-height: 1.2em;
  margin: 11px 0;
  letter-spacing: 2px;
}
.wrapNewsBox li {
  display: inline-block;
  margin: 5px;
  vertical-align: middle;
}

 .wrapSubGroup div.van-card__title {
    font-size: 16px!important;
    line-height: 40px!important;
    text-align: left;
}
.wrapSubGroup .van-card__thumb  {
    width:60px;
    height:50px;
}
.wrapSubGroup .van-card__thumb img {
  position: absolute;
}

</style>
