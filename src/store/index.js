import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CostItemCollection: [],
    popupState: {
      categories: [],
    },
  },
  getters: {
    getCollection: (state) => state.CostItemCollection,
  },
  mutations: {
    loadCollection: (state, payload) => state.CostItemCollection.push(payload),
    loadCategories: (state, payload) =>
      state.popupState.categories.push(payload),
  },
  actions: {},
  modules: {},
})
