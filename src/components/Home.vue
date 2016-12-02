<template>
  <div id="home">
    <div class="jumbotron">
      <img src="../images/jumbotron/4.jpg">
    </div>
    <div class="container">
      <div class="icon_container">
        <div class="icon_box" v-for="item in items">
          <img :src="item.url" :alt="item.alt">
          <div class="icon_text">
            <p>{{ item.text1 }}</p>
            <p>{{ item.text2 }}</p>
            <p>—</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: [
        { url: require('../images/5.png'), alt: '公益创造快乐', text1: '公益——是一门', text2: '社会必修课' },
        { url: require('../images/6.png'), alt: '知识改变命运', text1: '　知识改变命运，', text2: '　实践检验真知！' },
        { url: require('../images/7.png'), alt: '一个团队，一起努力', text1: '　一个团队，', text2: '　一起努力！' },
      ],
    };
  },
};
</script>

<style lang="stylus">
  .jumbotron
    position absolute
    top 0
    z-index: -10
    height 100%
    overflow hidden
    max-height 100vh
    img
      width 100%

  .icon_container
    font-size 20px
    color #592a7a
    margin-top: 100vh
    display flex
    justify-content center
    .icon_box
      padding 0 55px
      img
        width: 85%

@media only screen and (max-width 768px)
  .jumbotron
    position static

  .icon_container
    padding 0 15px
    margin-top 30px
    font-size: 12px
    .icon_box
      padding 0
      img
        width: 70%
</style>
