<script setup lang="ts">
</script>
<template>
  <main class="main">
    <div class="main-container">
      <div class="main-item">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  grid-area: main;

  .main-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .main-item {
    display: flex;
    flex-grow: 1;
    padding: 20px;
    height: calc(100vh - 100px);
    overflow: scroll;
    border: 1px solid darkblue;
    border-radius: 4px;
  }
}
</style>