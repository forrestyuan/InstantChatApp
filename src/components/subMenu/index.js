import subMenuComponent from './SubMenu.vue';

const subMenu = {
  install:function(Vue){
    Vue.component("sub-menu", subMenuComponent);
  }
};

export default subMenu;
