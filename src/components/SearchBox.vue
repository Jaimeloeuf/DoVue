/*
    @Todo
    -  The search input, will be a perma link that can be bookmarked. Look at how Keep does it.
*/

<template>
  <span class="search">
    <input type="text" v-model="search_string" placeholder="Search">
    <!-- @Todo Create a new search bar component -->
    <!-- @Todo Create condition for displaying close button. Only appear when there is search results -->
    <button v-if="false" @click="close">Close</button>
  </span>
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

<style scoped>
.search {
}
</style>
