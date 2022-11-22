<template>
  <div class="page">
    <router-view />
    <nav class="footer-nav">
      <router-link 
        :to="item.path"
        tag="a"
        v-for="(item, index) in tabs"
        :key="index"
        active-class="active"
      >
        <img :src="item.icon" alt="">
        <span>{{item.text}}</span>
      </router-link> 
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/交易明细@2x.png')
        },
        {
          path: '/loan',
          text: '贷款',
          icon: require('@/assets/images/零钱包@2x.png')
        },
        {
          path: '/conduct',
          text: '理财',
          icon: require('@/assets/images/无状态／ip@2x.png')
        },
        {
          path: '/my',
          text: '我的',
          icon: require('@/assets/images/我的账户@2x.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  margin-bottom: 132px;
  background: #f9f9fa;
  .footer-nav {
    @include flex(row, center, center);
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f5f4f9;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    a {
      @include flex(column,center,center);
      flex: 1;
      color: #666666;
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
      }
    }
  }
}
</style>
