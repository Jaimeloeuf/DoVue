<template>
  <div class="login">
    <PublicNavbar/>
    <img src="@/assets/logo.png" alt="doVue logo">
    <h3>Glad to have you back :)</h3>
    <input type="text" v-model="email" placeholder="Email" autofocus>
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="login">Login</button>
    <p>
      Don't have an account yet? Hurry and
      <router-link to="/sign-up">create one now</router-link>!
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import PublicNavbar from "@/components/PublicNavbar.vue";

export default {
  name: "login",
  components: {
    PublicNavbar
  },
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
  margin-top: 4em;
}
input {
  margin: 1em 0;
  width: 20%;
  padding: 1em;
}
button {
  margin-top: 1em;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 4em;
  font-size: 1em;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>