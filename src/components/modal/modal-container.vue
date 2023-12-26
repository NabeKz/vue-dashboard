<script setup lang="ts">
import SmallButton from '../button/small-button.vue';

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
}

defineProps<Props>()
const emits = defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="#modal-overlay">
    <Transition name="modal" mode="out-in">
      <div v-if="open" class="modal-container">
        <div class="modal-content">
          <slot></slot>
          <SmallButton type="submit" @click="emits('close')">close</SmallButton>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}

.modal-content {
  margin: auto;
  width: 500px;
  height: 500px;
}

.modal-enter-active,
.modal-leave-active {
  &.modal-container {
    transition: opacity 0.5s ease;
  }
}

.modal-enter-from,
.moda-leave-to {
  &.modal-container {
    opacity: 0;
  }
}
</style>