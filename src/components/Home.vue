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
          .summary
            img.paddingB(src="../images/book.png")
            div.
              2006年，协会由主要来自2006年中美暑期联合支教实践活动的支队长发起，在清华大学扶贫办公室大力支持与帮助下，成立了最初的教育扶贫志愿者协会。<br>
              之后，在学校社团部注册时，正式更名为清华大学学生教育扶贫公益协会，<br>
              "Student Association of Educational Poverty Alleviation" ——SAEPA。
          .achievements
            .picSide
              img(src="../images/cx1.png", alt="创新工作室")
            .textSide.borderTop
              .textTitle 创新工作室
              div.
                <br>
                实践公益新想法<br>
                探索公益新领域
            .picSide
              img(src="../images/cx2.png", alt="创新工作室")
          .achievements
            .picSide.picLSide
              img(src="../images/dnca1.png", alt="电脑传爱")
            .picSide.picRSide
              img(src="../images/dnca2.png", alt="电脑传爱")
            .textSide
              .textTitle 电脑传爱
              div.
                <br>
                互联网+科技+公益
          .achievements
            .textSide
              .textTitle 梦想课堂
              div.
                <br>
                梦想<br>
                是给孩子最好的礼物
            .picSide.picLSide
              img(src="../images/mxkt1.png", alt="梦想课堂")
            .picSide.picRSide
              img(src="../images/mxkt2.png", alt="梦想课堂")
          .achievements
            .picSide
              img(src="../images/zmzj1.png", alt="周末支教")
            .textSide
              .textTitle 周末支教
              div.
                <br>
                用周末不长的时间<br>
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

  .borderTop {
    /*border-top: 1px white solid;*/
  }

  .paddingB {
    padding-bottom: 50px;
  }

  .intro {
    img {
      width: 150px;
      height: 100px;
     // padding-bottom: 50px;
    }
    .summary {
      text-align: center;
      font-size: 20px;
      color: white;
      padding: 100px;
      background: url("../images/1.jpg") no-repeat center center;
    }
    padding: 0 0;
    /*background: url("../images/1.jpg") no-repeat center center;*/
    -webkit-background-size: cover;
    background-size: cover;
    .achievements {
      display: flex;
      .picSide {
        width: 33.333333%;
        margin: 10px;
        img {
          width: 100%;
          height: 100%;
        }
        overflow: hidden;
        padding: 0;
      }
      .picLSide {
        margin-right: 0;
      }
      .picRSide {
        margin-left: 0;
      }

      .textSide {
        background: #5f2776;
        margin: 10px;
        color: white;
        width: 33.333333%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .textTitle {
          font-size: 25px;
          font-weight: bold;
        }
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
      font-size: 12px;
      .achievements {
        .textSide {
          .textTitle {
            font-size: 18px;
          }
        }
      }
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
