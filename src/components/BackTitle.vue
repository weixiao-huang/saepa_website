<template>
  <div class="container">
    <div class="titleBox"
         :style="{
           background: img + ' no-repeat center center',
         }"
    >
      <div class="arrow-up"></div>
      <div class="title">
        {{ title }}
      </div>
      <div class="arrow-down"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'src'],
  name: 'backtitle',
  data() {
    const str = 'url(';
    const str2 = ')';
    return {
      img: str.concat(this.src).concat(str2),
    };
  },
};
</script>

<style lang="scss" scoped>
  $tri_color: white;

  .container {
    background-size: cover;
    color: white;
    .titleBox {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      font-size: 50px;
      height: 200px;
      .arrow-down, .arrow-up {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        /*-webkit-filter: drop-shadow(0 1px 2px #000);*/
        /*filter: drop-shadow(0 1px 2px #000);*/
      }
      .arrow-up {
        border-bottom: 10px solid $tri_color;
      }
      .arrow-down {
        border-top: 10px solid $tri_color;
      }
    }
  }
</style>
