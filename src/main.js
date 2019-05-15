import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import directives from '@/lib/E.js';
import 'vant/lib/index.css';
import store from './store'
//自定义组件库
import tabBar from '@/components/tabBar';
import headBar from '@/components/headBar';
import subMenu from '@/components/subMenu';
import listItem from '@/components/listItem';
import emotionList from '@/components/emotion'
import loading from '@/components/loading'
//自定义指令

import Emotion from '@/directives/emotion.js';

Vue.use(Vant);
Vue.use(directives);
Vue.use(tabBar);
Vue.use(headBar);
Vue.use(subMenu);
Vue.use(listItem);
Vue.use(emotionList);
Vue.use(loading);

Vue.use(Emotion);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
