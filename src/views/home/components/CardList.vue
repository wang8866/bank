<template>
  <div class="card-list">
    <h2>{{title}}</h2>
    <div class="content">
      <p class="text">{{text}}</p>
      <p class="num">3.15<span>%</span></p>
      <p class="text">预计年化</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
.card-list {
  @include wh(200px, auto);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 30px;
  padding: 25px 0;
  h2 {
    width: 90%;
    font-size: 28px;
    color: #fff;
    background: linear-gradient(251deg, #FE3113 0%, #FD7A00 100%);
    padding: 10px 30px;
    box-sizing: border-box;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
  }
  .content {
    padding: 20px 30px;
    box-sizing: border-box;
    .text {
      @include ellipsis(1);
      font-size: 26px;
      color: #666;
    }
    .num {
      font-size: 38px;
      margin-top: 30px;
      margin-bottom: 20px;
      color: #FE3113;
      font-weight: bold;
      span {
        font-size: 24px;
      }
    }
  }
}
</style>
