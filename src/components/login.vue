<template>
  <div class="login">
    <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo">
      <h1>用户登录</h1>
      <el-form-item prop="phone">
        <el-input
          type="text"
          v-model="userinfo.phone"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="userinfo.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <p type="primary" class="resgiter">
          <a href="javascript:void(0)" @click="$router.push('/register')"
            >未拥有账户，前往注册</a
          >
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
// import store from "../store";
export default {
  data() {
    return {
      userinfo: {
        password: "",
        phone: "",
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 9, message: "长度在 1 到 9 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.userinfo.validate((valid) => {
        if (valid) {
          axios.post("/api/login", this.userinfo).then((res) => {
            if (res.data.code == 200) {
              this.$store.dispatch("setUserinfoSync", res.data.list);
              this.$router.push("/");
            } else {
              this.$message(res.data.msg);
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url("/static/images/loginbg.jpg");
  background-size: 100% 100%;
}
.el-form {
  width: 80vw;
  height: 40vh;
  background-color: #fff;
  margin: 30vh auto;
  padding: 20px;
  border-radius: 20px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.el-button {
  width: 100%;
}
.resgiter {
  text-align: right;
}
a {
  color: #aaa;
  text-decoration: underline;
}
h1 {
  font-size: 0.36rem;
  font-weight: bold;
  color: #333;
}
</style>
