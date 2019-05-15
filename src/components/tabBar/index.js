import TabBarConponent from './TabBar.vue'

const tabBar = {
	install: function (Vue) {
		Vue.component('tab-bar', TabBarConponent)
	}
}

export default tabBar
