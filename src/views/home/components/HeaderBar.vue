<template>
  <div class="header-bar">
    <img class="banner" :src="banner" alt="">
    <nav class="header-nav">
      <a
        href="javascript:;"
        v-for="(item, index) in navList"
        :key="index"
      >
        <img :src="item.icon" alt="">
        <span>{{item.text}}</span>
      </a>
    </nav>
    <img class="img" :src="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  props: {
    banner: String,
    img: String,
    navList: Array
  }
}
</script>

<style scoped lang="scss">
.header-bar {
  position: relative;
  width: 100%;
  .banner {
    @include wh(100%, auto);
  }
  .header-nav {
    position: absolute;
    top: 60px;
    @include flex(row, center, center);
    width: 100%;
    a {
      @include flex(column,center,center);
      flex: 1;
      padding: 10px 0;
      &.active {
        color: #fb530b;
      }
      img {
        @include wh(70px, 70px);
        margin-bottom: 10px;
      }
      span {
        font-size: 30px;
        color: #fff;
      }
    }
  }
  .img {
    @include wh(100%, auto);
    position: absolute;
    bottom: 0;
  }
}
</style>
