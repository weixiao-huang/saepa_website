<template>
  <div class="container">
    <nav>
      <div class="left_box"></div>
      <ul>
        <template v-for="(item, index) in items">
          <li>&middot;</li>
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
  ul
    list-style none
    display inline-block
    padding 10px
    font-size 0

    li
      font-size 20px
      transition 0.5s
      display inline-block
      padding 10px 10px
      border-bottom 2px #aaa solid

    .normal
      cursor: pointer
      &:hover
        border-bottom 2px #572A7B solid
      &.router-link-active
        border-bottom 2px #572A7B solid
</style>
