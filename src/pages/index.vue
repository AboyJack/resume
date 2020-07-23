<template>
  <section class="app">
    <top-header></top-header>
    <resume-content></resume-content>
    <resume-popup v-model="showPopup">
      123
    </resume-popup>
  </section>
</template>

<script>
  import topHeader from './top-header/index'
  import resumeContent from './content/index'
  export default {
    components: { topHeader, resumeContent },
    data () {
      return {
        showPopup: false
      }
    },
    methods: {

    },
  }
</script>
<style lang="scss" scoped>
  .app {
    height: 100%;
    width: 100%;
  }
</style>
