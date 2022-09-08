<template>
   <div>
      <ToDo />
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import ToDo from './views/ToDo.vue'

export default {
   name: 'App',
   components: {
      ToDo,
   },
   methods: {
      ...mapActions([
         'GET_ALL_TASKS',
         'SET_DATA_FROM_LOCALSTORAGE_TO_STATE',
         'SORT_TASKS_BY_KEY',
      ]),
   },
   async beforeMount() {
      // Записываем данные из LocalStorage во VUEX
      await this.SET_DATA_FROM_LOCALSTORAGE_TO_STATE()
      // Получения всех задач с сервера
      await this.GET_ALL_TASKS()
      // Сортировка задач по ключу селекта
      await this.SORT_TASKS_BY_KEY()
   },
}
</script>

<style lang="scss"></style>