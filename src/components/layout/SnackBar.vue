<script lang="ts" setup>
import { FlexBox } from "@/components/parts/box"
import { GoogleFontIcon } from "@/components/parts/icons"
import { useErrorHandler } from "@/provider/use-context"

defineProps<{ open: boolean; message: string }>()
const handler = useErrorHandler()
const onClickClose = () => handler.handleClose()
</script>

<template>
  <Transition>
    <FlexBox class="row snackbar-wrapper" v-if="open">
      <div class="snackbar">
        {{ message }}
        <GoogleFontIcon class="close" @click="onClickClose">close</GoogleFontIcon>
      </div>
    </FlexBox>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100px) translateY(0px);
}

.snackbar-wrapper {
  justify-content: center;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.snackbar {
  position: relative;
  border: solid 1px blue;
  border-radius: 4px;
  height: 100%;
  width: 50%;
  display: flex;
  place-content: center;
  place-items: center;
}

.close {
  position: absolute;
  padding: 8px 16px;
  top: 0;
  right: 0;
}
</style>
