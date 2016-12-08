<template lang="pug">
#subNav
  ul
    li.item(v-for="(item, index) in items")
      a(:href="") {{ item }}
</template>

<script>
export default {
  name: 'subNav',
  data() {
    return {
      items: ['周末支教',''],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
