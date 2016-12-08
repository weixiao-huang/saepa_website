<template lang="pug">
  .contact
    back-title(:src="time.src", :title="time.title")
    timeline
    back-title(:src="saepa11.src", :title="saepa11.title")
    .saepa11
      img(src="../images/contact/saepa11.0.jpg")
</template>

<script>
import BackTitle from './BackTitle';
import Timeline from './Timeline';

export default {
  name: 'mooc',
  components: {
    BackTitle,
    Timeline,
  },
  data() {
    return {
      time: {
        title: '我们走过的道路',
        src: require('../images/1.jpg'),
      },
      saepa11: {
        title: '11.0团队',
        src: require('../images/2.jpg'),
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.saepa11
  img
    width 100%
</style>
