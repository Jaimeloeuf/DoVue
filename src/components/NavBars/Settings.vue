/*  @Doc
    This is the left side navigation bar for the settings view

    Sections in the settings nav bar: 
    - General
    - Display
    - Feedback

    @Todo
    - Make this sidebar hideable
        - Meaning that when the screen is too narrow, hide it into a expandable box thing.
*/

<template>
  <div class="settings-navbar">
    <h1 style="color: #004f12;">Settings</h1>
    <ul>
      <!-- List all the settings section -->
      <li>General</li>
      <hr>
      <li>Email and Account</li>
      <hr>
      <li>Storage</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style scoped>
.settings-navbar {
  display: inline-block;
  text-align: left;

  border: 1px solid grey;
  border-style: none solid none none;
}

h1 {
  margin: 0em;
  padding-left: 0.5rem;
}

ul {
  padding: 1em;
  padding-left: 0.5em;
  list-style-type: none;
}

hr {
  border: 0.5px solid #004f12;
}
</style>
