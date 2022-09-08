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
      },
      isFormAddTaskOpen: false,
      isSelectOpen: false
   },
   mutations: {
      // Получение и запись данных из localStorage
      SET_DATA_FROM_LOCALSTORAGE_TO_STATE(state, lS) {
         state.activeFilterOption = lS.activeFilterOption
      },
      // Запись активного пунка селекта
      SAVE_ACTIVE_SELECT(state, activeSelect) {
         state.activeFilterOption = activeSelect
         const lS = {
            activeFilterOption: state.activeFilterOption
         }
         // Записываем данные в LocalStorage
         localStorage.setItem('appBoldinov', JSON.stringify(lS))
      },
      // Получение всех задач с сервера
      GET_ALL_TASKS(state, response) {
         // Запись данных в основной массив
         state.tasks = response.data.reverse()
         // Запись данных в массив-песочницу
         state.tasksSandBox = state.tasks
      },
      // Изменение статуса задачи
      CHANGE_TASK_STATUS(state, task) {
         // Поиск и изменения статуса задачи по id 
         state.tasks.find((item) => item.id === task.id).checkbox = !task.checkbox
         // Если значение checkbox - true
         if (state.tasks.find((item) => item.id === task.id).checkbox) {
            // Поиск и изменения статуса на DONE
            state.tasks.find((item) => item.id === task.id).status = { name: 'done', value: 'Выполнено' }
         } else {
            // Поиск и изменения статуса задачи на ACTIVE
            state.tasks.find((item) => item.id === task.id).status = { name: 'active', value: 'В работе' }
         }
      },
      // Поиск по тексту, дате и статусу задачи
      SEARCH_TASKS_BY_TEXT(state, text) {
         // Запись массива с задачами в массив-песочницу
         state.tasksSandBox = state.tasks
         // Удаление значений, не соответствующих критериям поиска (остаются совпадения по описанию, дате и статусу)
         state.tasksSandBox = state.tasksSandBox.filter(element => {
            return element.description.toLowerCase().includes(text)
               || element.date.toLowerCase().includes(text)
               || element.status.value.toLowerCase().includes(text)
         })
      },
      // Сортировка задач по значению
      SORT_TASKS_BY_KEY(state) {
         state.tasksSandBox = state.tasksSandBox.sort((a, b) => {
            if (state.activeFilterOption.name === 'status') {
               if (a.status.name < b.status.name) return -1
               if (a.status.name < b.status.name) return 1
            }
            if (state.activeFilterOption.name === 'date') {
               a = a.date.split('.').reverse().join('');
               b = b.date.split('.').reverse().join('');
               return a < b ? 1 : a > b ? -1 : 0;
            }
         })
      },
      // Добавление новой задачи
      ADD_NEW_TASK(state, newTask) {
         // Добавление задачи в начало массива
         state.tasks.unshift(newTask)
         // Запись обновленного массива в массив-песочницу
         state.tasksSandBox = state.tasks
      },
      // Переключение статуса открытия формы добавления новой задачи
      TOGGLE_STATUS_FORM_ADD_TASK_OPEN(state) {
         state.isFormAddTaskOpen = !state.isFormAddTaskOpen
      },
      // Переключение статуса открытия кастомного селекта в фильте
      TOGGLE_STATUS_SELECT_OPEN(state) {
         state.isSelectOpen = !state.isSelectOpen
      }
   },
   actions: {
      // Получение данных из localStorage
      SET_DATA_FROM_LOCALSTORAGE_TO_STATE({ commit }) {
         let lS = JSON.parse(localStorage.getItem('appBoldinov'))
         if (!lS) {
            lS = {
               activeFilterOption: {
                  name: 'date',
                  value: 'Дата'
               },
            }
            localStorage.setItem('appBoldinov', JSON.stringify(lS))
         } else {
            commit('SET_DATA_FROM_LOCALSTORAGE_TO_STATE', lS)
            return lS
         }
      },
      // Запись активного пунка селекта
      SAVE_ACTIVE_SELECT({ commit }, activeSelect) {
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
      // Поиск по тексту, дате и статусу задачи
      async SEARCH_TASKS_BY_TEXT({ commit }, text) {
         commit('SEARCH_TASKS_BY_TEXT', text)
      },
      // Сортировка задач по значению
      SORT_TASKS_BY_KEY({ commit }) {
         commit('SORT_TASKS_BY_KEY')
      },
      // Добавление новой задачи
      async ADD_NEW_TASK({ commit }, newTask) {
         commit('ADD_NEW_TASK', newTask)
         await axios.post('http://localhost:3000/tasks', newTask)
      },
      // Переключение статуса открытия формы добавления новой задачи
      TOGGLE_STATUS_FORM_ADD_TASK_OPEN({ commit }) {
         commit('TOGGLE_STATUS_FORM_ADD_TASK_OPEN')
      },
      // Переключение статуса открытия кастомного селекта в фильте
      TOGGLE_STATUS_SELECT_OPEN({ commit }) {
         commit('TOGGLE_STATUS_SELECT_OPEN')
      }
   },
   getters: {
      // Список селекта
      FILTER_OPTIONS_LIST(state) {
         return state.filterOptionsList
      },
      // Активный пункт селекта
      ACTIVE_FILTER_OPTION(state) {
         return state.activeFilterOption
      },
      // Массив со всеми задачами
      TASKS(state) {
         return state.tasks
      },
      // Массив-песочница
      TASKS_SANDBOX(state) {
         return state.tasksSandBox
      },
      // Статус отображения формы добавления новой задачи
      IS_FORM_ADD_TASK_OPEN(state) {
         return state.isFormAddTaskOpen
      },
      // Статус открытия списка селекта
      IS_SELECT_OPEN(state) {
         return state.isSelectOpen
      }
   }
})
