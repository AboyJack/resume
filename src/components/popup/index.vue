<template>
  <div>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
      <div class="popup"
           :class="positon ? `popup--${posion}` : 'center'"
           v-show="isShow">
        <sloat></sloat>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      position: {
        type: String,
        defalut: 'center'
      },
      duration: {
        type: Number,
        defalut: 2000
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      beforeEnter (el) {
        console.log(el)
      },
      enter (el, done) {
        console.log(el)
        setTimeout(() => {
          done()
        }, this.duration)
      },
      afterEnter (el) {
        console.log(el)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .popup {
    position: fiexd;
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
    /* transition: -webkit-transform 0.3s; */
    /* transition: transform 0.3s; */
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    -webkit-overflow-scrolling: touch;
    &--right {
      top: 50%;
      right: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
  .resume-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
