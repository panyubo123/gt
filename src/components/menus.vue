<template>
  <div id="menus">
    <div class="menu">
      <el-col :span="3">
        <el-menu v-for="item in menuList"  router>
          <el-submenu index="1"  :key="item.id" :index="item.id" v-if="item.children">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item :index="item.path" v-for="items in item.children"> <template #title>
              <i :class="items.icon"></i>
              <span>{{items.name}}</span>
            </template></el-menu-item>
          </el-submenu>
          <el-menu-item  v-else :key="item.id" :index="item.path">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script>
import menu from '../menu-list'
export default {
name: "menus",
  data(){
    return{
      // menuList:[]
    }
  },
  computed:{
    menuList(){
      return menu
  }
  },
  created() {
  // this.menuList=menu
    console.log(this.menuList,'menuList')
  }
}
</script>

<style scoped>

</style>