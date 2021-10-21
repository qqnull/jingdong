<template>
  <!-- <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">增加</van-button>
      <van-button size="mini">減少</van-button>
    </template>
  </van-card> -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
  <div style="height: 2rem">聯合會好傢伙好久好久</div>
</template>
<script>


import { ref } from 'vue'
import { get } from '../../untils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get('/api/user/hot-list')
    // console.log(result);
    if (result?.errno === 0) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return { nearbyList }
  }
  // setup () {
  //   const nearbyList = [
  //     {
  //       id: 1,
  //       imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
  //       title: '沃尔玛',
  //       tags: ['月售2W+', '免运费', '不花钱'],
  //       desc: 'VIP尊享满89元减4元运费券（每月3张）'
  //     },
  //     {
  //       id: 2,
  //       imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
  //       title: '沃尔玛2',
  //       tags: ['月售1W+', '免运费', '花钱'],
  //       desc: 'VIP尊享满89元减4元运费券（每月4张）'
  //     },
  //   ];
  //   return { nearbyList }

  // },
}
</script>
<style scoped lang="scss">
@import "../../style/viriables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>