<template>
<div class="subMenu" :style="{left:posX+'px',top:posY+'px'}">
  <ul class="list">
    <li class="list-item" @click="unread">标为未读</li>
    <li class="list-item" @click="toTop">置顶聊天</li>
    <li class="list-item" @click="deleteItem">删除该聊天</li>
  </ul>
</div>
</template>
<script>
export default {
  name:"sub-menu",
  props:["posX","posY","menuList"],
  methods:{
    unread(){
      this.$emit('setNotRead')
    },
    toTop(){
      this.$emit('setToTop')
    },
    deleteItem(){
      this.$emit('deleteMsg')
    }
  },
  mounted() {
    window.onscroll = ()=>{
      this.$emit("hideListOper");
    }
  },
}
</script>
<style lang="scss" scoped>
.subMenu{
  position: fixed;
  display: inline-block;
  background-color:#fff;
  font-size:14px;
  border-radius: 5px;
  box-shadow:0 0 4px 1px #ccc;
  z-index: 2;
  & .list{
    display:inline-block;
    list-style:none;
    margin:0;
    padding:30px;
    & .list-item{
        margin:20px 0;
        font-size:14px;
        color:#222;
    }
    & .list-item:first-child,.list-item:last-child{
      margin:0;
    }
  }
}
</style>
