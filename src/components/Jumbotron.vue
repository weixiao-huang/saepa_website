<template lang="pug">
swiper.jumbotron(:options="swiperOption")
  swiper-slide.swiper-slide(v-for="(item, id) of urls", :key="id")
    img(:src="item", style="width: 100%;")
  .swiper-pagination(slot="pagination")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Jumbotron extends Vue {
  private swiperOption = {
    autoplay: 3000,
    autoHeight: true,
    loop: true,
    paginationClickable: true,
    pagination: '.swiper-pagination',
  };
  private urls = require('@/data.json').home.jumbotrons;
}
</script>
