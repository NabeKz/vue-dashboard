<script lang="ts" setup>
defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div class="overlay" v-if="loading" data-testid="overlay">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  place-content: center;
  place-items: center;
  background: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100vw;
}

.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  z-index: 999;
}

@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
