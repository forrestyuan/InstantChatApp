import ListItemComponent from './ListItem.vue';

const listItem = {
  install:function(Vue){
    Vue.component("list-item", ListItemComponent);
  }
};

export default listItem;