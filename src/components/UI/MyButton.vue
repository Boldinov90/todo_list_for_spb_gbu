<template>
   <div>
      <button class="btn">{{ textButton }}</button>
   </div>
</template>

<script>
export default {
   props: {
      textButton: {
         type: String,
      },
   },
}
</script>

<style lang="scss" scoped>
.btn {
   width: 153px;
   height: 48px;
   background-color: #f0f5ff;
   border: none;
   border-radius: 8px;
   @extend %styleStandartText;
   color: #314b99;
   transition: 0.2s;
   &:hover {
      transition: 0.2s;
      transform: scale(1.005);
      background-color: #c9d6f1;
   }
   &:active {
      transform: scale(1);
      background-color: #f0f5ff;
   }
}
</style>