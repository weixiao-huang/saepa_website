<style lang="stylus" scoped>
.container
  overflow hidden
  height 100%
  background url("../images/1.jpg") no-repeat center center
  background-size cover
  color white
  .row
    margin 20px 0
    display flex
    .box
      display flex
      flex-direction column
      flex 1
      padding 0 50px
    .title
      border-bottom 1px #aaa dashed
      font-size 25px
      font-weight bold
      padding 5px 0
      margin 10px 0
    .text
      font-size 14px
      div
        padding 5px 0
        a
          color white
  .contactBox
    .img
      width 100px
      img
        width 100%

@media screen and (max-width: 768px)
  .container
    .row
      padding 0 40px
      flex-direction column
      .box
        padding-left 0
      .title
        font-size 20px
        padding 5px 0
      .text
        div
          padding 3px 0
</style>


<template lang="pug">
  .container
    .row
      .box(v-for="social in socials")
        .title {{ social.title }}
        .text.contactBox
          .img(v-if="social.img")
            img(:src="social.img")
          div(v-for="text in social.texts", v-html="text")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private socials = require('@/data.json').footer.socials;
}
</script>
