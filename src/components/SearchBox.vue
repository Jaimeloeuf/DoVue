/*
    @Todo
    -  The search input, will be a perma link that can be bookmarked. Look at how Keep does it.
*/

<template>
  <div class="search">
    <button class="search-icon" aria-label="Search" role="Search icon button" @click="btnClick">
      <svg
        focusable="false"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
        ></path>
      </svg>
    </button>
    &nbsp;
    <input
      class="search-field"
      ref="searchfield"
      type="text"
      v-model="search_string"
      placeholder="Search"
      @keydown.esc="close"
    >
    <button class="close-icon" v-if="search_string.length > 0" @click="close">&times;</button>
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
    close() {
      /* Methods to run to close the search box and its generated results */
      // Clear the search string
      this.search_string = "";
      // Remove the focus on the input box
      this.$refs.searchfield.blur();

      // @Todo Remove search results
    },
    btnClick() {
      this.$refs.searchfield.focus();
    }
  }
};
</script>

<style scoped>
.search {
  display: inline-block;
  border: 1px solid #d7dee8;
}

svg {
  height: 1em;
}

.search-field {
  border: 0px;
}

.search-field:focus {
  /* Remove the highlight when the input box is focused */
  outline: none;
}
</style>
