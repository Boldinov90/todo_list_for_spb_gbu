<template>
   <div class="form-overlay" @click.self="closeFormAddTask">
      <form class="form" @submit.prevent>
         <div class="form__form-header">
            <MyTitle
               :textTitle="'Создать новую задачу'"
               class="form-header__title"
            />
            <img
               src="../../assets/icons/btn-form-close.svg"
               class="form-header__btn-close"
               @click="closeFormAddTask"
            />
         </div>
         <MyFormInput
            class="form__input"
            :textLabel="'Описание'"
            :textPlaceholder="'Введите описание'"
            v-model="inputValue"
         />
         <div class="form__btn">
            <MyButton
               :textButton="'Создать'"
               class="btn"
               @click.prevent="addNewTask"
            />
         </div>
      </form>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import MyTitle from './MyTitle.vue'
import MyFormInput from './MyFormInput.vue'
import MyButton from './MyButton.vue'

export default {
   data() {
      return {
         inputValue: '',
      }
   },
   components: {
      MyTitle,
      MyFormInput,
      MyButton,
   },
   methods: {
      ...mapActions(['TOGGLE_STATUS_FORM_ADD_TASK_OPEN']),
      // Изменение статуса отображения формы
      closeFormAddTask() {
         // Закрытие формы
         this.TOGGLE_STATUS_FORM_ADD_TASK_OPEN()
      },
      // Проброс события и передача значения инпута родителю
      addNewTask() {
         this.$emit('addNewTask', {
            inputValue: this.inputValue,
         })
         // Очищаем поле ввода
         this.inputValue = ''
      },
   },
}
</script>

<style lang="scss" scoped>
.form-overlay {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background: rgba(255, 255, 255, 0.01);
   backdrop-filter: blur(2px);
   display: flex;
   justify-content: center;
   align-items: center;
   .form {
      width: 400px;
      height: 281px;
      background: #ffffff;
      border: 1px solid #dde2e4;
      box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      .form__form-header {
         margin-left: 40px;
         margin-right: 40px;
         margin-top: 40px;
         display: flex;
         justify-content: space-between;
         .form-header__title {
            font-size: 18px;
            font-weight: 700;
         }
         .form-header__btn-close {
            transition: 0.2s;
            &:hover {
               transform: scale(1.1);
               transition: 0.2s;
            }
            &:active {
               transform: scale(1);
            }
         }
      }
      .form__input {
         margin-left: 40px;
         margin-right: 40px;
      }
      .form__btn {
         margin-top: 30px;
         width: 100%;
         display: flex;
         justify-content: center;
      }
   }
}
</style>