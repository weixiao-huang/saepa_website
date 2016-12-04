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

<style lang="scss">
  $animate_time: 1s;
  .view {
    background-color: #f8f9fb;
  }
  .hidden {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: $animate_time;
    -moz-transition: $animate_time;
    transition: $animate_time;
  }
  .show {
    opacity: 1;
    visibility: visible;
    -webkit-transition: $animate_time;
    -moz-transition: $animate_time;
    transition: $animate_time;
  }
</style>

