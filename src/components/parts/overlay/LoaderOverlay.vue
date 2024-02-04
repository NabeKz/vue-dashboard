<script lang="ts" setup>


</script>

<template>
  <div class="overlay">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  place-content: center;
  place-items: center;
  background: rgba(0, 0, 0, .7);
  height: 100vh;
  width: 100vw;
  z-index: 999;
}

.loader {
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: whitesmoke;
  --_m:
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;
  /* safari用 */
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn)
  }
}
</style>