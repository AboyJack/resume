<template>
  <div class="content">
    <template v-for="i of contentList">
      <div class="resume-content" :key="i.id">
        <div class="resume-content__title">{{i.title}}</div>
        <div class="resume-content__subtitle">{{i.subtitle}}</div>
        <template v-if="i.textList && i.textList.length">
          <list-render :data="i.textList" :render="render" />
        </template>
        <div class="resume-content__text" v-else>{{i.text}}</div>
      </div>
    </template>
  </div>
</template>
<script>
import listRender from './list-render.vue'
import datas from '../data.json'
export default {
  name: 'resume-content',
  components: { listRender },
  data() {
    return {
      contentList: []
    }
  },
  mounted() {
    this.contentList = datas
  },
  methods: {
    render(h, data) {
      let tag = data.list ? data.list : 'div'
      return (
        <tag>
          {data.text.map(el => {
            return <li style={{ marginBottom: '10px' }}>{el}</li>
          })}
        </tag>
      )
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
