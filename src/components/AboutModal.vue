/*

    @Todo
    - Create a share button to social media and stuff.
    - Add the share button to About view and AboutModal
*/

<template>
  <modal name="AboutModal" :adaptive="true" :max-width="1000" width="80%" height="50%">
    <div class="about">
      <div class="left">
        <h1 style="color: #004f12;">This is DoVue</h1>
        <h3 class="slogan">Simple, Reliable, Beautiful</h3>
        <img src="@/assets/logo_big.png" alt="DoVue logo">
      </div>
      <div class="description">
        <p>
          A todo and notes taking app, focused to help you tackle whatever is on hand.
          We believe in keeping things Simple and functional, and so reliable that you never want to go back to whatever you were using before.
        </p>
      </div>
    </div>
  </modal>
</template>


<script>
export default {
  name: "AboutModal"
};
</script>


<style scoped>
.about {
  /* Top and Bottom, 2em padding. Right and Left, 3em padding. */
  padding: 2em 3em;
  text-align: left;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 3em;
}

.slogan {
  color: #0a8402;
}

.left {
  grid-column: 1;
}

.description {
  margin-top: 1em;
  grid-column: 2;
}
</style>