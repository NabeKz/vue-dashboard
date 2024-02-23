<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"

type Props = {
  title: string
  open: boolean
  onClose: () => void
}

defineProps<Props>()
const emits = defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="#modal-overlay">
    <Transition name="modal" mode="out-in">
      <div v-if="open" class="modal-mask" @click.self="emits('close')">
        <FlexBox class="column modal-content">
          <slot></slot>
        </FlexBox>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.modal-content {
  width: 500px;
  height: 500px;
  background: white;
  z-index: 1000;
  margin: auto;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
