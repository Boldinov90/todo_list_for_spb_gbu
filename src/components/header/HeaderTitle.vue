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
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 132%;
}
</style>
