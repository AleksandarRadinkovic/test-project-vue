<template>
  <div>
    <div class="imgcontainer">
      <img src="../assets/logo1.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input
        type="text"
        v-model="email"
        placeholder="Enter Username"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&$password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      } else {
        console.log("nije uredu");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
div {
  text-align: center;
  display: block;
  margin: 0 auto;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #1976d2;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  width: 100%;
  max-width: 500px;
  background-color: #1976d2;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  padding: 30px;
}

img.avatar {
  width: 250px;
  height: 100px;
  display: block;
  margin: 0 auto;
  text-align: center;
}

.container {
  padding: 16px;
  width: 90%;
  max-width: 500px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>
