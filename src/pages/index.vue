<template>
  <section class="app">
    <top-header></top-header>
    <resume-content></resume-content>
  </section>
</template>

<script>
  import topHeader from './top-header/index'
  import resumeContent from './content/index'
  export default {
    components: { topHeader, resumeContent },
    data () {
      return {

      }
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/style/matching.scss";
  .app {
    height: 100%;
    width: 100%;
  }
</style>
