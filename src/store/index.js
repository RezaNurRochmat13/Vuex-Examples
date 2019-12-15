import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Rejak Onigiri From Japan',
    fruits: [
      {name: 'Pears'}
    ],
    title: 'Vuex State Management'
  },
  mutations: {
    ADD_FRUITS: (state, newFruits) => {
      state.fruits.push(newFruits)
    },
    REMOVED_FRUITS: (state, removedFruits) => {
      state.fruits.splice(removedFruits, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
