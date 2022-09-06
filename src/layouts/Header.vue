<template>
   <div class="wrapper">
      <div class="header">
         <div class="header__header-top">
            <HeaderTitle class="header-top__title" :textTitle="'To do list'" />
            <AddNewTaskButton />
         </div>
      </div>
   </div>
</template>

<script>
import HeaderTitle from '@/components/header/HeaderTitle.vue'
import AddNewTaskButton from '@/components/header/AddNewTaskButton.vue'
export default {
   name: 'Header',
   components: {
      HeaderTitle,
      AddNewTaskButton,
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
         }
      }
   }
}
</style>