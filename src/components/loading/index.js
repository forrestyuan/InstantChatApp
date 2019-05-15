import LoadingComponet from './Loading.vue';

const Loading = {
  install:function(Vue){
    Vue.component("loading", LoadingComponet);
  }
};

export default Loading;