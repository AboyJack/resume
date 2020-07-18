<template>
  <div class="content">
    <template v-for="i of contentList">
      <div class="resume-content"
           :key="i.id">
        <div class="resume-content__title">{{i.title}}</div>
        <div class="resume-content__subtitle">{{i.subtitle}}</div>
        <template v-if="i.textList && i.textList.length">
          <list-render :data="i.textList"
                       :render="render" />
        </template>
        <div class="resume-content__text"
             v-else>{{i.text}}</div>
      </div>
    </template>
  </div>
</template>
<script>
  import listRender from './list-render.vue'
  export default {
    name: 'resume-content',
    components: { listRender },
    data () {
      return {
        contentList: [
          {
            id: 1,
            title: 'HELLO WORLD',
            subtitle: 'This is subtitle',
            text:
              'To be a worthy person. To be a worthy person. To be a worthy person. To be a worthy person. To be a worthy person. '
          },
          {
            id: 2,
            title: '你好 世界',
            subtitle: '这是一个副标题',
            textList: [
              {
                id: 1,
                list: 'ol',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。', '写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              },
              {
                id: 2,
                list: 'ul',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              }
            ]
          },
          {
            id: 3,
            title: '你好 世界',
            subtitle: '这是一个副标题',
            textList: [
              {
                id: 1,
                list: 'ol',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              },
              {
                id: 2,
                list: 'ul',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              }
            ]
          },
          {
            id: 3,
            title: '你好 世界',
            subtitle: '这是一个副标题',
            textList: [
              {
                id: 1,
                list: 'ol',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              },
              {
                id: 2,
                list: 'ul',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              }
            ]
          },
          {
            id: 3,
            title: '你好 世界',
            subtitle: '这是一个副标题',
            textList: [
              {
                id: 1,
                list: 'ol',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              },
              {
                id: 2,
                list: 'ul',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              }
            ]
          },
          {
            id: 3,
            title: '你好 世界',
            subtitle: '这是一个副标题',
            textList: [
              {
                id: 1,
                list: 'ol',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              },
              {
                id: 2,
                list: 'ul',
                text: ['写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。']
              }
            ]
          },
        ]
      }
    },
    methods: {
      render (h, data) {
        let tag = data.list ? data.list : 'div'
        return <tag>{
          data.text.map(el => {
            return <li style={{ marginBottom: '10px' }}>{el}</li>
          })
        }</tag>
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
