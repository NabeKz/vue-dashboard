<script lang="ts">
export default {
  name: "SideMenu"
}
</script>
<template>
  <aside class="aside active">
    <ul class="aside_list">
      <li class="aside_list-item">item</li>
      <li class="aside_list-item">item</li>
      <li class="aside_list-item">item</li>
      <li class="aside_list-item">item</li>
    </ul>
  </aside>
</template>

<style scoped>
.aside {
  grid-area: aside;
  height: 100%;
  width: 240px;
  position: fixed;
}

.aside_list {
  margin-top: 2rem;
}

.aside_list-item {
  color: var(--vt-c-white-soft);
  padding: 20px;

  &:hover {
    background: royalblue;
    cursor: pointer;
  }
}
</style>