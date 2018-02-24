<style lang="scss" scoped>
.order-1 {
  order:1;
}
.order-2 {
  order: 2;
}
$animate_time: 0.5s;
.pShow {
  -webkit-transition: $animate_time;
  -moz-transition: $animate_time;
  transition: $animate_time;
  opacity: 0.8;
  visibility: visible;
}

.jumb img {
  width: 100%;
}

.container {
  margin: 40px;
}

.project {
  margin: 50px 0;
  padding-top: 1px;
  background: white;
  box-shadow: 2px 2px 10px #666;
}
.intro {
  margin: 10px;
  padding: 50px 40px 20px 40px;
  border: 1px #d6d6d6 solid;
  .titleBox {
    border-left: 5px #563d7c solid;
    .title {
      font-size: 3rem;
    }
    .title, .subtitle {
      margin-left: 30px;
    }
  }
  .project_text {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;;

    padding: 30px;
    font-size: 16px;
  }
}
.flex_boxes {
  display: flex;
  .p_box {
    flex: 1;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%
    }
  }
  .t_box {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      .bold {
        font-weight: bold;
      }
    }
    .box_title {
      align-items: center;
      background: #04363d;
      width: 100%;
      color: white;
      font-size: 4rem;
    }
    .box_text {
      padding: 60px;
      font-size: 15px;
      div {
        padding-top: 5px;
      }
    }
  }
}

$hover_time: 0.2s;
#subNav {
  top: 0;
  position: fixed;
  width: 100%;
  background: #4c504d;
  ul {
    margin: 8px;
    text-align: center;
    li {
      display: inline-block;
      padding: 0 20px;
      a {
        -webkit-transition: all $hover_time;
        -moz-transition: all $hover_time;
        -ms-transition: all $hover_time;
        -o-transition: all $hover_time;
        transition: all $hover_time;
        color: white;
        &.active {
          text-shadow: 2px 2px 2px #000;
          font-weight: bold;
        }
        &:hover {
          text-shadow: 2px 2px 2px #000;
        }
      }
    }
  }
}


@media screen and (max-width: 768px) {
  .container {
    margin: -40px 15px 0 15px;
    .flex_boxes {
      flex-direction:column;
      .p_box {
        order: 2;
      }
      .t_box {
        .box_title {
          font-size: 2.5rem;
        }
        .box_text {
          font-size: 14px;
          height: 100%;
          padding: 80px 20px;
        }
        order: 1;
      }
    }
    .intro {
      margin: 10px;
      padding: 20px 30px;
      .titleBox {
        margin-bottom: 20px;
        border-left: 3px #563d7c solid;
        .title {
          font-size: 2rem;
        }
        .title, .subtitle {
          margin-left: 10px;
        }
      }
      .project_text {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        padding: 0;
        font-size: 14px;
      }
    }
  }
  #subNav ul {
      margin: 8px;
      text-align: left;
  }

}
</style>


<template lang="pug">
#projects
  #subNav(:scroll="scroll", :class="{'pShow': scroll, 'hidden': !scroll}")
    ul
      li.item(v-for="(item, index) in projects")
        a(:href="`#sr${index}`", v-scroll-to="`#sr${index}`", :class="{'active': index === active}") {{ item.title }}
  .jumb
    img(:src="jumb", alt="我们用精品的项目充实公益")
  .container
    .project(v-for="(project, index) in projects", :id="'sr' + index")
      .intro
        .titleBox
          .title {{ project.title }}
          .subtitle {{ project.subtitle }}
        .project_text(v-html="project.text")
      .flex_boxes(v-for="box in project.boxes")
        template(v-if="box.order")
          .p_box.order-1
            img(:src="box.url", :alt="box.alt")
          .t_box.order-2
            .box.box_title {{ box.title }}
            .box.box_text(v-html="box.text")
        template(v-else)
          .p_box.order-2
            img(:src="box.url", :alt="box.alt")
          .t_box.order-1
            .box.box_title {{ box.title }}
            .box.box_text(v-html="box.text")
</template>


<script>
import { projects } from '../data.json';

export default {
  data() {
    return {
      scroll: false,
      active: -1,
      currentOffset: 0,
      projects: projects.projects,
      jumb: projects.jumb,
    };
  },
  created() {
    const pert = 100;
    document.addEventListener('scroll', () => {
      if (this.$route.path === '/projects') {
        const scrollTop = (document.documentElement.scrollTop ||
                          window.pageYOffset || document.body.scrollTop);
        this.scroll = scrollTop > 400;
        const len = this.projects.length;
        for (let i = 0; i < len - 1; i += 1) {
          const offsetTop = document.getElementById(`sr${i}`).offsetTop - pert;
          const offsetTop2 = document.getElementById(`sr${i + 1}`).offsetTop - pert;
          if (offsetTop <= scrollTop && scrollTop < offsetTop2) {
            this.active = i;
            this.currentOffset = document.getElementById(`sr${this.active}`).offsetTop;
          }
        }
        if (scrollTop >= document.getElementById(`sr${len - 1}`).offsetTop) {
          this.active = len - 1;
          this.currentOffset = document.getElementById(`sr${this.active}`).offsetTop;
        }
      }
    });
  },
//  methods: {
//    scrollTo() {
//      const scrollTop = (document.documentElement.scrollTop ||
//                         window.pageYOffset || document.body.scrollTop);
//      setInterval(() => {
//        if (scrollTop < this.currentOffsetTop) {
//          document.documentElement.scrollTop += 10;
//        } else {
//          document.documentElement.scrollTop -= 10;
//        }
//      }, 10);
//    },
//  },
};
</script>


