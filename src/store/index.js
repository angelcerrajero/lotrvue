// import Vue from 'vue'
import { createStore } from 'vuex'
import apiClient from '../lib/apiClient'
import _ from 'lodash'


// Vue.config.devtools = true

export default createStore({
  state: {
    characters: [],
    genders: [],
    quotes: [],
    filters: {},
    logActions: localStorage.getItem('logAction') || []
  },
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload
    },
    setFilter (state, payload) {
      state.filters[payload.key] = payload.data
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
        const data = await apiClient({ url: '/character' })
        commit('setCharacters', data);
      } catch (err) {
        throw new Error(err)
      }
    },
    async getCharactersByName ({ commit }, text) {
      try {
        const data = await apiClient({ url: `/character?name=/${text}/i` })
        commit('setCharacters', data);
      } catch (err) {
        throw new Error(err)
      }
    },
    async getQuotes ({ commit }) {
      try {
        const data = await apiClient({
          url: '/quote'
        })
        commit('setQuotes', data);
      } catch (err) {
        throw new Error(err)
      }
    },
    async getGender ({ commit }) {
      try {
        const data = await apiClient({
          url: '/character'
        })
        const arr = []
        await data.forEach((item) => {
          if (!arr.includes(item.gender)) {
            arr.push(item.gender);
          }
        })
        commit('setGenders', arr);
      } catch (err) {
        throw new Error(err)
      }
    },

    getFilter ({ commit, state }, key) {
      try {
        const data = Object.keys(_.groupBy(state.characters, n => n[key])).map(k => { return { text: k, value: k } })
        commit('setFilter', { key, data })
      } catch (err) {
        throw new Error(err)
      }
    }


  },
  modules: {
  },
  getters: {
    characters: (state) => state.characters,
  },
})
