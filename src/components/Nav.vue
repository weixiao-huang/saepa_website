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
          <router-link :to="item.path" class="normal" tag="li">
            {{ item.text }}
          </router-link>
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
        { text: '学方论坛', path: '/xuefang' },
        { text: '联系我们', path: '/contact' },
      ],
    };
  },
};
</script>

<style lang="stylus">
.left_box
  background-color #563d7c
  width 80px
  height 120px
  position absolute
  left 50px
  z-index 1

.right_img
  position absolute
  right 10px
  top 0
  z-index 1

nav
  background white

  ul
    list-style none
    display inline-block
    padding 22px
    font-size 0

    li
      font-size 20px
      transition 0.5s
      display inline-block
      padding 10px 10px
      border-bottom 2px #aaa solid
    input
      border 0

    input, .logo, .nav_toggle
      display none

    .normal
      cursor pointer
      &:hover
        border-bottom 2px #572A7B solid
      &.router-link-active
        border-bottom 2px #572A7B solid

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
        margin-top 15px
      .logo
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
        border-bottom 1px #aaa solid
        &.router-link-active
          border-bottom 1px #572A7B solid
        &:hover
          border-bottom 1px #572A7B solid

</style>
