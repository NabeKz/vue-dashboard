<script lang="ts" setup>
import { ref } from "vue";
import TheButton from "./TheButton.vue"

const isLoading = ref(false)

const toggleLoading = () => isLoading.value = !isLoading.value
</script>

<template>
  <div>
    <div class="btn-container">
      <TheButton kind="submit">aaaaa</TheButton>
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-container {
  position: relative;
}

.loader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  /* top, leftだけだと左上の角が中央に寄る, transformで調整 */
  transform: translate(-50%, -50%);
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