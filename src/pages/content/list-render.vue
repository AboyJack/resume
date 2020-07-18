<template>
  <div class="resume-content__text list">
    <template v-for="(key, index) in data">
      <list-item :key="`list${index}`"
                 :render="render"
                 :item="key"></list-item>
    </template>
  </div>
</template>
<script>
  import listItem from './list-item'
  export default {
    props: {
      render: {
        type: Function
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    components: { listItem }
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
  .list {
    margin-left: 15px;
  }
</style>
