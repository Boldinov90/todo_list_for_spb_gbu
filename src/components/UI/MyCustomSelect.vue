<template>
   <div class="custom-select">
      <div class="custom-select__label">{{ selectLabel }}</div>
      <div class="custom-select__select">
         <div class="select__active">
            {{ ACTIVE_FILTER_OPTION.value }}
            <img
               src="../../assets/icons/arrow-down.svg"
               alt="arrow"
               class="select__arrow"
               :class="{ 'select__arrow-open': IS_SELECT_OPEN }"
               @click="openCloseSelect"
            />
         </div>
         <div class="select__options options" v-if="IS_SELECT_OPEN">
            <div
               class="options__item"
               v-for="option in filterOptionsList"
               :key="option"
               @click="sortTasksByKey(option)"
            >
               <div class="item__text">
                  {{ option.value }}
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   data() {
      return {}
   },
   props: {
      selectLabel: {
         type: String,
      },
      filterOptionsList: {
         type: Array,
      },
   },
   methods: {
      ...mapActions([
         'SAVE_ACTIVE_SELECT',
         'TOGGLE_STATUS_SELECT_OPEN',
         'SORT_TASKS_BY_KEY',
      ]),
      // Функция записи активного пункта всплывающего списка во VUEX
      sortTasksByKey(option) {
         // Запись активного пункта всплывающего списка во VUEX
         this.SAVE_ACTIVE_SELECT(option)
         // Меняем статус отображения списка
         this.TOGGLE_STATUS_SELECT_OPEN()
         this.SORT_TASKS_BY_KEY()
         // users.sort((prev, next) => {
         //    if (prev.name < next.name) return -1
         //    if (prev.name < next.name) return 1
         // })
      },
      // Функция переключения статуса отображения списка
      openCloseSelect() {
         this.TOGGLE_STATUS_SELECT_OPEN()
      },
   },
   computed: {
      ...mapGetters(['ACTIVE_FILTER_OPTION', 'IS_SELECT_OPEN']),
   },
}
</script>

<style lang="scss" scoped>
.custom-select {
   display: flex;
   .custom-select__label {
      @extend %styleStandartText;
      margin-right: 15px;
   }
   .custom-select__select {
      position: relative;
      .select__active {
         @extend %styleStandartText;
         .select__arrow {
            transition: 0.2s;
            cursor: pointer;
            margin-left: 5px;
         }
         .select__arrow-open {
            transform: rotate(180deg);
            transition: 0.2s;
         }
      }
      .select__options {
         width: 100px;
         position: absolute;
         right: 0;
         top: 30px;
         animation: appearanceOpacity 0.2s ease-in-out;
         border-radius: 4px;
         box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.455);
         .options__item {
            @extend %styleStandartText;
            cursor: pointer;
            padding: 5px;
            height: 15px;
            display: flex;
            align-items: center;
            border-radius: 4px;
            &:hover {
               background-color: $accent-background-color;
            }
            .item__text {
               margin-left: 8px;
            }
         }
      }
      @keyframes appearanceOpacity {
         0% {
            opacity: 0;
         }
         100% {
            opacity: 1;
         }
      }
   }
}
</style>