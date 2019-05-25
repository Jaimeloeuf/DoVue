<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <!-- Modal content will be injected into slots component -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  mounted() {
    const modal = document.getElementById("modal"); // Get the modal

    const btn = document.getElementById("trigger"); // Get the button that opens the modal

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) modal.style.display = "none";
    // };

    window.onclick = function(event) {
      if (event.target == modal) modal.style.display = "none";
    };

    window.onkeydown = function(event) {
      if (event.which === 27) modal.style.display = "none";
    };
  },
  methods: {}
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>