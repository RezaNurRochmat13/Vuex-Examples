import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Rejak Onigiri From Japan',
    fruits: [
      { name: 'Pears' },
      { name: 'Apple' },
      { name: 'Mangos' }
    ],
    title: 'Vuex State Management'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
