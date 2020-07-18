<template>
  <div>
    <top-header></top-header>
    <resume-content></resume-content>
  </div>
</template>

<script>
import topHeader from './top-header/index'
import resumeContent from './content/index'
export default {
  components: { topHeader, resumeContent },
  data() {
    return {}
  }
}
</script>
