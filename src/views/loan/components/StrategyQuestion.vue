<template>
  <div class="strategy-question">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="cur == index ? 'active': ''"
        @click="cur = index"
      >
        {{item}}
      </li>
    </ul>
    <div class="content">
      <div class="Strategy" v-show="cur == 0">
        <h3>银行卡大额转账攻略</h3>
        <dl v-for="(item, index) in strategy" :key="index">
          <dt>
            <p class="num">{{item.num}}</p>
            <p>{{item.paragraph}}</p>
          </dt>
          <dd>
            <img :src="item.strategy" alt="">
          </dd>
        </dl>
        <p class="tips">Tips：将优惠万家账号保存为常用联系人，下次可在常用联系人中找到自己邮惠万家的账户，直接发起转账</p>
      </div>
      <div class="question" v-show="cur == 1">大额转账操作的注意事项</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'strategy-question',
  props: {
    strategy: Array
  },
  data () {
    return {
      cur: 0,
      list: ['转账攻略', '常见问题']
    }
  }
}
</script>

<style scoped lang="scss">
.strategy-question {
  width: calc(100% - 40px);
  margin: 600px 20px 0;
  ul {
    @include flex(row);
    li {
      font-size: 30px;
      color: #999;
      &:nth-child(2) {
        margin-left: 26px;
      }
      &.active {
        font-weight: bold;
        color: #000;
      }
    }
  }
  .content {
    background: #fff;
    border-radius: 24px;
    padding: 55px 30px;
    box-sizing: border-box;
    margin-top: 40px;
    .Strategy {
      h3 {
        font-size: 38px;
        font-weight: bold;
        text-align: center;
      }
      dl {
        @include flex(row, center, space-between);
        font-size: 30px;
        margin-top: 56px;
        dt {
          @include flex(row);
          flex-shrink: 0;
          p {
            &:nth-child(1) {
              height: 38px;
              font-size: 17px;
              padding: 7px 11px;
              box-sizing: border-box;
              background: #fb530b;
              color: #fff;
              margin-top: 10px;
              border-radius: 6px;
            }
            &:nth-child(2) {
              @include ellipsis(2);
              width: 313px;
              line-height: 44px;
              margin-left: 13px;
            }
          }
        }
        dd {
          img {
            @include wh(238px, 268px);
          }
        }
      }
      .tips {
        font-size: 26px;
        line-height: 38px;
        margin-top: 52px;
      }
    }
  }
}
</style>
