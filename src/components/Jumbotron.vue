<template lang="pug">
swiper.jumbotron(:options="swiperOption")
  swiper-slide.swiper-slide(v-for="item of urls")
    img(:src="item", style="width: 100%;")
  .swiper-pagination(slot="pagination")
</template>


<script>
import jumb4 from '@/images/jumbotron/4.jpg';
import jumb5 from '@/images/jumbotron/5.jpg';
import jumb6 from '@/images/jumbotron/6.jpg';
import jumb7 from '@/images/jumbotron/7.jpg';

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
      urls: [jumb4, jumb5, jumb6, jumb7],
    };
  },
};
</script>
