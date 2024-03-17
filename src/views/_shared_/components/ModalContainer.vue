<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"
import { onMounted, onUnmounted, ref } from "vue"

type Props = {
  title: string
  open: boolean
}

defineProps<Props>()
defineEmits<{ close: [] }>()

const mounted = ref(false)
onMounted(() => (mounted.value = true))
onUnmounted(() => (mounted.value = false))
</script>

<template>
  <Teleport to="#modal-overlay" v-if="mounted">
    <Transition name="modal" mode="out-in">
      <div v-if="open" class="modal-mask" @click.self="$emit('close')">
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
  margin: auto;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
