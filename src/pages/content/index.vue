<template>
  <div class="content">
    <template v-if="wideStyle">
      <div class="resume-wide">
        <div class="resume-wide-content"
             v-for="(i, index) in contentList"
             :key="i.id">
          <div class="resume-wide-content_title"
               :class="index === 0 ? 'first-content_title' : ''"
               v-for="t in i.titleList"
               :key="t.id">
            <span>{{t.title}}</span>
            <div class="sub_title"
                 v-if="t.subtitle">{{t.subtitle}}</div>
            <div class="content_text">
              {{t.text}}
              <ol v-if="t.list && t.list === 'ol'"
                  :style="{paddingTop: t.text ? '16px' : '0px'}">
                <li v-for="(l, idx) in t.listText"
                    :key="idx"
                    v-html="l"></li>
              </ol>
              <ul v-if="t.list && t.list === 'ul'"
                  :style="{paddingTop: t.text ? '16px' : '0px'}">
                <li v-for="(l, idx) in t.listText"
                    :key="idx"
                    v-html="l"></li>
              </ul>
            </div>
            <template v-if="t.textArray">
              <div class="content_text"
                   v-for="ta in t.textArray"
                   :key="ta">{{ta}}</div>
            </template>
          </div>
        </div>
      </div>
    </template>
    <template v-for="i of contentList"
              v-else>
      <div class="resume-content"
           :class="i.title ? '' : 'sub-slipt'"
           :key="i.id">
        <!-- 大标题 -->
        <div class="resume-content__title"
             v-if="i.title">{{i.title}}</div>
        <!-- 副标题 -->
        <div class="resume-content__subtitle"
             v-if="i.subtitle">{{i.subtitle}}</div>
        <!-- 单文本 -->
        <template v-if="i.text && typeof i.text === 'string'">
          <div class="resume-content__text">{{i.text}}</div>
        </template>
        <!-- 列表文本 -->
        <template v-if="i.textList && i.textList.length">
          <list-render :data="i.textList"
                       :render="render" />
        </template>
        <!-- 数组文本 -->
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
           :overlay-style="{backgroundColor: 'rgba(0,0,0,.4)'}"
           :get-container="getContainer"
           :style="{ width: '58%', height: '100%' }"
           :duration="0.2"
           @closed="closedPopup">
      <div class="contact">
        <div class="contact-list"
             @click.stop="callPhone">
          <i class="iconfont iconicon-phone"></i>
          <a href="tel:18128845330"
             ref="telephone">
            {{phone}}
          </a>
        </div>
        <div class="contact-list"
             @click="copyText(email, '邮箱')">
          <i class="iconfont iconemail"></i>
          <a>
            {{email}}
          </a>
        </div>
        <div class="contact-list"
             @click="downloadPDF"
             ref="downloadList">
          <i class="iconfont iconpdf"></i>
          <a href="https://raw.githubusercontent.com/AboyJack/resume/master/docs/resume.pdf"
             ref="pdfHref">
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
  // import bus from '@/utils/event-bus'
  import common from '../mixins/common'
  import datas from '../datas/data.json'
  import pcData from '../datas/pc-resume.json'
  import resumeData from '../datas/resume.json'
  export default {
    name: 'resume-content',
    components: { listRender, popup },
    mixins: [common],
    data () {
      return {
        contentList: [],
        showPopup: false,
        wideStyle: false
      }
    },
    created () {
      this.wideStyle = document.body.offsetWidth > 768
      window.onresize = () => {
        this.wideStyle = document.body.offsetWidth > 768
        this.contentList = this.wideStyle ? pcData : resumeData
      }
    },
    mounted () {
      const demo = false
      this.contentList = demo ? datas : resumeData
      this.contentList = this.wideStyle ? pcData : resumeData
      this.$bus.$on('showPopup', (val) => {
        this.showPopup = val
        this.$bus.$emit('hidePopup', val)
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
        return document.querySelector('.content')
      },
      callPhone () {
        this.$refs.telephone.click()
      },
      closePopup () {
        this.showPopup = false
        this.$bus.$emit('hidePopup', false)
      },
      closedPopup () {
        this.$bus.$emit('hidePopup', this.showPopup)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss';
  .contact {
    margin-top: px-rem(90);
    padding-top: px-rem(10);
    background-color: $-primary-7;
    @include custom-font-family($f-consolas);
    cursor: pointer;
    -webkit-appearance: none;
    &-list {
      padding: px-rem(30) px-rem(30);
      border-bottom: 1px solid $-split-color;
      width: 100%;
      a {
        color: $-font-title;
        width: 100%;
      }
      &:active {
        background-color: $-primary-1;
        cursor: pointer;
      }
    }
  }
  /deep/ .van-popup {
    background-color: $-primary-7;
  }
</style>
