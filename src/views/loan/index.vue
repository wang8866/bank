<template>
  <div class="loan-page">
    <HeaderBar :banner="banner" :back="back"/>
    <TransferAccounts/>
    <strategy-question :strategy="strategy"/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import TransferAccounts from './components/TransferAccounts.vue'
import StrategyQuestion from './components/StrategyQuestion.vue'
import axios from 'axios'
export default {
  name: 'loan',
  components: {
    HeaderBar,
    TransferAccounts,
    StrategyQuestion
  },
  data () {
    return {
      banner: require('@/assets/images/编组 3备份 4@2x.png'),
      back: require('@/assets/images/icon／通用icon／返回／24pt黑@2x.png'),
      strategy: []
    }
  },
  created() {
    this.fetchStrategyList()
  },
  methods: {
    fetchStrategyList() {
      axios
      .get(
        'https://www.fastmock.site/mock/e54c86d446f3d6d649ec0cff6d91cf7c/api/api/list',
        {
          params: {
            page_size: 10
          }
        }
      )
      .then((res) => {
        // console.log(res)
        this.strategy = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.loan-page {
  position: relative;
  background: #f6f6f6;
  ::v-deep .transfer-accounts {
    position: absolute;
    top: 330px;
  }
}
</style>
