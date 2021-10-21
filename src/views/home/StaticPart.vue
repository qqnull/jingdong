<template>
  <van-sticky>
    <!-- 地址顯示 -->
    <div class="position">
      <span class="iconfont position__icon"> &#xe619; </span>
      <van-notice-bar
        class="position__sousuo"
        scrollable
        left-icon="volume-o"
        text="上海商务大厦二楼包子铺。上海商务大厦二楼包子铺。上海商务大厦二楼包子铺。上海商务大厦二楼包子铺。"
      />
      <span class="iconfont position__notice">&#xe60b;</span>
    </div>
  </van-sticky>
  <!-- 搜素狂 -->
  <van-search
    class="position__search"
    v-model="value"
    placeholder="请输入搜索关键词"
  />

  <!-- 动态导航 -->
  <van-tabs class="tabs" v-model:active="active">
    <van-tab v-for="(item, index) in tabBtnList" :key="index" :title="item">
      <!-- 内容 {{ index }} -->
    </van-tab>
  </van-tabs>
  <!-- 輪播圖 -->
  <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
    <van-swipe-item>
      <img
        class="icons__item__img"
        src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/180940/32/17239/105988/61079aa1Ef30224f6/dd133bbb8cb5db3b.jpg!cr_1053x420_4_0!q70.jpg.dpg"
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        class="icons__item__img"
        src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/209022/32/2533/143657/61528083E0c9d5568/e3f89707cd4b8470.jpg!cr_1053x420_4_0!q70.jpg.dpg"
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        class="icons__item__img"
        src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/206606/8/3097/113866/6155566eE2bcc0afb/9c43e4a44f1ee50d.jpg!cr_1053x420_4_0!q70.jpg.dpg"
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        class="icons__item__img"
        src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/218553/29/498/123216/61695948Eaa7beea9/16554069ace0f820.jpg!cr_1053x420_4_0!q70.jpg.dpg"
      />
    </van-swipe-item>
  </van-swipe>
  <!-- 舊宮個 -->
  <van-grid square>
    <van-grid-item
      class="goods_grid"
      v-for="(item, index) in goods_icon"
      :key="index"
    >
      <img class="goods_img" :src="item.imgUrl" />
      <div class="goods_txt">{{ item.good_txt }}</div>
    </van-grid-item>
  </van-grid>
</template>


<script>
import { ref } from 'vue';
export default {
  name: 'StaticPart',
  data () {
    return {
      search_v: '',
      active: '',
      tabBtnList: ["推荐", "居家生活", "服饰鞋帽", "美酒酒水", "居家生活", "服饰鞋帽", "美酒酒水", "居家生活", "服饰鞋帽", "美酒酒水"],
      goods_icon: [
        {
          imgUrl: require('../../assets/红包.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/大牌免运.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/蛋糕.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/签到.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/红包.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/红包.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: require('../../assets/红包.png'),
          good_txt: '新品首發'
        },
        {
          imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/206606/8/3097/113866/6155566eE2bcc0afb/9c43e4a44f1ee50d.jpg!cr_1053x420_4_0!q70.jpg.dpg',
          good_txt: '新品首發'
        }

      ]
    }
  },
  setup () {
    const value = ref('');
    return { value };
  },
}
</script>
<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  background-color: silver;
  line-height: 0.3rem;
  font-size: 0.16rem;
  @include ellipsis;
  &__sousuo {
    position: absolute;
    top: 0.01rem;
    left: 0.3rem;
    width: 70%;
    height: 0.35rem;
  }
  &__icon {
    position: absolute;
    top: 0.01rem;
    font-size: 0.26rem;
  }
  &__notice {
    position: absolute;
    top: 0.01rem;
    right: 0.1rem;
    font-size: 0.2rem;
    top: 0.05rem;
  }
  &__search {
    border-radius: 0.16rem;
    margin-top: 0.09rem;
    color: #b7b7b7;
    background: #f5f5f5;
    line-height: 0.26rem;
  }
}
// 动态导航
.tabs {
  margin-top: 0.06rem;
  margin-bottom: -0.09rem;
}
// 輪播
.my-swipe .van-swipe-item {
  margin-top: 9.6px;
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.icons__item__img {
  width: 100%;
  height: 100%;
}
.goods_img {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 auto;
}
.goods_txt {
  margin: 0.06rem 0 0.16rem 0;
  text-align: center;
  color: $content-fontcolor;
}
</style>