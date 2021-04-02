<template>
  <div class="homenav">
    <slot></slot>
    <navsl></navsl>
    <menus></menus>
  </div>
</template>

<script>
  import navsl from "@/components/navsl";
  import menus from "@/components/menus";
export default {
  components:{navsl,menus},
name: "homenav",
}
</script>

<style scoped>

</style>