<template>
  <div class="jumbotron">
    <slider :pages="someList" :sliderinit="sliderinit">
      <!-- slot  -->
    </slider>
  </div>
</template>

<script>
import Slider from './slider/slider';

export default {
  name: 'jumbotron',
  components: {
    Slider,
  },
  data() {
    const urls = [
      require('../images/jumbotron/4.jpg'),
      require('../images/jumbotron/5.jpg'),
      require('../images/jumbotron/6.jpg'),
      require('../images/jumbotron/7.jpg'),
    ];

    const u = 'url(';
    const v = ')';

    return {
      someList: [
        {
          title: '',
          style: {
            background: u.concat(urls[0]).concat(v),
          },
        },
        {
          title: '',
          style: {
            background: u.concat(urls[1]).concat(v),
          },
        },
        {
          title: '',
          style: {
            background: u.concat(urls[2]).concat(v),
          },
        },
        {
          title: '',
          style: {
            background: u.concat(urls[3]).concat(v),
          },
        },
      ],
      //  滑动配置[obj]
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 4000,
        loop: true,
        direction: 'horizontal',
      },
    };
  },
};
</script>

