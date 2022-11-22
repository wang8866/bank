<template>
  <div class="transfer-accounts">
    <div class="one">
      <h3>第<span>1</span>步选择转账银行卡(限本人绑定卡)</h3>
      <div class="bank">
        <p>平安银行</p>
        <p>选择其他银行</p>
      </div>
    </div>
    <div class="two">
      <h3>第<span>2</span>步向本行二类户转账，最快1分钟到账</h3>
      <div class="account">
        <p>
          <span class="text">账户</span>
          <span>6270 3333 3333 3333 888</span>
        </p>
        <p>
          <span class="bank-name">开户行</span>
          <span>中邮邮惠万家银行</span>
        </p>
      </div>
    </div>
    <button class="app">前往银行app转账</button>
    <button class="details">查看转账明细</button>
  </div>
</template>

<script>
export default {
  name: 'transfer-accounts'
}
</script>

<style scoped lang="scss">
.transfer-accounts {
  width: calc(100% - 40px);
  margin: 0 20px;
  background: #fff;
  border-radius: 24px;
  padding: 55px 30px;
  box-sizing: border-box;
  .one {
    h3 {
      font-size: 30px;
      font-weight: bold;
      span {
        color: #fb530b;
        padding: 0 10px;
      }
    }
    .bank {
      @include flex(row, center,space-between);
      padding: 55px 0 50px;
      @include border-1px(bottom, $color-border-line);
      p {
        font-size: 30px;
        &:nth-child(2) {
          font-size: 26px;
          color: #fb530b;
        }
      }
    }
  }
  .two {
    h3 {
      font-size: 30px;
      font-weight: bold;
      padding: 52px 0;
      span {
        color: #fb530b;
        padding: 0 10px;
      }
    }
    .account {
      background: #f6f6f6;
      padding: 45px 15px;
      box-sizing: border-box;
      border-radius: 24px;
      p {
        font-size: 28px;
        .text {
          letter-spacing: 1em;
        }
        .bank-name {
          margin-right: 24px;
        }
        &:nth-child(2) {
          margin-top: 58px;
        }
        span {
          &:nth-child(1) {
            color: #999;
          }
          &:nth-child(2) {
            font-weight: bold;
          }
        }
      }
    }
  }
  button {
    width: 100%;
    border: 0;
    display: block;
    background: transparent;
    &.app {
      font-size: 34px;
      margin-top: 44px;
      padding: 27px 0;
      border-radius: 100px;
      background: #fb530b;
      color: #fff;
      font-weight: bold;
    }
    &.details {
      color: #fb530b;
      margin-top: 32px;
    }
  }
}
</style>
