import Vue from 'vue'
import Vuex from 'vuex'
import {ethers} from 'ethers'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentAccount: false,
  },
  mutations: {
    setCurrentAccount(state, payload) {
      state.currentAccount = payload
    }
  },
  actions: {
    checkWallet({ commit }) {
      const { ethereum } = window;
      if (!ethereum) {
        return;
      }
      var provider = new ethers.providers.Web3Provider(ethereum);

        const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();
        return accounts.length > 0;
      };
      isMetaMaskConnected().then((connected) => {
        if (connected) {
          commit('setCurrentAccount', true)
        }
      });
    },
  },
  modules: {
  }
})
