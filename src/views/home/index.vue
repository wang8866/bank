<template>
  <div class="home-page">
    <header-bar :banner="banner" :navList="navList" :img="images"/>
    <div class="content">
      <main-nav :product="product"/>
      <img class="invitation" :src="invitation" alt="">
      <div class="notice">银行公告：公告内容标题。XXXXXXXXXXXXXXXXX</div>
      <div class="card">
        <card-list title="定期存款" text="本行特色"/>
        <card-list title="银行理财" text="本行特色"/>
        <card-list title="精选好基" text="南方品质特色基金"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import MainNav from './components/MainNav.vue'
import CardList from './components/CardList.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: { 
    HeaderBar, 
    MainNav, 
    CardList 
  },
  data () {
    return {
      banner: require('@/assets/images/编组 3备份 4@2x.png'),
      images: require('@/assets/images/聚合页banner990_384@2x.png'),
      navList: [
        {
          text: '扫一扫',
          icon: require('@/assets/images/交易明细@2x.png')
        },
        {
          text: '收付款',
          icon: require('@/assets/images/零钱包@2x.png')
        },
        {
          text: '转账',
          icon: require('@/assets/images/无状态／ip@2x.png')
        },
        {
          text: '账户总览',
          icon: require('@/assets/images/我的账户@2x.png')
        }
      ],
      product: [],
      invitation: '',
      card: [
        {
          title: '定期存款',
          characteristic: '本行特色',
          num: '3.15',
          profit: '预计年化'
        },
        {
          title: '定期存款',
          characteristic: '本行特色',
          num: '3.15',
          profit: '预计年化'
        }
      ]
    }
  },
  created() {
    this.fetchProductList(),
    this.fetchInvitationList()
  },
  methods: {
    fetchProductList() {
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
          console.log(res)
          this.product = res.data.data
        })
    },
    fetchInvitationList() {
      axios
        .get(
          'https://www.fastmock.site/mock/e54c86d446f3d6d649ec0cff6d91cf7c/api/api/list',
          {
            params: {
              page_size: 1
            }
          }
        )
        .then((res) => {
          this.invitation = res.data.data[0].invitation
        })
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
  .content {
    margin: 0 35px;
    .invitation {
      @include wh(100%, 200px);
      border-radius: 36px;
    }
    .notice {
      font-size: 24px;
      text-align: center;
      background: #f3f1f9;
      padding: 15px;
      box-sizing: border-box;
      margin: 30px 0;
    }
    .card {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
