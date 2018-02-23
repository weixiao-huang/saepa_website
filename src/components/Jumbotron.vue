<template lang="pug">
swiper.jumbotron(:options="swiperOption")
  swiper-slide.swiper-slide(v-for="(item, id) of urls", :key="id")
    img(:src="item", style="width: 100%;")
  .swiper-pagination(slot="pagination")
</template>


<script>
import { home } from '../data.json';

export default {
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true,
        loop: true,
        paginationClickable: true,
        pagination: '.swiper-pagination',
      },
      urls: home.jumbotrons,
    };
  },
};
</script>
