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
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   font-weight: 700;
   line-height: 132%;
}
</style>