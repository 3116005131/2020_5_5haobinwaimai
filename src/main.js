/*
  入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
Vue.component(Button.name, Button)
let vue = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store // 使用时vuex
})
Vue.use({
  vue
})
