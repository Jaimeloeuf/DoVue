/*  @Doc
    This is the left side navigation bar for the settings view

    Sections in the settings nav bar: 
    - General
    - Display
    - Feedback
*/

<template>
  <div class="settings-navbar">
    <!-- List all the settings section -->
    <ul class="settings">
      <li>General</li>
      <li>Email and Account</li>
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
</style>
