<template>
  <div class="post_msg">
    <router-link class="post_link" :to="{name:url,params:{headshot:headshot,username:username,toid:toid}}"></router-link>
    <span class="headshot"><img :src="headshot"></span>
    <dl class="post_detail">
      <dt>
        <span class="post_username">{{username}}</span>
        <span class="post_date">{{date}}</span>
      </dt>
      <dd>
        <span class="post_content">{{content}}</span>
        <span v-if="num== 0 ? false: true" class="post_num">{{num}}</span>
      </dd>
    </dl>
    
  </div>
</template>
<script>
export default {
  name:'list-item',
  props:[
    "url",
    "headshot",
    "username",
    "date",
    "content",
    "num",
    "fromid",
    "toid"
  ],
}
</script>
<style lang="scss" scoped>
.post_msg {text-align: left;font-size: 12px;position: relative;height: 40px;padding: 10px 5px 5px;border-bottom: solid 1px #efefef;background: #fff;
  & .post_link {position: absolute;width: 100%;height: 100%;left: 0;top: 0;z-index: 1;}
  & .headshot {position: absolute;}
  & .headshot img {width: 40px;height: 40px;}
  & .post_detail {display: block;margin-left: 50px;
    & dt {overflow: hidden;margin-bottom: 5px;}
    & .post_username {font-size: 16px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 59%;position: absolute;}
    & .post_date {color: #ccc;float: right;margin-top: 5px;font-size: 12px;}
    & dd {position: relative;line-height: 15px;}
    & .post_content {font-size: 13px;display: inline-block;width: 93%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #a0a0a0;}
    & .post_num {position: absolute;display: inline-block;min-width: 12px;min-height: 12px;text-align: center;line-height: 12px;background: #c00;border-radius: 100%;padding: 2px;color: #fff;}
  } 
}
</style>
