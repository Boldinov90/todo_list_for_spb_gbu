<template>
   <div class="text-title">{{ textTitle }}</div>
</template>

<script>
export default {
   name: 'HeaderTitle',
   props: {
      textTitle: {
         type: String,
      },
   },
}
</script>

<style lang="scss" scoped>
.text-title {
   @extend %styleTitleText;
}
</style>