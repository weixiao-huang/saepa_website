<template>
  <div>
    <slider :pages="someList" :sliderinit="sliderinit">
    </slider>
  </div>
</template>
<script>
import slider from './slider/slider';

export default {
  el: 'jumbotron',
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
      sliderinit: {
        currentPage: 0,
        // start: {},
        // end: {},
        // tracking: false,
        thresholdTime: 500, // 滑动时间阈值判定距离
        thresholdDistance: 100, // 滑动距离阈值
        // direction:'vertical',//垂直滚动
        loop: true, //  无限循环
        autoplay: 4000, //  自动播放:时间[ms]
      },
    };
  },
  components: {
    slider,
  },
};
</script>
