<template>
  <div class="header-bar">
    <img class="banner" :src="banner" alt="">
    <img class="back" :src="back" alt="">
    <div class="content">
      <h3>银行卡大额转账</h3>
      <ul>
        <li>不限额</li>
        <li>到账快</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    banner: String,
    back: String
  }
}
</script>

<style scoped lang="scss">
.header-bar {
  @include wh(100%, auto);
  position: relative;
  .banner {
    @include wh(100%, auto);
  }
  .back {
    @include wh(48px, 48px);
    position: absolute;
    top: 30px;
    margin-left: 20px;
  }
  .content {
    position: absolute;
    top: 155px;
    color: #ffead4;
    margin-left: 20px;
    h3 {
      font-size: 52px;
      font-weight: bold;
    }
    ul {
      display: flex;
      margin-top: 30px;
      li {
        font-size: 28px;
        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
