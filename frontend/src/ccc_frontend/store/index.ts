import { getAccessorType } from 'typed-vuex'

// サブモジュールのインポート
import * as book from '~/store/book'
import * as user from '~/store/user'
export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    book,
    user
  }
})