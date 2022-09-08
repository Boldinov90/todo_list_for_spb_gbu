<template>
   <div class="todo container">
      <Header class="todo__header" />
      <ToDoList />
      <MyFormAddNewTask v-if="IS_FORM_ADD_TASK_OPEN" @addNewTask="addNewTask" />
   </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import ToDoList from '@/components/todo-list/ToDoList.vue'
import MyFormAddNewTask from '@/components/UI/MyFormAddNewTask.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'ToDo',
   data() {
      return {
         isFormAddTaskOpen: true,
      }
   },
   components: {
      Header,
      ToDoList,
      MyFormAddNewTask,
   },
   methods: {
      ...mapActions(['TOGGLE_STATUS_FORM_ADD_TASK_OPEN', 'ADD_NEW_TASK']),
      // Функция добавления новой задачи
      addNewTask(data) {
         // Проверка, если поле ввода не пустое (защита от добавления пустой задачи)
         if (data.inputValue.trimStart() !== '') {
            // Создание объекта с новой задачей
            const newTask = {
               id: new Date().valueOf(),
               checkbox: false,
               description: data.inputValue,
               status: {
                  name: 'active',
                  value: 'В работе',
               },
               date: new Date().toLocaleDateString(),
            }
            // Добавление новой задачи во VUEX и отправка на сервер
            this.ADD_NEW_TASK(newTask)
            // Закрытие формы добавления новой задачи
            this.TOGGLE_STATUS_FORM_ADD_TASK_OPEN()
         }
      },
   },
   computed: {
      ...mapGetters(['IS_FORM_ADD_TASK_OPEN']),
   },
}
</script>

<style scoped lang="scss">
.todo {
   .todo__header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      padding-top: 100px;
   }
}
</style>