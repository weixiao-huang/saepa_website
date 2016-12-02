<template>
  <div class="container">
    <div class="row">
      <div v-for="social in socials" class="box">
        <div class="title">{{ social.title }}</div>
        <div class="text">
          <p v-for="text in social.texts">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      socials: [
        {
          title: '社会认可',
          texts: ['社团整体3个', '阿克苏诺贝尔奖', '北京市志愿服务大赛金奖'],
        },
        {
          title: '媒体报道',
          texts: ['协会是你爸爸', '协会是你爸爸', '协会是你爸爸'],
        },
        {
          title: '合作单位',
          texts: ['协会的爸爸', '协会的爸爸', '协会的爸爸'],
        },
      ],
    };
  },
};
</script>
