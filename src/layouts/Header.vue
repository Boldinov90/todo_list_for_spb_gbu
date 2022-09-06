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
               <div class="search-by-text__input"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import MyTitle from '@/components/header/MyTitle.vue'
import MyCircleAddButton from '@/components/UI/MyCircleAddButton.vue'
export default {
   name: 'Header',
   components: {
      MyTitle,
      MyCircleAddButton,
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
         .header-filters__search-by-text {
            .search-by-text__icon {
            }
            .search-by-text__input {
            }
         }
      }
   }
}
</style>