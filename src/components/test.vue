<template>
  <div>
    <!-- Trigger/Open The Modal -->
    <button id="trigger">Open Modal</button>
    <modal>
      <!-- The Modal -->
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </modal>
  </div>
</template>

<script>
import modal from "@/components/modal.vue";

export default {
  components: {
    modal
  },
  methods: {}
};
</script>

<style scoped>
</style>