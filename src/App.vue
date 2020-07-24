<template>
  <div id="app"
       :class="$isMobile ? 'mobile' : ''">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">
</style>
