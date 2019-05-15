import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import ChatList from '@/views/ChatList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      redirect: "chatlist",
      children: [{
          path: 'chat',
          name: "chat",
          component: Chat
        },
        {
          path: 'chatlist',
          name: "chatlist",
          component: ChatList
        },
      ]
    },
    {
      path: '/find',
      name: 'find',
      component: () => import( /* webpackChunkName: "find" */ './views/Find.vue')
    }
  ],
})