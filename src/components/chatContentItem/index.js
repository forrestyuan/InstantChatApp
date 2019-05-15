import chatContentItem from './ChatContentItem.vue';
const ChatContentItem = {
  install: Vue=>{
    Vue.component("chat-con-item", chatContentItem);
  }
}

export default  ChatContentItem;