// import Vue from 'vue'
import { createStore } from 'vuex'
import apiClient from '../lib/apiClient'


// Vue.config.devtools = true

export default createStore({
  state: {
    characters: [],
    genders: [],
    quotes: [],
  },
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload
    },
    setGenders (state, payload) {
      state.genders = payload
    },
    setQuotes (state, payload) {
      state.quotes = payload
    },
  },
  actions: {
    async getCharacters ({ commit }) {
      try {
        const data = await apiClient({
          url: '/character'
        })
        commit('setCharacters', data);
      } catch (err) {
        console.log('error', err)
      }
    },
    async getQuotes ({ commit }) {
      try {
        const data = await apiClient({
          url: '/quote'
        })
        commit('setQuotes', data);
      } catch (err) {
        console.log('error', err)
      }
    },
    async getGender ({ commit }) {
      console.log('paso')
      try {
        const data = await apiClient({
          url: '/character'
        })
        const arr = []
        await data.forEach((item)=>{
            if(!arr.includes(item.gender)){
              arr.push(item.gender);
          }
        })
        commit('setGenders', arr);
      } catch (err) {
        console.log('error', err)
      }
    }
  },
  modules: {
  },
  getters: {
    characters: (state) => state.characters,
  },
})
