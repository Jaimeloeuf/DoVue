/*

    @Todo
    - Build firebase CF to receive contact us details before emailing it to the team.
    - Add in firebase dependency to call the above CF.
*/

<template>
  <div class="contact">
    <a href="/#/about">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <h1>DoVue</h1>
    <h3 class="slogan">Simple, Reliable, Beautiful</h3>
    <p>Hey there, enter your contact details and any other details or feedback you would like to give us, before we are able to reach out to you!</p>
    <input v-autofocus type="text" v-model="name" placeholder="Name">
    <br>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <textarea name="details" v-model="details" placeholder="Details" cols="30" rows="10"/>
    <br>
    <p class="error">{{ error_msg }}</p>
    <button @click="postContactDetails">Contact Me!</button>
  </div>
</template>


<script>
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
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
img {
  max-width: 1.5em;
  margin-right: 0.8em;
}

h1 {
    display: inline;
}

.contact {
  margin-top: 4em;
}
</style>
