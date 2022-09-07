<template>
   <div class="todo-list-item">
      <label>
         <input
            :checked="task.checkbox"
            class="todo-list-item__column checkbox"
            :v-model="task.checkbox"
            type="checkbox"
            @click="changeTasksStatus(task)"
         />
         <div
            class="custom-checkbox"
            :class="{ 'custom-checkbox-true': task.checkbox }"
         >
            <img
               :class="{ 'custom-checkbox__checked-true': task.checkbox }"
               src="../../assets/icons/checkbox-checked.svg"
               alt="icon"
               class="custom-checkbox__checked-false"
            />
         </div>
      </label>
      <div class="todo-list-item__column description">
         {{ task.description }}
      </div>
      <div
         class="todo-list-item__column status"
         :class="{ 'status-done': task.checkbox }"
      >
         {{ task.status.value }}
      </div>
      <div class="todo-list-item__column date">{{ task.date }}</div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   props: {
      task: Object,
   },
   methods: {
      ...mapActions(['CHANGE_TASK_STATUS']),
      changeTasksStatus(task) {
         this.CHANGE_TASK_STATUS(task)
      },
   },
}
</script>

<style lang="scss" scoped>
.todo-list-item {
   height: 58px;
   border-top: 1px solid #eeebe9;
   border-bottom: 1px solid #eeebe9;
   display: grid;
   grid-template-columns: 80px auto 151px 151px;
   &:hover {
      background-color: $accent-background-color;
   }
   .todo-list-item__column {
      display: flex;
      align-items: center;
      @extend %styleStandartText;
      padding-left: 20px;
   }
   label {
      width: 20px;
      height: 20px;
      align-self: center;
      justify-self: center;
      .checkbox {
         display: none;
      }
      .custom-checkbox {
         align-self: center;
         justify-self: center;
         width: 17px;
         height: 17px;
         border-radius: 50%;
         border: 1px solid $standart-text-color;
         display: flex;
         justify-content: center;
         align-items: center;
         .custom-checkbox__checked-false {
            opacity: 0;
            transition: 0.2s;
         }
         .custom-checkbox__checked-true {
            opacity: 1;
            transition: 0.2s;
         }
      }
      .custom-checkbox-true {
         border: 1px solid $done-task-text-color;
      }
   }
   // .description {
   // }
   .status {
      color: $active-task-text-color;
   }
   .status-done {
      color: $done-task-text-color;
   }
   // .date {
   // }
}
</style>