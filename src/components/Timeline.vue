<template>
  <div class="timeline">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data() {
    return {
      title: 'This is my Timeline!',
    };
  },
};
</script>

<style lang="scss" scoped>

// 你开发的时候删掉下面这些css样式重写就行
.timeline {
  text-align: center;
  font-size: 50px;
  padding: 40px;
}

</style>
