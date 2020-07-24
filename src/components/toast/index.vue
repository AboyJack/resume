<template>
  <div>
    <transition name="fade">
      <div v-if="isShow"
           class="toast">{{message}}</div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'toast',
    data () {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show (message, duration = 2000) {
        clearTimeout()
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    color: #9090aa;
    font-weight: 500;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgba(243, 246, 254, 0.9);
    /* border: 1px solid #9090aa; */
    z-index: 9999;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
