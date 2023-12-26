<script setup lang="ts">
import FlexBox from '../box/flex-box.vue';
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
  <Teleport to="body">
    <Transition name="modal" mode="out-in">
      <div v-if="open" class="modal-mask">
        <div class="modal-content">
          <slot></slot>
          <SmallButton type="submit" @click="emits('close')">close</SmallButton>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  transition: all 0.3s ease;
}

.modal-content {
  margin: auto;
  width: 500px;
  height: 500px;
  background: white;
  z-index: 1000;
  display: flex;
  place-content: center;
  place-items: center;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>