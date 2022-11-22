<template>
  <div class="main-nav">
    <nav class="nav-list">
      <a href="javascript:;" v-for="(item, index) in product" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  props: {
    product: Array
  }
}
</script>

<style scoped lang="scss">
.main-nav {
  margin: 26px 0;
  background-color: #fff;
  border-radius: 36px;
  .nav-list {
    padding: 42px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-row-gap: 40px;
    padding: 20px 0;
    a {
      color: #000;
      display: grid;
      justify-items: center;
      grid-row-gap: 20px;
      img {
        @include wh(96px, 96px);
        border-radius: 50%;
      }
      span {
        font-size: 28px;
      }
    }
  }
}
</style>
