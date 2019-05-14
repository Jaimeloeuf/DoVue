/*  
    @Todo
    - Implement the error_msg box component and implement same thing into login view
*/

<template>
  <div class="sign-up">
    <PublicNavbar/>
    <img src="@/assets/logo.png" alt="doVue logo">
    <h3>Let's create a new account!</h3>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <p class="error">{{ error_msg }}</p>
    <button @click="signUp">Sign Up</button>
    <span>
      or go back to
      <router-link to="/login">login</router-link>.
    </span>
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
  name: "signUp",
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
    signUp: function() {
      // After signup, user will be automatically signed in, thus redirect to the notes view
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => this.$router.replace("notes"))
        .catch(error_handler);
    }
  }
};
</script>

 <style scoped>
.sign-up {
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
span {
  display: block;
  margin-top: 1em;
  font-size: 1em;
}
.error {
  display: block;
  margin-top: 20px;
}
</style>