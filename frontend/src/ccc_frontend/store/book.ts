import Vue from 'vue'
import { mutationTree, actionTree} from 'typed-vuex'
import { BookState } from '../types/book';

export const state = (): BookState => ({
    id: 0,
    isbn: 0,
    page: 0,
    thum: '',
    status: '',
    startDay: '',
    endDay: ''
})

export const mutations = mutationTree(state, {
    SET_ID(state: BookState, id: number){
        state.id = id
    },
    SET_ISBN(state: BookState, isbn: number){
        state.isbn = isbn
    },
    SET_PAGE(state: BookState, page: number){
        state.page = page
    },
    SET_THUM(state: BookState, thum: string){
        state.thum = thum
    },
    SET_STATUS(state: BookState, status: string){
        state.status = status
    },
    SET_STARTDAY(state: BookState, start: string){
        state.startDay = start
    },
    SET_ENDDAY(state: BookState, end: string){
        state.endDay = end
    }
})

export const actions = actionTree(
    {state, mutations}, 
    {
        setId({ commit }, id: number) {
            commit('SET_ID', id)
        },
        setIsbn({ commit }, isbn: number) {
            commit('SET_ISBN', isbn)
        },
        setPage({ commit }, page: number) {
            commit('SET_PAGE', page)
        },
        setThum({ commit }, thum: string) {
            commit('SET_THUM', thum)
        },
        setStatus({ commit }, status: string) {
            commit('SET_STATUS', status)
        },
        setStartDay({ commit }, start: string) {
            commit('SET_STARTDAY', start)
        },
        setEndDay({ commit }, end: string) {
            commit('SET_ENDDAY', end)
        },
})