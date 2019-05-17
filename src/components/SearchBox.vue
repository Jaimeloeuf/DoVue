/*
    @Todo
    -  The search input, will be a perma link that can be bookmarked. Look at how Keep does it.
*/

<template>
  <div class="search">
    <input type="text" v-model="title" placeholder="Title">
    <!-- @Todo Create a new search bar component -->
    <!-- @Todo Move Close button right beside the search box -->
    <button @click="close">Close</button>
    <br>
    <!-- search results, displayed through direct data placement or through router view? -->
  </div>
</template>

<script>
export default {
  name: "SearchBox",

  data() {
    return {
      search_string: ""
    };
  },
  methods: {
    close: function() {
      // Remove search results
    }
  }
};
</script>

<style>
</style>
