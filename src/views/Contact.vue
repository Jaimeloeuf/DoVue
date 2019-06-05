/*

    @Todo
    - Fix layout with CSS grids
    - Build firebase CF to receive contact us details before emailing it to the team.
    - Add in firebase dependency to call the above CF.
*/

<template>
  <div class="contact">
    <a href="/#/about">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <h1 style="display: inline;">DoVue</h1>
    <h3 class="slogan">Simple, Reliable, Beautiful</h3>
    <p>Hey there, enter your contact details and any other details or feedback you would like to give us, so that we can reach out to you!</p>
    <div class="contact-details">
      <input v-autofocus type="text" v-model="name" placeholder="Name">
      <br>
      <input type="text" v-model="email" placeholder="Email">
      <br>
      <input type="text" v-model="phone" placeholder="Optional Phone number">
      <br>
    </div>
    <textarea class="details" name="details" v-model="details" placeholder="Details"/>
    <br>
    <p class="error">{{ error_msg }}</p>
    <button @click="postContactDetails">Contact Me!</button>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      details: "",
      error_msg: ""
    };
  },
  methods: {
    postContactDetails: function() {}
  }
};
</script>


<style scoped>
.contact {
  max-width: 40em;

  /* @Todo remove the hard code and make it dynamic to screen height */
  height: 10em;

  text-align: left;
}

img {
  max-width: 1.5em;
  margin-right: 0.8em;
}

.contact-details > input {
  /* Make the text "float" in the middle */
  padding: 0.5em;
  margin: 0.5em;

  /* Follow same margin as the view */
  margin-left: 0em;

  display: inline-block;
}

.details {
  display: inline-block;

  /* Prevent user from resizing the text input area */
  resize: none;
  /* Make the textarea stretch out to fit fully into the modal's space */
  width: 100%;
  height: 100%;

  /* Make the text "float" in the middle */
  padding: 0.5em;
  margin: 0.5em;

  /* Follow same margin as the view */
  margin-left: 1em;

  float: right;
}
</style>
