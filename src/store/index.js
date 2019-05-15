import  Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    isLoadTabBar: true,
    userinfo:{
      user_id:10325,
      username:"FoxYuan",
      headshot:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911315215,2319544750&fm=26&gp=0.jpg"
    }
  },
  mutations:{
    updateIsLoadTabBarState(state, payload){
      state.isLoadTabBar = payload.status;
    },
    updateUserInfo(state, payload){
      state.userinfo = payload;
    }
  },
  actions:{
    
  },
  plugins: [createPersistedState()]
});

