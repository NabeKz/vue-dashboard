<script lang="ts" setup>
import { FlexBox } from "@/components/parts/box/flex-box";
import { useErrorHandler } from "@/provider/auth-provider/use-snackbar";
import GoogleFontIcon from "@/components/parts/icons/google-font-icon.vue";

defineProps<{ open: boolean; message: string }>()
const handler = useErrorHandler()
const onClickClose = () => handler?.handleClose()
</script>

<template>
  <FlexBox class="snackbar-wrapper" :class="{ open }">
    <div class="snackbar">
      {{ message }}
      <GoogleFontIcon class="close" @click="onClickClose">close</GoogleFontIcon>
    </div>
  </FlexBox>
</template>

<style scoped>
.snackbar-wrapper {
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
  transform: translateY(100px);
  transition: all 0.5s ease;

  &.open {
    transform: translateY(0px);
  }
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