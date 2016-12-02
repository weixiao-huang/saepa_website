<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Nav';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style lang="stylus">
  .view
    background-color: #f8f9fb
</style>

