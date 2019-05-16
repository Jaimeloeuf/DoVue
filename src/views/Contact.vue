<template>
  <div class="contact">
    <PublicNavbar/>
    <h1>DoVue</h1>
    <h3 class="slogan">Simple, Reliable, Beautiful</h3>
    <img src="@/assets/logo.png" alt="DoVue logo">
    <p class="description"></p>
  </div>
</template>


<script>
import PublicNavbar from "@/components/PublicNavbar.vue";

export default {
  name: "contact",
  components: {
    PublicNavbar
  }
};
</script>


<style scoped>
.contact {
  margin-top: 4em;
}
</style>
