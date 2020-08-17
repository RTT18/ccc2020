import Vue from 'vue'
import { mutationTree, actionTree} from 'typed-vuex'
import { UserState } from '../types/user';

export const state = (): UserState => ({
    userId: ''
})

export const mutations = mutationTree(state, {
    SET_USER_ID(state: UserState, userId: string){
        state.userId = userId
    }
})

export const actions = actionTree(
    {state, mutations}, 
    {
        setUserId({ commit }, userId: string) {
            commit('SET_USER_ID', userId)
        }
})