<template>
  <div class="navs">
      <div class="left">
        <slot name="left" id="left">
          <img src="../../public/img/QQ截图20210402115632.png" alt="">
          <h1>国投集团电子采购平台</h1>

        </slot>
        <slot name="center">
          <div class="ico">
            <span class="el-icon-s-fold" style="font-size: 30px"></span>
            <span class="el-icon-monitor"> 切换至管理后台</span>
            <span class="el-icon-s-claim"> 切换至CA办理</span>
          </div>
        </slot>
      </div>
      <div class="right">
        <div class="days">
          <slot name="days">
            <span>{{nowDate}}</span>
            <span>{{nowTime}}</span>
            <span>{{nowWeek}}</span>
          </slot>
        </div>
        <div class="rights">
          <slot name="right">
            <span class="el-icon-bell"> 系统公告（0）</span>
            <span class="el-icon-question"> 帮助</span>
            <span class="el-icon-s-custom"> 筑龙测试企业2003</span>
          </slot>
        </div>

      </div>
  </div>
</template>

<script>
export default {
name: "navsl",
  data(){
    return{
      timer: null,
      nowWeek: "",
      nowDate: "",
      nowTime: "",
    }
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate)
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
          myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
          myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
          myDate.getMinutes() < 10
              ? "0" + myDate.getMinutes()
              : myDate.getMinutes()
      );
      let sec = String(
          myDate.getSeconds() < 10
              ? "0" + myDate.getSeconds()
              : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowDate = yy + "年" + mm + "月" + dd + "日"
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  },
}
</script>

<style scoped>
  .navs{
    width: 100%;
    height: 44px;
    /*background-color: red;*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    /*background-color: yellow;*/
    height: 44px;
    line-height: 50px;
    display: flex;
    align-items: center;

  }
  .right{
    /*background-color: blue;*/
    height: 44px;
    display: flex;
    align-items: center;
  }
  .left h1{
    display: inline-block;
    margin: 0;

  }
  .left img{
  }
  .ico{
    padding-left: 20px;
  }
  .ico span{
    padding-left: 20px;
  }
  .days span{
    padding-left: 10px;
  }
  .rights span{
    padding-left: 10px;
    margin-top: 3px;
  }
</style>