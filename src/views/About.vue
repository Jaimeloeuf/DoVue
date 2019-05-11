<template>
  <div class="about">
    <PublicNavbar/>
    <h1>This is doVue</h1>
    <h3 class="slogan">Simple, Reliable, Beautiful</h3>
    <img src="@/assets/logo.png" alt="doVue logo">
    <p class="description">
      A todo and notes taking app, focused to help you tackle whatever is on hand.
      We believe in keeping things Simple and functional, and so reliable that you never want to go back to whatever you were using before.
    </p>
  </div>
</template>


<script>
import PublicNavbar from "@/components/PublicNavbar.vue";

export default {
  name: "about",
  components: {
    PublicNavbar
  }
};
</script>


<style scoped>
.about {
  margin-top: 4em;
}
.slogan {
}
.description {
  display: block;
  max-width: 30em;
}
</style>
