<template>
   <div>
      <div class="add-new-task-button">
         <div class="add-new-task-button__circle">
            <div class="add-new-task-button__line vertical"></div>
            <div class="add-new-task-button__line horizontal"></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'CircleAddButton',
}
</script>

<style lang="scss" scoped>
.add-new-task-button {
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   .add-new-task-button__circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #d6dbeb;
      position: relative;
      transition: 0.2s;
      .add-new-task-button__line {
         width: 2px;
         height: 20px;
         background-color: #314b99;
         position: absolute;
         margin: auto;
         left: 0;
         right: 0;
         top: 25%;
         bottom: 25%;
         text-align: center;
      }
      .horizontal {
         transform: rotate(90deg);
      }
      &:hover {
         transition: 0.2s;
         transform: scale(1.05);
         background-color: #babece;
      }
      &:active {
         transition: 0.1s;
         transform: scale(1);
         background-color: #d6dbeb;
      }
   }
}
</style>