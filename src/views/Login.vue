/*
    @Todo
    - Add in browser's "required" attribute checker for input. Add it to signup view once done.
    - Build autofocus into the template's Email input. Add it to signup view once done.
*/

<template>
  <div class="login">
    <PublicNavbar/>
    <img src="@/assets/logo.png" alt="doVue logo">
    <h3>Glad to have you back :)</h3>
    <input v-autofocus type="text" v-model="email" placeholder="Email" required autofocus>
    <br>
    <input type="password" v-model="password" placeholder="Password" required>
    <br>
    <p class="error">{{ error_msg }}</p>
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

function error_msg(err) {
  // Function maps the given err.msg to a more user understandable message before
  // returning the final message for displaying onto the error_msg box

  // Tmp return original message
  return err.message;
}

// Error handler function
function error_handler(err) {
  console.log(error_msg(err));

  // Set the message into the error box to show user the error
  this.error_msg = error_msg(err);
}

export default {
  name: "login",
  components: {
    PublicNavbar
  },
  data() {
    return {
      email: "",
      password: "",
      error_msg: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        // .then(user => this.$router.replace("notes"))
        .then(() => this.$router.replace("notes"))
        .catch(error_handler);
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