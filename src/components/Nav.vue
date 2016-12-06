<template>
  <div class="container">
    <nav>
      <div class="left_box"></div>
      <ul class="nav_container">
        <input type="checkbox" name="toggle" id="toggle">
        <li class="nav_toggle"><label for="toggle" class="nav_icon"></label></li>
        <li class="logo">
          <img src="../images/logo.jpg">
        </li>
        <template v-for="(item, index) in items">
          <li class="point">&middot;</li>
          <template v-if="item.text == '学方论坛'">
            <li class="normal"><a :href="item.path" target="_blank">{{ item.text }}</a></li>
          </template>
          <template v-else>
            <router-link :to="item.path" class="normal" tag="li">
              {{ item.text }}
            </router-link>
          </template>
        </template>
        <li class="point">&middot;</li>
      </ul>
      <div class="right_img">
        <img src="../images/logo.jpg">
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data() {
    return {
      items: [
        { text: '主页', path: '/home' },
        { text: '项目介绍', path: '/projects' },
        { text: 'MOOC', path: '/mooc' },
        { text: '学方论坛', path: 'http://ixuefang.cn/' },
        { text: '联系我们', path: '/contact' },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
$fontSize = 20px
$fontPadding = 10px
$padding = 20px
$borderSize = 2px
$navHeight = $fontSize + $fontPadding * 2 + $padding * 2 + $borderSize

$navLineColor = #cdccca
$navLineActiveColor = #612379

.left_box
  background-color $navLineActiveColor
  width 80px
  height 120px
  position absolute
  left 50px
  z-index 10

.right_img
  mix-blend-mode: multiply;
  position absolute
  right 10px
  top 0
  img
    height $navHeight

nav
  text-align: center
  ul
    list-style none
    display inline-block
    padding $padding
    font-size 0
    li
      font-size $fontSize
      line-height $fontSize
      transition 0.5s
      display inline-block
      padding $fontPadding
      border-bottom $borderSize $navLineColor solid
    input
      border 0
    input, .logo, .nav_toggle
      display none
    .normal
      cursor pointer
      &:hover
        border-bottom $borderSize $navLineActiveColor solid
      &.router-link-active
        border-bottom $borderSize $navLineActiveColor solid

@media only screen and (max-width 1000px)
  .left_box, .right_img
    display none

@media only screen and (max-width 768px)
  nav
    ul
      padding 0
      .point
        display none
      .normal
        padding 0
        width 100vw
        display block
        overflow hidden
        max-height 0
        border-bottom 0
        &.router-link-active
          border-bottom 0
        &:hover
          border-bottom 0
      .nav_toggle, .logo
        margin 0
        padding 0
        border-bottom 0
        display inline-block
      .nav_toggle
        font-size 25px
        float right
        padding 0 20px
        margin-top 25px
      .logo
        mix-blend-mode: multiply;
        float left
        height 60px;
        img
          height 100%
      input, input:before, input:after, input:visited
        -webkit-appearance none
        -moz-appearance none
        appearance none
      li label
        cursor pointer
      input + li label:after
        content: "☰"
      input:checked + li label:after
        content:"☰"
      input:checked ~ .normal
        max-height 150px
        padding 10px 0
        border-bottom 1px $navLineColor solid
        &.router-link-active
          border-bottom 1px $navLineActiveColor solid
        &:hover
          border-bottom 1px $navLineActiveColor solid
</style>
