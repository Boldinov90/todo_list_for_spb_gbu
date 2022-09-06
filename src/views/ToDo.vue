<template>
   <div class="wrapper">
      <Header class="header" />
   </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
export default {
   name: 'ToDo',
   components: {
      Header,
   },
}
</script>

<style scoped lang="scss">
.wrapper{
   .header{
      margin-top: 100px;
   }
}
</style>