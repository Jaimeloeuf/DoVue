/*

    @Todo
    - Write the help section out. Basic instructions on how to use the app
*/

<template>
  <modal name="HelpModal" :adaptive="true" :max-width="1000" width="80%" height="50%">
    <!-- @before-close="beforeclose" -->
    <div class="help">
      <div class="left">
        <img src="@/assets/logo.png" alt="DoVue logo">
        <h1 style="color: #004f12; display: inline;">DoVue</h1>
        <h3 class="slogan">Simple, Reliable, Beautiful</h3>
      </div>
      <div class="help-section">
        <p></p>
      </div>
    </div>
  </modal>
</template>


<script>
export default {
	name: "HelpModal"
};
</script>


<style scoped>
.help {
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