<template>
   <div class="input-group">
      <label for="input">{{ textLabel }}</label>
      <input
         id="input"
         type="text"
         :placeholder="textPlaceholder"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
      />
   </div>
</template>

<script>
export default {
   props: {
      textLabel: {
         type: String,
      },
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
.input-group {
   display: flex;
   flex-direction: column;
   margin-top: 32px;
   label {
      font-family: 'AGAvantGardeCyr Book', arial;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 5px;
   }
   input {
      padding: 10px 30px 10px 10px;
      font-size: 14px;
      border: 1px solid rgba(193, 193, 193, 0.301);
      border-radius: 8px;
      &::placeholder {
         @extend %styleStandartText;
      }
   }
}
</style>