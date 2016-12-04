<template>
  <div class="contact">
    <back-title :src="timeline.src" :title="timeline.title"></back-title>
    <back-title :src="saepa11.src" :title="saepa11.title"></back-title>
  </div>
</template>

<script>
import BackTitle from './BackTitle';

export default {
  name: 'mooc',
  components: {
    BackTitle,
  },
  data() {
    return {
      timeline: {
        title: '协会时间轴',
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
<style lang="scss" scoped>

</style>
