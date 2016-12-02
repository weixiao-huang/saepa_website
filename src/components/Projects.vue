<template>
  <div id="projects">
    <div class="jumb">
      <img src="../images/projects/jumb.jpg" alt="我们用精品的项目充实公益">
    </div>
    <div class="container">
      <div v-for="project in projects" class="project">
        <div class="intro">
          <div class="titleBox">
            <div class="title">{{ project.title }}</div>
            <div class="subtitle">{{ project.subtitle }}</div>
          </div>
          <div v-html="project.text" class="project_text"></div>
        </div>
        <div v-for="box in project.boxes" class="flex_boxes">
          <template v-if="box.order === true">
            <div class="p_box order-1"><img :src="box.url" :alt="box.alt"></div>
            <div class="t_box order-2">
              <div class="box box_title">{{ box.title }}</div>
              <div v-html="box.text" class="box box_text"></div>
            </div>
          </template>
          <template v-else>
            <div class="p_box order-2"><img :src="box.url" :alt="box.alt"></div>
            <div class="t_box order-1">
              <div class="box box_title">{{ box.title }}</div>
              <div v-html="box.text" class="box box_text"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      projects: [
        {
          title: '周末支教',
          subtitle: '用周末不长的时间，做一生难忘的事情',
          text: '在清华大学教育扶贫办公室的帮助下，协会与河南滑县抗大初中、河南滑县新区实验小学、河北魏县一中、河北行唐一中、河北宣化四中、河北平乡二中等共十余所中小学建立了长期合作关系，组织清华志愿者在学期中用周末的时间在当地开展支教活动。',
          boxes: [
            {
              url: require('../images/projects/zmzj/1.png'),
              alt: '周末支教',
              title: '项目成果',
              text: '<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',
              order: true,
            },
          ],
        },
        {
          title: '享读计划',
          subtitle: '愿你们能以书为伴，生活充满阳光',
          text: '2013年始，周末支教部策划推出了将短期支教影响长期化的子项目——“享读计划”。这是一项以阅读为主题的系列性支教活动，我们在每年暑假期间为学校建立小型图书室或建立班级图书角，并依托这一载体开展一系列阅读类课程与活动，旨在帮助当地学生培养良好阅读习惯，拓展学生视野，提高学生独立思考与自我表达能力，并引导其形成积极向上、开放进取的人生观与世界观。',
          boxes: [
            {
              url: require('../images/projects/xd/1.jpg'),
              alt: '享读计划',
              title: '项目成果',
              text: '<div>截至2016年暑期，已开展三期享读活动，受益学生千余人，累计给学生带去数千张教学材料，为河南商丘宁陵赵村一中建立图书室并得到学生充分利用；为河北灵寿中学和河北平乡二中增添班级图书角，拓展阅读面。</div><p class="bold">2014年获“清华大学实践梦想计划”支持。</div>',
              order: false,
            },
          ],
        },
        {
          title: '梦想课堂',
          subtitle: '梦想，是给孩子最好的礼物。',
          text: '梦想课堂项目源起于2011年电脑传爱部的一次调研，发现有很多农民工子弟在周末得不到父母的陪伴，同时他们的教育结构中也缺乏素质教育、兴趣教育等必须的内容，因而怀着为孩子播种梦想、为公益搭建平台、帮助大学生更多地了解社会的初衷，逐步形成了现在规模较大、运作规范的梦想课堂活动。梦想课堂活动主要致力于运用周末的时间，利用清华大学班级素拓的形式，对没有父母在侧的农民工孩子起到一个陪伴的作用；同时，通过开展音乐、美术、体育、棋类、团队合作、自信力培养、科技创新、英语口语等丰富多彩的课程，以实现素质教育的理念和目标。',
          boxes: [
            {
              url: require('../images/projects/mxkt/1.jpg'),
              alt: '周末支教',
              title: '项目成果',
              text: '<div>从2011年起，我们已在五年中成功举办约<span class="bold">80次活动</span>，受益学生<span class="bold">超三千人</span>，并且和明圆小学、京顺学校等农民工子弟小学建立了稳定的合作关系，学校和学生对清华学生的到来均表现出很大的热情。</div><div>梦想课堂项目迄今为止已多次获得<span class="bold">清华大学校级素拓项目金奖</span>，并获得<span class="bold">2013阿克苏诺贝尔中国大学生社会公益奖金奖</span>。在清华大学校方与学生之中影响力颇为深远。 </div>',
              order: true,
            },
          ],
        },
        {
          title: '筑梦清华',
          subtitle: '寻梦，追梦！',
          text: '筑梦清华作为梦想课堂的子项目,围绕“寻梦、追梦”的核心,带领孩子们走进清华,感受清华独特的学术氛围,领略清华百年名校的人文气息。志愿者一对一地带领孩子游览清华校园,讲述清华历史,分享清华名人的励志故事,组织各种游戏等等。我们想用爱去感染孩子们,让他们相信“心有多大,舞台就有多大”，让他们在清华园中,感受“自强不息,厚德载物”的清华精神,感受“行胜于言”的务实学风。同时激励孩子们努力学习,积极向上,奋力拼搏,让“清华梦”入驻孩子们的心间。与清华志愿者们的零距离接触，也可以潜移默化地对他们产生积极向上的影响。此外，筑梦清华也在尝试在校外的科技馆开展活动，帮助孩子们了解科技的发展历程，感受科技的神秘魅力，增加对科技的热爱，也增进志愿者与孩子们的互动交流。',
          boxes: [
            {
              url: require('../images/projects/mxkt/1.jpg'),
              alt: '筑梦清华',
              title: '项目成果',
              text: '<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><p class="bold">2016年获北京市志愿服务项目大赛金奖</div><p class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><p class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',
              order: false,
            },
          ],
        },
        {
          title: '创新工作室',
          subtitle: '公益，需要我们去创新',
          text: '创新工作室在协会中扮演着公益孵化器、实验室和先驱者的角色。创新工作室致力于实践新的公益想法，探索公益的新领域。目前，创新工作室下属任务魔方、直播支教、春风计划三个子项目。',
          boxes: [
            {
              url: require('../images/projects/cxgzs/cfjh.jpg'),
              alt: '春风计划',
              title: '春风计划',
              text: '<div>春风计划致力于打造一个有成效、有特点、可持久的大学生社会帮教活动。</div><div>就项目本身而言，我们希望通过和狱方合作，找到既能有效帮助服刑人员改邪归正，又适合大学生参与的社会帮教模式。<div>通过这项活动，我们一方面希望帮助服刑人员树立正确的意识形态，感受到社会的温暖，促进服刑人员积极改造；另一方面，希望能够借助协会和清华大学的社会影响力，促进社会对帮教活动的重视，最终帮助服刑人员更好地回归社会。</div><div>目前，春风计划和北京市第二监狱取得了合作关系，将主要针对参加入监教育的人员进行心理辅导，以更好地帮助他们度过适应期。第一期活动将于2016年11月—12月推出。</div>',
              order: true,
            },
            {
              url: require('../images/projects/cxgzs/zbzj.png'),
              alt: '直播支教',
              title: '直播支教',
              text: '<div>直播支教致力于解决支教过程中空间的距离，更好地方便志愿者进行支教。本学期SAEPA直播支教项目组与途梦课堂进行合作，联合开展了“途梦-清华SAEPA学霸分享”活动。这个活动面对贫困地区在校的中学生，以线上直播的方式，为远方的孩子们带来一场学习经验分享谈。志愿者将通过QQ视频的方式对学生们进行远程直播支教。每次授课面向3所学校（约200名学生），讲解控制在40分钟左右，并预留20分钟进行答疑。另外，志愿者亦可以通过线上QQ群答疑的方式对同学们进行学习方法的指导。</div><div>途梦（Tomoroe） 邀请各行业优秀的职场人士，通过在线视频方式（QQ视频电话会议系统），向偏远地区学生分享自己的成长经历和职场奋斗故事。从2015年10月28日起，截至目前为止，途梦已经开展了超过100期分享，跨越13个省区，40所学校，影响超过10000名学生。在本次活动中，途梦的老师会对同学们的课件和演讲稿进行修改，并帮助我们联系对口学校。</div>',
              order: false,
            },
            {
              url: require('../images/projects/cxgzs/rwmf.png'),
              alt: '任务魔方',
              title: '任务魔方',
              text: '<div>任务魔方是清华大学学生教育扶贫协会的线上活动。项目依托微信平台，借鉴微公益理念，力图打造校园线上微公益平台。通过微公益极大降低公益的门槛，提升同学们的公益参与度，及时反馈公益成果和提升公益感受，促进同学们养成公益的习惯，从而使增强校园的公益氛围。任务魔方目前正在运行公益助跑项目，即参与同学可以用自己跑步的里程兑换成捐献金额或火车票里程的方式，来为孩子们献出一份爱心。该项目现借助线上的公益平台和线下的集体助跑活动收集里程，并与多个学生组织进行合作，为筑梦清华、撒爱励志奖学金等活动进行前期宣传。目前任务魔方已获得清华大学萌芽计划支持。公益助跑活动自2015年11起已圆满完成三期。</div>',
              order: true,
            },
          ],
        },
        {
          title: 'S-Lab',
          subtitle: 'S-Lab一句话简介',
          text: 'S-lab 介绍',
          boxes: [
            {
              url: require('../images/projects/slab/yyxc.jpg'),
              alt: '雅韵心传',
              title: '雅韵心传',
              text: '<div>雅韵心传是由梦想课堂延伸出的一种较为长期和体系性的支教尝试，主要是针对农民工子弟小学开展一学期的支教活动，希望实现“寓教于乐”的目标，也帮助志愿者与孩子建立较深的友谊，将活动的影响程度深化、长久化。现在承担的课程是传统文化课，我们想用传统文化知识去感染孩子们，帮助他们形成良好的品德，培养他们的人文底蕴，鼓励他们树立远大的志向和人生理想。 </div>',
              order: false,
            },
            {
              url: require('../images/projects/slab/xyrl.jpg'),
              alt: '心愿认领',
              title: '心愿认领',
              text: ' <div>心愿认领作为一种创新的活动方式，致力于帮助孩子们实现心愿，为其送去快乐与温暖，并同时让他们感受到来自社会的关注，以此激励他们努力学习，回馈社会。活动方式主要是收集农民工子弟学校学生的心愿，进行整理并分析心愿的可实现性，然后在固定时间及场所，通过心愿墙的形式面向清华全校学生开展心愿认领活动，最后确保心愿的实现。 </div>',
              order: true,
            },
          ],
        },
        {
          title: '电脑传爱',
          subtitle: '用周末不长的时间，做一生难忘的事情',
          text: '<div>在互联网与科技高速发展的今天，我们致力于“互联网+科技+公益”的公益模式的探索与推行，捐献微机室，机器人普及教育，MOOC教学……我们不断探索新的理念与新的模式，我们让高新技术不再遥远。</div><div>SAEPA电脑传爱部成立于2010年，历年来，电脑传爱部曾与戴尔公司、国维芯达科技有限公司、美克美家家居连锁有限公司、中视协(北京)演艺文化有限公司、新浪公司、金雅拓（北京）智能卡科技有限公司等知名企业合作，在内蒙古、贵州、云南和北京周边等地区为贫困子弟学校捐赠多达13个微机室，多次获得校级与国家级实践奖项。</div>然而，随着实践年复一年的进行，捐赠微机室的局限性逐渐显露出来。在捐献微机室之后的多次回访中我们发现，所捐献的微机室的使用情况并不乐观，微机室的使用率不高，甚至被闲置。于是，在陈朝松学长的建议下，电脑传爱部决定进行转型。<div></div><div>鉴于相当一部分同协会合作的贫困学校对教学资源的需求远胜于对硬件资源的需求，部分学校的硬件设施也足以支持网络课程甚至直播支教，且考虑到此前电脑传爱项目捐建的微机室，在2016年4月到5月的调研后，我们决定将工作重心转移到MOOC教学上。2016年下半年，萝卜太辣与SAEPA再次合作，电脑传爱部将在萝卜太辣的支持下，以MOOC结合线下实践课为形式，在合适的中学推行机器人教育，迈出转型的第一步。</div>',
          boxes: [
            {
              url: require('../images/projects/dnca/1.jpg'),
              alt: '周末支教',
              title: '项目成果',
              text: '<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',
              order: true,
            },
          ],
        },
        {
          title: '周末支教',
          subtitle: '用周末不长的时间，做一生难忘的事情',
          text: '在清华大学教育扶贫办公室的帮助下，协会与河南滑县抗大初中、河南滑县新区实验小学、河北魏县一中、河北行唐一中、河北宣化四中、河北平乡二中等共十余所中小学建立了长期合作关系，组织清华志愿者在学期中用周末的时间在当地开展支教活动。',
          boxes: [
            {
              url: require('../images/projects/dnca/1.jpg'),
              alt: '周末支教',
              title: '项目成果',
              text: '<p class="bold">2009年,获得清华⼤大学公益创业实践赛“优秀团队”荣誉;</div><p class="bold">2010年,获得“北极光-清华”全国大学生公益创业实践赛银奖;</div><p class="bold">2010、2011年，2次获得清华⼤大学暑期社会实践奖金奖(暑期实践最高荣誉);</div><p class="bold">2012年,获得⾸首届“阿克苏诺贝尔”全国大学生社会公益⽐赛全国金奖(前5名荣誉);</div><p class="bold">2013年,获得清华⼤大学“精品素质拓展项⽬目”荣誉(校内素质拓展活动最高荣誉)</div><p class="bold">2013年,成为新浪微博“圆梦中国”长期线上微公益活动成员组织。</div>',
              order: true,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .order-1 {
    order:1;
  }
  .order-2 {
    order: 2;
  }
  .jumb {
    img {
      width: 100%;
    }
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
    padding: 20px 40px;
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
      img {
        width: 100%;
        overflow: hidden;
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
        padding: 50px;
        font-size: 15px;
        div {
          padding-top: 5px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
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
          padding: 50px 20px;
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
</style>
