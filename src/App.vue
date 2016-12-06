<template>
  <div id="app">
    <navbar :class="navbar"></navbar>
    <stretchy-nav
      :scroll="scroll"
      :class="{'show': scroll, 'hidden': !scroll}"
    ></stretchy-nav>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <footers></footers>
  </div>
</template>

<script>
import Navbar from './components/Nav';
import Footers from './components/Footer';
import StretchyNav from './components/StretchyNav';

export default {
  name: 'app',
  components: {
    Navbar,
    Footers,
    StretchyNav,
  },
  data() {
    return {
      scroll: false,
    };
  },
  created() {
    document.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop ||
                    window.pageYOffset || document.body.scrollTop > 400;
    });
  },
};
</script>

<style lang="stylus">
  /* --------------------------------

  Global style

  -------------------------------- */
  $default-fonts = "华文细黑", "Microsoft YaHei", "微软雅黑", Helvetica, Tahoma, Arial, STXihei, sans-serif;
  $animate_time = 1s;

  div
    font-family $default-fonts
  a, a:hover, a:active, a:before, a:after, a:visited
    text-decoration none
    color black
  li
    list-style-type none
  body, header
    margin 0
    padding 0
    background-color #f8f9fb

  .hidden, .show
    -webkit-transition $animate_time
    -moz-transition $animate_time
    transition $animate_time
  .hidden
    opacity 0
    visibility hidden
  .show
    opacity 1
    visibility visible
</style>

