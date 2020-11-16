<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'

export default {
  components: {
    FooterGuide
  },
  mounted () {
    this.getAddress()
    this.getFoodTypes()
    this.getShops()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getFoodTypes', 'getShops', 'getUserInfo'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
