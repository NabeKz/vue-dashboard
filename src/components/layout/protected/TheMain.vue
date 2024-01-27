<template>
  <main>
    <div class="main-container">
      <div class="main-item">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  .main-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .main-item {
    display: flex;
    flex-grow: 1;
    padding: 20px;
    overflow: scroll;
  }
}
</style>