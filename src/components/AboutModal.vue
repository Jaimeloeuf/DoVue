// AboutModal.vue

<template>
  <modal
    name="AboutModal"
    :adaptive="true"
    :max-width="1000"
    width="80%"
    height="50%"
  >
    <div style="padding:30px; text-align: center">
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