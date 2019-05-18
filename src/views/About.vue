/*  @Doc
    About view page. Home page of the app too.

    @Todo
    - Rebuild the styles using CSS grids.
*/

<template>
  <div class="about">
    <h1 style="color: #004f12;">This is DoVue</h1>
    <h3 class="slogan">Simple, Reliable, Beautiful</h3>
    <img src="@/assets/logo_big.png" alt="DoVue logo">
    <div class="description">
      <p>
        A todo and notes taking app, focused to help you tackle whatever is on hand.
        We believe in keeping things Simple and functional, and so reliable that you never want to go back to whatever you were using before.
      </p>
    </div>
    <p>
      Sounds great?
      <router-link to="/sign-up">Signup</router-link>&nbsp;for an account now or Login
      <router-link to="/login">here</router-link>
    </p>
  </div>
</template>


<script>
export default {
  name: "about"
};
</script>


<style scoped>
.about {
  margin-top: 4em;
  /* Align left with 1em margin to align up with the Navigation bar */
  text-align: left;
  margin-left: 1em;
}

.slogan {
    color: #0a8402;
}

.description {
  max-width: 40em;
}
</style>
