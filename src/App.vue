<template>
  <div id="app">
    <guotou></guotou>
<!--    <router-view/>-->
  </div>
</template>
<script>
  import guotou from "@/views/guotou";
  export default {
    components:{guotou}
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
