<template lang="pug">
  #app
    back-top(:class="{'show': scroll, 'hidden': !scroll}") △
    navbar
    transition(namd="fade", mode="out-in")
      router-view.view
    my-footer
</template>


<script>
import Navbar from '@/components/Navbar';
import MyFooter from '@/components/Footer';
import BackTop from '@/components/BackTop';

export default {
  name: 'app',
  components: {
    Navbar,
    MyFooter,
    BackTop,
  },
  data() {
    return {
      scroll: false,
    };
  },
  created() {
    document.addEventListener('scroll', () => {
      this.scroll = ((document.documentElement.scrollTop ||
                      window.pageYOffset || document.body.scrollTop) > 100);
    });
  },
};
</script>


<style lang="stylus">
  /* --------------------------------

  Global style

  -------------------------------- */
  .back-top
    position fixed
    z-index 10
    bottom 5%
    right 5%

  $default-fonts = "华文细黑", "Microsoft YaHei", "微软雅黑", Helvetica, Tahoma, Arial, STXihei, sans-serif;
  $animate_time = 0.5s;

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
