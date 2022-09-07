<template>
   <div class="wrapper">
      <div class="header">
         <div class="header__header-top">
            <MyTitle class="header-top__title" :textTitle="'To do list'" />
            <MyCircleAddButton />
         </div>
         <div class="header__header-filters">
            <div class="header-filters__search-by-text">
               <img
                  class="search-by-text__icon"
                  src="../assets/icons/search-icon.svg"
               />
               <MySearchInput
                  class="search-by-text__input"
                  :textPlaceholder="'Поиск Имени, статуса или даты'"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import MyCircleAddButton from '@/components/UI/MyCircleAddButton.vue'
import MySearchInput from '@/components/UI/MySearchInput.vue'
export default {
   name: 'Header',
   components: {
      MyTitle,
      MyCircleAddButton,
      MySearchInput,
   },
}
</script>

<style lang="scss" scoped>
.wrapper {
   .header {
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
         .header-filters__search-by-text {
            display: flex;
            align-items: center;
            .search-by-text__icon {
               margin-left: 40px;
            }
            .search-by-text__input {
               margin-left: 16px;
            }
         }
      }
   }
}
</style>