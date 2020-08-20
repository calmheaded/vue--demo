<template>
  <div>
    <!-- 搜索选项 -->
    <el-form :inline="true" label-width="80px">
      <el-form-item label="下拉列表1">
        <el-select v-model="listQuery.listOne" placeholder="请选择">
          <el-option
            v-for="item in formInline.listOne"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="下拉列表2">
        <el-select v-model="listQuery.listTwo" placeholder="请选择">
          <el-option
            v-for="item in formInline.listTwo"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="listQuery.listThree" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList">查询</el-button>
        <el-button type="primary" @click="add">添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <!-- <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>-->
      <el-table-column prop="productId" label="产品id"></el-table-column>
      <el-table-column prop="productName" label="产品名称"></el-table-column>
      <el-table-column prop="productNum" label="产品数量"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
    ></el-pagination>
  </div>
</template>
<script>
// import { fetchList } from "@/api/pageone";
import { FetchList } from "@/api/login.js";
import axios from "axios";
export default {
  data() {
    return {
      formInline: {
        listOne: [
          { id: 1, value: 2 },
          { id: 2, value: 3 },
          { id: 3, value: 4 },
          { id: 4, value: 5 },
        ],
        listTwo: [
          { id: 1, value: 2 },
          { id: 2, value: 3 },
          { id: 3, value: 4 },
          { id: 4, value: 5 },
        ],
      },
      listQuery: {
        listOne: "",
        listTwo: "",
        listThree: "",
      },
      //   表格数据
      tableData: [{ id: 1, name: "xkx", data: "2020" }],
      //   分页数据
      pageInfo: {
        pageSize: 10, // 等于5的时候 接口 有bug
        page: 1,
        total: 0,
      },
      listLoading: false,
    };
  },
  methods: {
    //   初始化
    init() {},
    // 获取表格数据
    getList() {
      const query = {
        page: this.pageInfo.page,
        pageSize: this.pageInfo.pageSize,
      };
      FetchList(query).then((res) => {
        console.log(res.data, "pageres");
        const data = res.data;
        this.tableData = data.result.list;
        this.pageInfo.total = data.result.count;
      });
      //   axios.get("/lists/test", { params: query }).then((res) => {
      //     const data = res.data;
      //     this.tableData = data.result.list;
      //     this.pageInfo.total = data.result.count;
      //   });
    },
    // 分页事件 pageSize 改变时会触发
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(val, "val");
      this.pageInfo.page = val;
      this.getList();
    },
    // 添加
    add() {},
    // 编辑
    edit() {},
    // 删除
    delete() {},
  },
  created() {},
  mounted() {
    this.getList();
  },
};
</script>
