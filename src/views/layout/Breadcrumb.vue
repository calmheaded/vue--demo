<!--面包屑组件-->
<template>
  <section>
    <!--读取roter显示为面包屑项-->
    <el-breadcrumb
      separator="/"
      style="margin-left:20px;line-height:40px;"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <strong style="width:100px;color:#475669;margin-left:25px;line-height:31px;">{{11111}}</strong>
  </section>
</template>
