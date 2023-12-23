<script setup lang="ts">
import FlexBox from './box/flex-box.vue';

</script>
<template>
  <main class="main">
    <div class="main-container">
      <div class="main-item">
        <FlexBox d="row" />
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
    flex-basis: 250px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 100px;
    border: 1px solid darkblue;
    border-radius: 4px;
    color: darkblue;
  }
}
</style>