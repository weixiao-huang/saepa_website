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
      const scrollTop = document.documentElement.scrollTop ||
                        window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 400) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    });
  },
};
</script>

<style lang="stylus">
  $defaultFonts = "华文细黑", "Microsoft YaHei", "微软雅黑", Helvetica, Tahoma, Arial, STXihei, sans-serif
  $animateTime = 1s
  $backgroundColor = #f8f9fb
  body, header
    margin 0
    padding 0
    background-color $backgroundColor
    font-family $defaultFonts
  .hidden, .show
    -webkit-transition $animateTime
    -moz-transition $animateTime
    transition $animateTime
  .hidden
    opacity 0
    visibility hidden
  .show
    opacity 1
    visibility visible
</style>

