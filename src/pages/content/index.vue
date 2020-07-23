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
    <popup v-model="showPopup"
           close-icon="close"
           position="right"
           :get-container="getContainer"
           :style="{ width: '52%', height: '100%' }">
      <div class="contact">
        <div class="download-list">
          <i class="iconfont iconicon-phone"></i>
          <a href="tel:18128845330">
            {{phone}}
          </a>
        </div>
        <div class="download-list">
          <i class="iconfont iconemail"></i>
          <a @click="copyText(email, '邮箱')">
            {{email}}
          </a>
        </div>
        <div class="download-list"
             ref="downloadList">
          <i class="iconfont iconpdf"></i>
          <a @click="downloadPDF">
            PDF
          </a>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
  import listRender from './list-render.vue'
  import popup from 'vant/lib/popup'
  import 'vant/lib/popup/style'
  import bus from '@/utils/event-bus'
  import common from '../mixins/common'
  import datas from '../data.json'
  import resumeData from '../resume.json'
  export default {
    name: 'resume-content',
    components: { listRender, popup },
    mixins: [common],
    data () {
      return {
        contentList: [],
        showPopup: false
      }
    },
    mounted () {
      const demo = false
      this.contentList = demo ? datas : resumeData
      bus.$on('showPopup', (val) => {
        this.showPopup = val
      })
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
      },
      getContainer () {
        return document.querySelector('.content');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss';
  .contact {
    margin-top: px-rem(100);
    padding-top: px-rem(10);
    background-color: $-primary-7;
    .download-list {
      margin: px-rem(50) px-rem(40);
      a {
        color: $-font-title;
      }
    }
  }
  /deep/ .van-popup {
    background-color: $-primary-7;
  }
</style>
