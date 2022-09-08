<template>
   <div class="todo-list">
      <ToDoListItem :task="task" v-for="task of TASKS_SANDBOX" :key="task" />
      <div class="missingTasks" v-if="!TASKS_SANDBOX.length">
         Ничего не найдено
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoListItem from '../todo-list/ToDoListItem.vue'
export default {
   components: {
      ToDoListItem,
   },
   computed: {
      ...mapGetters(['TASKS_SANDBOX']),
   },
}
</script>

<style lang="scss" scoped>
.todo-list {
   margin-top: 266px;
   .missingTasks {
      text-align: center;
      margin-top: 400px;
      @extend %styleTitleText;
   }
}
</style>