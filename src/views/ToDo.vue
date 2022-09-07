<template>
   <div class="todo container">
      <Header class="todo__header" />
      <ToDoList />
   </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import ToDoList from '@/components/todo-list/ToDoList.vue'
export default {
   name: 'ToDo',
   components: {
      Header,
      ToDoList,
   },
}
</script>

<style scoped lang="scss">
.todo {
   position: relative;
   .todo__header {
      position: fixed;
      left: 0;
      right: 0;
      top: 100px;
   }
}
</style>