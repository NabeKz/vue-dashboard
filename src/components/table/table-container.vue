<script setup lang="ts">
import { onMounted, useSlots } from 'vue';

const { header } = useSlots()

onMounted(() => {
  console.debug(header?.())
})
</script>

<template>
  <table class="table-container">
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr>
        <slot name="record"></slot>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table-container {
  border-collapse: collapse;
  font-size: 2rem;

  :slotted(th) {
    padding: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
    background: whitesmoke;
  }

  :slotted(td) {
    padding: 8px;
  }
}
</style>