<template>
  <div class="toast" v-show="isShow" ref="toast" id="toast">{{message}}</div>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  mounted() {
    this.$refs.toast.addEventListener('animationend', () => {
      this.message = ''
      this.isShow = false
    })
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message
      this.isShow = true
      this.$refs.toast.classList.add('fadeIn')
      setTimeout(() => {
        this.$refs.toast.classList.remove('fadeIn')
        this.$refs.toast.classList.remove('fadeOut')
      }, duration)
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #9090aa;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgba(243, 246, 254, 0.8);
}
.hide {
  display: none;
}
.fadeOut {
  animation: fadeOut 1s;
}
.fadeIn {
  animation: fadeIn 1s;
}
</style>
