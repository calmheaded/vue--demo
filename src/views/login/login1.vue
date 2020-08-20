<template>
  <div>
    <el-form
      ref="form"
      :rules="loginRules"
      :model="userInfo"
      label-width="80px"
      class="login-container"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button style="width:100%;" type="primary" @click="submitForm('form')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        userName: "caoyan",
        password: "111111",
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            userName: this.userInfo.userName,
            password: this.userInfo.password,
          };
          this.$store
            .dispatch("handleLogin", data)
            .then((res) => {
              if (res.data.status) {
                this.$router.push({
                  name: "filecontrol",
                });
              } else {
                this.$message.error(res.msg);
              }
            })
            .catch((e) => {
              this.$message.error(JSON.parse(e.response.data.message).message);
            });
        } else {
          this.$message.error("表单验证错误");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.login-container {
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
