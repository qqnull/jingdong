
<template>
  <div>
    <StaticPart />
    <Nearby />
  </div>
  <Footer />
</template>
<script>


import Footer from "./Footer"
import StaticPart from "./StaticPart"
import Nearby from "./Nearby.vue"
export default {
  name: 'Home',
  components: {
    "Footer": Footer,
    "StaticPart": StaticPart,
    "Nearby": Nearby
  }

}
</script>
<style scoped lang='scss'>
</style>
