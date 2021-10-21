<template>
  <div>
    我是Footer.vue
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首頁</van-tabbar-item>
      <van-tabbar-item icon="search" dot>購物車</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">訂單</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">個人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: ' Footer',


}
</script>


