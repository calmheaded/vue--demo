<template>
  <!-- <el-menu
    background-color="#031529"
    style="border-right:0px;"
    text-color="#b7bcc2"
    active-text-color="#fff"
    collapsible
    default-active="1-2"
    class="el-menu-vertical-demo"
  >-->
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper">11111</el-scrollbar> -->

  <!-- <el-menu
    :show-timeout="200"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="red"
    :collapse="collapsed"
  >-->
  <el-menu
    :collapse="collapsed"
    router
    unique-opened
    default-active="dashboard"
    background-color="#031529"
    style="border-right:0px;"
    text-color="#b7bcc2"
    active-text-color="#fff"
  >
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1-1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">文档</span>
      </template>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2-1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">文档</span>
      </template>
      <el-menu-item index="2-2">1级菜单</el-menu-item>
      <el-menu-item index="2-3">1级菜单</el-menu-item>
      <el-menu-item index="2-3">1级菜单</el-menu-item>
      <el-menu-item index="2-4">1级菜单</el-menu-item>
      <el-menu-item index="2-3">1级菜单</el-menu-item>
      <el-menu-item index="2-3">1级菜单</el-menu-item>
      <el-menu-item index="2-4">1级菜单</el-menu-item>
    </el-submenu>
    <el-submenu index="3-1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">文档</span>
      </template>
      <el-menu-item index="3-2">1级菜单</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">错误处理</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: ["collapsed"],
  data() {
    return {};
  },
};
</script>
<style>
ul.el-menu > li > ul > li.is-active {
  background: rgb(62, 144, 254) !important;
}
ul.el-menu > li.is-active {
  background: rgb(62, 144, 254) !important;
}
ul.el-menu > li > ul > li {
  background: rgb(1, 12, 23) !important;
}
ul.el-menu > li > ul > li .el-submenu__title {
  background: rgb(1, 12, 23) !important;
}
</style>
