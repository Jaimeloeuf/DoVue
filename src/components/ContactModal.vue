/*  @Doc
    Modal to show the Contact Us/Me view. Built by nesting the Contact view component inside a modal.

    @Todo
    - Fix the layout of the modal and remove hardcoded height. Make height and width adaptive
*/

<template>
  <modal name="contact" :adaptive="true" :height="400">
    <div class="contact">
      <Contact/>
    </div>
  </modal>
</template>


<script>
import Contact from "@/views/Contact.vue";

export default {
  name: "ContactModal",
  components: {
    Contact
  }
};
</script>


<style>
.contact {
  margin: 1em;
}
</style>