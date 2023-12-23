<template>
  <div class="stack">
    <slot></slot>
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
}
</style>