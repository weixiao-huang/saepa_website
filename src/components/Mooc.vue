<template lang="pug">
  #mooc
    .jumb
      img(src="../images/mooc.jpg")
</template>

<script>
export default {
  name: 'mooc',
  components: {

  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .jumb
    margin 0
    img
      width 100%
</style>
