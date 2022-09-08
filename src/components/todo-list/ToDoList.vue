<template>
   <div class="todo-list">
      <ToDoListItem :task="task" v-for="task of TASKS_SANDBOX" :key="task" />
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
}
</style>