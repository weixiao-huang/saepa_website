<style lang="stylus">
.back-top
  background #323333
  color white
  width 50px
  height 50px
  border-radius 50px
  cursor pointer
  transition 0.3s
  display flex
  align-items center
  justify-content center
  &:hover
    background #545555
  &::after, span
    display inline-block
    vertical-align middle
  &::after
    content ''
    height 100%
</style>


<template lang="pug">
.back-top(v-scroll-to="'#app'")
  div
   slot
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BackTop extends Vue {
  @Prop({ default: 0.1 }) private speed!: number;
}
</script>
