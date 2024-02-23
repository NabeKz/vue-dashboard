<script setup lang="ts" generic="T extends { id: string | number }">
defineProps<{ items: T[] }>()
</script>

<template>
  <table class="table-container">
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in items" :key="item.id">
        <tr>
          <slot name="item" v-bind="item"></slot>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
.table-container {
  border-collapse: collapse;
  font-size: 1.2rem;

  :slotted(th) {
    padding: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
    background: whitesmoke;
    width: 200px;
    text-align: left;
  }

  :slotted(th:last-child) {
    width: 80px;
  }

  :slotted(td) {
    padding: 8px;
  }
}
</style>
