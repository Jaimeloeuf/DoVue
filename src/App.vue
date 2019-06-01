<template>
  <div id="app">
    <!-- First router view is for the navigation bar -->
    <router-view name="navbar"/>

    <!-- Router view for the main view -->
    <!-- This router-view should be switching between showing the Private or Public view.
    By doing that, we can scrap the need to add the navbar components into all the routing.-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
