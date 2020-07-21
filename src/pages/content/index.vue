<template>
  <div class="content">
    <template v-for="i of contentList">
      <div class="resume-content"
           :key="i.id">
        <div class="resume-content__title"
             v-if="i.title">{{i.title}}</div>
        <div class="resume-content__subtitle"
             v-if="i.subtitle">{{i.subtitle}}</div>
        <template v-if="i.text && typeof i.text === 'string'">
          <div class="resume-content__text">{{i.text}}</div>
        </template>
        <template v-if="i.textList && i.textList.length">
          <list-render :data="i.textList"
                       :render="render" />
        </template>
        <template v-if="i.text && typeof i.text !== 'string' && i.text.length">
          <div class="resume-content__text"
               v-for="(text, index) in i.text"
               :key="index">{{text}}</div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
  import listRender from './list-render.vue'
  import datas from '../data.json'
  import resumeData from '../resume.json'
  export default {
    name: 'resume-content',
    components: { listRender },
    data () {
      return {
        contentList: []
      }
    },
    mounted () {
      const demo = true
      this.contentList = demo ? datas : resumeData
    },
    methods: {
      render (h, data) {
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
  @import "./index.scss";
</style>
