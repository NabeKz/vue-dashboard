<script lang="ts" setup>
import { FlexBox } from "@/components/parts/box/flex-box";


</script>

<template>
  <FlexBox class="snackbar-wrapper">
    <div class="snackbar">
      message
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
}

.snackbar {
  border: solid 1px blue;
  border-radius: 4px;
  height: 100%;
  width: 50%;
  display: flex;
  place-content: center;
  place-items: center;
}
</style>