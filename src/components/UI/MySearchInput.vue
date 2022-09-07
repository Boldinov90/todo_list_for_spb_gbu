<template>
   <input
      id="input"
      type="text"
      :placeholder="textPlaceholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
   />
</template>

<script>
export default {
   props: {
      textPlaceholder: {
         type: String,
      },
      modelValue: {
         type: String,
      },
   },
}
</script>

<style lang="scss" scoped>
input {
   @extend %styleStandartText;
   border: none;
   &::placeholder {
      color: $placeholder-text-color;
   }
   &:active,
   &:hover,
   &:focus {
      outline: 0;
      outline-offset: 0;
   }
}
</style>