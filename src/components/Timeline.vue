<template lang="pug">
  #timeline
    .timeline-item(v-for="(event, index) in events", :id="'time-' + index", :class="{'hidden': event.hidden, 'show': !event.hidden}")
      .timeline-icon
      .timeline-content(:class="{'right': index % 2 === 0}")
        h2 {{ event.time }}
        p(v-html="event.detail")
</template>

<script>
export default {
  name: 'timeline',
  data() {
    return {
      title: 'This is my Timeline!',
      events: [
        {
          time: '2006.12',
          detail: '教育扶贫志愿者协会成立。',
          hidden: false,
        },
        {
          time: '2008.05',
          detail: '“周末支教”第一期活动成功开展，周末支教项目诞生。',
        },
        {
          time: '2009.05',
          detail: '“电脑传爱”项目电脑募捐活动展开，电脑传爱项目诞生。',
          hidden: false,
        },
        {
          time: '2009.08',
          detail: '“电脑传爱”为内蒙古太仆寺旗兴盛小学捐建了第一间微机室。',
          hidden: false,
        },
        {
          time: '2012.08',
          detail: '“电脑传爱”项目获得首届阿克苏诺贝尔全国大学生社会公益比赛全国金奖(前五名荣誉)。',
          hidden: false,
        },
        {
          hidden: false,
          time: '2012.10',
          detail: '第一次“梦想课堂”活动在北京市顺义区清红蓝小学开展，梦想课堂项目诞生。',
        },
        {
          hidden: false,
          time: '2013.08',
          detail: '“梦想课堂”项目获得阿克苏诺贝尔中国大学生社会公益奖金奖(前五名荣誉)。',
        },
        {
          hidden: false,
          time: '2013.09',
          detail: '“梦想课堂”项目获得清华大学秋学生素质拓展计划金奖。<br>“电脑传爱”项目获得清华大学“精品素质拓展项目”。<br>"电脑传爱"项目成为新浪微博"圆梦中国"长期线上公益活动员组织课余时光第一期活动开展，课余时光项目诞生。',
        },
        {
          hidden: false,
          time: '2013.11',
          detail: '“面对面”农民工子弟专题访谈举行第一期活动，“面对面”项目诞生。',
        },
        {
          hidden: false,
          time: '2014.04',
          detail: '任务魔方微信平台试运行，任务魔方项目诞生。',
        },
        {
          hidden: false,
          time: '2014.08',
          detail: '“享读计划”第一期活动在河南商丘宁陵赵村一中举行，享读计划项目诞生。',
        },
        {
          hidden: false,
          time: '2014.10',
          detail: '成功举办首届“撒爱支教故事大赛”。<br>电脑传爱获清华大学暑期实践学生最佳实践奖、二金星流动杯荣誉。',
        },
        {
          hidden: false,
          time: '2014.12',
          detail: '成功举办首届撒爱论坛。',
        },
        {
          hidden: false,
          time: '2015.05',
          detail: '“秀出你的公益STYLE”校园公益主题嘉年华。',
        },
        {
          hidden: false,
          time: '2016.10',
          detail: '“多跑一步，多爱一分”公益助跑活动举办。',
        },
        {
          hidden: false,
          time: '2016.12',
          detail: 'SAEPA十周年庆典。',
        },
      ],
    };
  },
  created() {
    document.addEventListener('scroll', () => {
      const scrollTop = (document.documentElement.scrollTop ||
                      window.pageYOffset || document.body.scrollTop);
      for (let i = 0; i < this.events.length; i++) {
        const offsetTop = document.getElementById('time-' + i).offsetTop -
                          window.screen.height / 2;
        this.events[i].hidden = offsetTop > scrollTop;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#timeline .timeline-item:after,#timeline .timeline-item:before {
  content: '';
  display: block;
  width: 100%;
  clear: both;
  z-index: -100;
}
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
h1, h2, h3, h4 {
  font-family: "Dosis", arial, tahoma, verdana;
  font-weight: 600;
}

#timeline {
  width: 90%;
  padding: 30px 0;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
#timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #5f2776;
  left: 50%;
  top: 0;
  position: absolute;
}
#timeline:after {
  content: "";
  clear: both;
  display: table;
  width: 100%
}
#timeline .timeline-item {
  margin-bottom: 0;
  position: relative;
}
#timeline .timeline-item .timeline-icon {
  background: #5f2776;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  margin-left: -9px;
  margin-top: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%
}
#timeline .timeline-item .timeline-icon img {
  position: relative;
  top: 14px;
  left: 14px;
}
#timeline .timeline-item .timeline-content {
  width: 45%;
  background: #fff;
  padding: 20px;
  -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#timeline .timeline-item .timeline-content h2 {
  padding: 15px;
  background: #5f2776;
  color: #fff;
  margin: -20px -20px 0 -20px;
  font-weight: 500;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  -ms-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}
#timeline .timeline-item .timeline-content:before {
  content: '';
  position: absolute;
  left: 45%;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid #5f2776;
}
#timeline .timeline-item .timeline-content.right {
  float: right;
}
#timeline .timeline-item .timeline-content.right:before {
  content: '';
  right: 45%;
  left: inherit;
  border-left: 0;
  border-right: 7px solid #5f2776;
}

@media screen and (max-width: 768px) {
  #timeline {
    padding: 10px 0;
    margin: 0 auto;
  }
  #timeline:before {
    left: 0;
  }
  #timeline .timeline-item {
    margin: 30px 0;
  }
  #timeline .timeline-item .timeline-content {
    width: 90%;
    float: right;
  }
  #timeline .timeline-item .timeline-content:before, #timeline .timeline-item .timeline-content.right:before {
    left: 10%;
    margin-left: -6px;
    border-left: 0;
    border-right: 7px solid #5f2776;
  }
  #timeline .timeline-item .timeline-icon {
    left: 0;
  }
}

</style>
