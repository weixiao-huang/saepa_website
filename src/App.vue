<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <footers></footers>
  </div>
</template>

<script>
import Navbar from './components/Nav';
import Footers from './components/Footer';

export default {
  name: 'app',
  components: {
    Navbar,
    Footers,
  },
};
</script>

<style lang="stylus">
  .view
    background-color: #f8f9fb
</style>

