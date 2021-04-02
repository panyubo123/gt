<template>
  <div class="guotou">
    <homenav></homenav>
    <router-view></router-view>
  </div>
</template>

<script>
import homenav from "@/components/homenav";
export default {
  components:{homenav},
    name: "guotou"
}
</script>

<style scoped>

</style>