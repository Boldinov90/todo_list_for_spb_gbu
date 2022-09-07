<template>
   <div>
      <ToDo />
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import ToDo from './views/ToDo.vue'

export default {
   name: 'App',
   components: {
      ToDo,
   },
   methods: {
      ...mapActions(['GET_ALL_TASKS']),
   },
   beforeMount() {
      this.GET_ALL_TASKS()
   },
}
</script>

<style lang="scss">
// .app {
//    position: relative;
// }
</style>