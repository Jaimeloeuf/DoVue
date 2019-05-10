<template>
  <div class="login">
    <img src="@/assets/logo.png" alt="doVue logo">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" autofocus>
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="login">Login</button>
    <p>
      Don't have an account yet? Hurry and
      <router-link to="/sign-up">create one now!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => this.$router.replace("notes"))
        .catch(err => console.log(err.message));
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>