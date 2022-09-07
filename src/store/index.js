import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
   state: {
      tasks: [],
      tasksSandBox: [],
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
      },
      // Получение всех задач с сервера
      GET_ALL_TASKS(state, response) {
         state.tasks = response.data.reverse()
         state.tasksSandBox = state.tasks
      },
      // Изменение статуса задачи
      CHANGE_TASK_STATUS(state, task) {
         state.tasks.find((item) => item.id === task.id).checkbox = !task.checkbox
         if (state.tasks.find((item) => item.id === task.id).checkbox === true){
            state.tasks.find((item) => item.id === task.id).status.name = 'done'
            state.tasks.find((item) => item.id === task.id).status.value = 'Выполнено'
         }else{
            state.tasks.find((item) => item.id === task.id).status.name = 'active'
            state.tasks.find((item) => item.id === task.id).status.value = 'В работе'
         }
         
      },
   },
   actions: {
      SAVE_ACTIVE_SELECT({ commit }, activeSelect){
         commit('SAVE_ACTIVE_SELECT', activeSelect)
      },
      // Получение всех задач с сервера
      async GET_ALL_TASKS({ commit }) {
         const response = await axios.get('http://localhost:3000/tasks')
         commit('GET_ALL_TASKS', response)
         return response
      },
      // Изменение статуса задачи
      async CHANGE_TASK_STATUS({ commit }, task) {
         commit('CHANGE_TASK_STATUS', task)
         await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
            checkbox: task.checkbox,
            status: {
               name: task.status.name,
               value: task.status.value,
            }
         })
      },
   },
   getters: {
      FILTER_OPTIONS_LIST(state) {
         return state.filterOptionsList
      },
      ACTIVE_FILTER_OPTION(state) {
         return state.activeFilterOption
      },
      // Массив со всеми задачами
      TASKS(state) {
         return state.tasks
      },
      
   }
})
