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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  transform: translateX(-245px);
  &.active {
    transform: translateX(0);
  }
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