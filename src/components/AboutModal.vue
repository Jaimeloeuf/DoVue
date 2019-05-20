// AboutModal.vue

<template>
  <modal
    name="AboutModal"
    :adaptive="true"
    :max-width="1000"
    :max-height="400"
    width="80%"
    height="50%"
  >
    <div style="padding:30px; text-align: center">Hello!</div>
  </modal>
</template>
<script>
export default {
  name: "AboutModal"
};
</script>