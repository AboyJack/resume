<template>
  <div>
    <template v-for="i of contentList">
      <div class="resume-content" :key="i.id">
        <div class="resume-content__title">{{i.title}}</div>
        <div class="resume-content__subtitle">{{i.subtitle}}</div>
        <div class="resume-content__text">{{i.text}}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'resume-content',
  data() {
    return {
      contentList: [
        {
          id: '1',
          title: 'HELLO WORLD',
          subtitle: 'This is subtitle',
          text:
            'To be a worthy person. To be a worthy person. To be a worthy person. To be a worthy person. To be a worthy person. '
        },
        {
          id: '2',
          title: '你好 世界',
          subtitle: '这是一个副标题',
          text:
            '写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。写一段这里都是对应的内容。'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/style/index.scss';
.resume-content {
  /* background-color: $-primary-9; */
  padding-top: 30px;
  @mixin resume-content {
    padding: 0px 40px;
    color: $-font-color;
  }
  &__title {
    font-size: px-rem(38);
    font-weight: bold;
    @include resume-content;
    @include custom-font-family($f-montserrat);
  }
  &__subtitle {
    @extend .resume-content__title;
    padding-top: 10px;
    font-size: px-rem(30);
  }
  &__text {
    @include resume-content;
    padding-top: 20px;
  }
}
</style>
