import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { ethers } from 'ethers'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  ethers,
  render: h => h(App),
  created() {
    store.dispatch('checkWallet')
  }
}).$mount('#app')


// Initialize ethers store
store.dispatch('ethers/init')
