import { createStore } from 'vuex'

export default createStore({
   state: {
      filterOptionsList: [
         {
            name: 'date',
            value: 'Дата'
         },
         {
            name: 'status',
            value: 'Статус'
         }
      ],
      activeFilterOption: {
         name: 'date',
         value: 'Дата'
      }
   },
   mutations: {
      SAVE_ACTIVE_SELECT(state, activeSelect){
         state.activeFilterOption = activeSelect
      }
   },
   actions: {
      SAVE_ACTIVE_SELECT({ commit }, activeSelect){
         commit('SAVE_ACTIVE_SELECT', activeSelect)
      }
   },
   getters: {
      FILTER_OPTIONS_LIST(state) {
         return state.filterOptionsList
      },
      ACTIVE_FILTER_OPTION(state) {
         return state.activeFilterOption
      }
   }
})
