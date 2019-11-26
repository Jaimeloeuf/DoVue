/*  @Doc
    This is the Public view, which is the view component the client sees before logging in.
    It is a enclosing view, meaning that it encloses other views that PUblic user is able to access.
*/


<template>
  <div class="public-view">
    <PublicNavbar/>

    <!-- Router view for displaying modals via Routes -->
    <router-view name="modal"/>

    <!-- Default Router view for other views -->
    <router-view/>
  </div>
</template>

<script>
import PublicNavbar from "@/components/NavBars/PublicNavbar.vue";

export default {
	name: "Public",
	components: {
		PublicNavbar
	}
};
</script>

<style scoped>
.public-view {
  margin-top: 4em;
}
</style>
