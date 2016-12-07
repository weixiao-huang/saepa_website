<template lang="pug">
  #home
    .triangle
    jumbotron.jumbotron
    .container
      .icon_container
        .icon_box(v-for="item in items")
          img(:src="item.url", :alt="item.alt")
          .icon_text
            p {{ item.text1 }}
            p {{ item.text2 }}
            p —
      .projects
        .intro
          .achievements
            .picSide
              img(src="../images/cx1.png", alt="创新工作室")
            .textSide.
               实践公益新想法
               探索公益新领域
            .picSide
              img(src="../images/cx2.png", alt="创新工作室")
          .achievements
            .picSide
              img(src="../images/dnca1.png", alt="电脑传爱")
            .picSide
              img(src="../images/dnca2.png", alt="电脑传爱")
            .textSide 互联网+科技+公益
          .achievements
            .textSide.
              梦想
              是给孩子最好的礼物
            .picSide
              img(src="../images/mxkt1.png", alt="梦想课堂")
            .picSide
              img(src="../images/mxkt2.png", alt="梦想课堂")
          .achievements
            .picSide
              img(src="../images/zmzj1.png", alt="周末支教")
            .textSide.
              用周末不长的时间
              做一生难忘的事情
            .picSide
              img(src="../images/zmzj2.png", alt="周末支教")
</template>

<script>
import Jumbotron from './Jumbotron';

export default {
  name: 'home',
  components: {
    Jumbotron,
  },
  data() {
    return {
      items: [
        { url: require('../images/5.png'), alt: '公益创造快乐', text1: '公益——是一门', text2: '社会必修课' },
        { url: require('../images/6.png'), alt: '知识改变命运', text1: '　知识改变命运，', text2: '　实践检验真知！' },
        { url: require('../images/7.png'), alt: '一个团队，一起努力', text1: '　一个团队，', text2: '　一起努力！' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .triangle {
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 40px solid #f8f9fb;
    position: absolute;
    top: 80px;
    left: calc(100vw / 2 - 100px);
    z-index: 5;
  }

  .icon_container {
    font-size: 20px;
    color: #612379;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    .icon_box {
      text-align: center;
      padding: 0 55px;
      img {
        width: 85%;
      }
    }
  }

  .intro {
    padding: 0 100px;
    .achievements {
      display: flex;
      .picSide {
        width: 33%;
        img {
          width:100%;
          height: 100%;
        }
        padding: 0;
      }

      .textSide {
        width: 33%;
        background: #fff; //f8f9fb
        color: black;
        text-align: center;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }


  @media only screen and (max-width: 768px) {
    .triangle {
      display: none;
    }
    .intro {
      margin-top: 40px;
      padding: 0;
      .achievements .picSide {
        padding: 0;
        margin: 0;
      }
      font-size: 10px;
    }
    .icon_container {
      font-size: 12px;
      margin-top: 40px;
      .icon_box {
        padding: 0;
        img {
          width: 85%;
        }
      }
    }
  }

</style>
