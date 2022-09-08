<template>
   <div class="header container">
      <div class="header__header-top">
         <MyTitle class="header-top__title" :textTitle="'To do list'" />
         <MyCircleAddButton @click="openFormAddTask" />
      </div>
      <div class="header__header-filters">
         <div class="header-filters__search-by-text">
            <img
               class="search-by-text__icon"
               src="@/assets/icons/search-icon.svg"
            />
            <MySearchInput
               class="search-by-text__input"
               :textPlaceholder="'Поиск Имени, статуса или даты'"
               v-model="searchInputValue"
            />
         </div>
         <div class="header-filters__filter-status-or-date">
            <MyCustomSelect
               :filterOptionsList="FILTER_OPTIONS_LIST"
               :selectLabel="'Сортировать по:'"
            />
         </div>
      </div>
      <div class="header__header-tasks-list">
         <div class="header-tasks-list__item description">Описание</div>
         <div class="header-tasks-list__item status">Статус</div>
         <div class="header-tasks-list__item date">Дата</div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyTitle from '@/components/UI/MyTitle.vue'
import MyCircleAddButton from '@/components/UI/MyCircleAddButton.vue'
import MySearchInput from '@/components/UI/MySearchInput.vue'
import MyCustomSelect from '@/components/UI/MyCustomSelect.vue'

export default {
   name: 'Header',
   data() {
      return {
         searchInputValue: '',
      }
   },
   components: {
      MyTitle,
      MyCircleAddButton,
      MySearchInput,
      MyCustomSelect,
   },
   methods: {
      ...mapActions([
         'SEARCH_TASKS_BY_TEXT',
         'TOGGLE_STATUS_FORM_ADD_TASK_OPEN',
      ]),
      // Функция изменения статуса открытия/закрытия формы добавления задачи
      openFormAddTask() {
         // Изменение статуса открытия/закрытия формы добавления задачи
         this.TOGGLE_STATUS_FORM_ADD_TASK_OPEN()
      },
   },
   computed: {
      ...mapGetters(['FILTER_OPTIONS_LIST']),
   },
   watch: {
      // Отслеживание изменения переменной (инпут поиска)
      searchInputValue() {
         // Поиск задач по тексту
         this.SEARCH_TASKS_BY_TEXT(this.searchInputValue)
      },
   },
}
</script>

<style lang="scss" scoped>
.header {
   background-color: white;
   .header__header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-top__title {
         margin-left: 40px;
         font-size: 24px;
      }
   }
   .header__header-filters {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-filters__search-by-text {
         display: flex;
         align-items: center;
         width: 50%;
         .search-by-text__icon {
            margin-left: 40px;
         }
         .search-by-text__input {
            margin-left: 16px;
            width: 100%;
         }
      }
   }
   .header__header-tasks-list {
      margin-top: 30px;
      height: 32px;
      margin-left: 80px;
      display: grid;
      grid-template-columns: auto 151px 151px;
      .header-tasks-list__item {
         padding-left: 20px;
         border-left: 1px solid #c4c4c4;
         display: flex;
         align-items: center;
         @extend %styleStandartText;
      }
   }
}
</style>