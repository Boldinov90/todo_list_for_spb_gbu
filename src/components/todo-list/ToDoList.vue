<template>
   <div class="todo-list">
      <ToDoListItem />
   </div>
</template>

<script>
import ToDoListItem from '../todo-list/ToDoListItem.vue'
export default {
   components: {
      ToDoListItem,
   },
}
</script>

<style lang="scss" scoped>
.todo-list {
}
</style>
