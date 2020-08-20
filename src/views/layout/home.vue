<!--
***系统主窗体布局***
-->
<template>
  <div class="app-wrapper">
    <el-container>
      <!--左侧-->
      <el-aside :class="collapsed?'aside-mini':'aside-long'" width="collapsed?'65px':'260px'">
        <!--LOGO-->
        <el-col :span="24" class="logo">{{collapsed?logoMiniName:logoLongName}}</el-col>
        <el-col :span="24">
          <v-sidebar :collapsed="collapsed"></v-sidebar>
        </el-col>
      </el-aside>
      <!--右侧-->
      <el-container class="main-container">
        <!--头部-->
        <el-header class="header">
          <el-col :span="12">
            <el-button style="margin-left:10px;" @click="collapse">
              <i :class="collapsed?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i>
            </el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <v-head></v-head>
          </el-col>
        </el-header>
        <!--BODY-->
        <el-main>
          <el-col :span="24" class="nav">
            <!--面包屑-->
            <breadcrumb></breadcrumb>
          </el-col>
          <el-col :span="24" class="content">
            <!--主体内容路由视图-->
            <router-view></router-view>
          </el-col>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vHead from "./header.vue";
import vSidebar from "./sidebar.vue";
import Breadcrumb from "./Breadcrumb";
export default {
  components: {
    vHead,
    vSidebar,
    Breadcrumb,
  },
  data() {
    return {
      collapsed: false,
      logoMiniName: "xkx",
      logoLongName: "简洁版",
    };
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style>
#app {
}
/* 最外层容器 */
.app-wrapper {
  /* border: 1px solid red; */
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  /* border: 1px solid blue; */
}
.el-container {
  height: 100%;
}
.logo {
  color: #fff;
  font-size: 25px;
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  background-color: #072140;
}
.el-aside {
  background: #000;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 6;
  background-color: #031529;
  width: 260px;
  overflow-y: auto;
  /* overflow: inherit; */
  -webkit-box-shadow: 1px 1px 7px #333;
  -moz-box-shadow: 1px 1px 7px #333;
  -o-box-shadow: 1px 1px 7px #333;
}
.aside-long,
.aside-mini {
  background-color: #031529;
  width: 260px;
  height: 100%;

  overflow-y: auto;
}
.aside-mini {
  width: 65px;
  overflow: inherit;
}
/* .el-menu--collapse .el-submenu .el-menu {
  display: block;
}
.el-menu-item {
  -webkit-transition: 0s !important;
  transition: 0s !important;
  background: #f00;
} */
/*右侧*/
.header {
  padding-left: 0px;
  background-color: #fff;
  color: #333;
  line-height: 60px;
  height: 60px;
  color: #fff;
  width: 100%;
  z-index: 5;
  box-shadow: 1px 1px 5px #ccc;
  -webkit-box-shadow: 1px 1px 5px #ccc;
  -moz-box-shadow: 1px 1px 5px #ccc;
  -o-box-shadow: 1px 1px 5px #ccc;
}
.el-main {
  background-color: #f0f2f5;
  width: 100%;
  padding: 0;
}

/*面包屑*/
.nav {
  background-color: #fff;
  height: 71px;
}
.content {
  background-color: #fff;
  border: 20px solid #f0f2f5;
  padding: 20px;
  border: 1px solid green;
  /* height: 100%; */
}
</style>
