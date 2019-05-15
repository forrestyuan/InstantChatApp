import HeadBarConponent from './HeadBar.vue'

const headBar = {
	install: function (Vue) {
		Vue.component('head-bar', HeadBarConponent)
	}
}

export default headBar
