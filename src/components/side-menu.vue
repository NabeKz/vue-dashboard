<script setup lang="ts">
import { ref } from 'vue';
import GoogleFontIcon from './parts/icons/google-font-icon.vue';
import FlexBox from './parts/box/flex-box.vue';

const slim = ref(false)
const toggle = () => {
  const el = document.querySelector("#app")
  el?.classList.toggle("slim")
  slim.value = !slim.value
}
const routes = [
  { name: "home" },
  { name: "form-sample" },
]
</script>

<template>
  <aside class="aside" :class="{ slim }">
    <FlexBox row class="menu-icon-wrapper">
      <GoogleFontIcon @click="toggle" class="menu-icon">menu</GoogleFontIcon>
    </FlexBox>
    <ul class="aside_list">
      <template v-for="route in routes" :key="route.name">
        <li class="aside_list-item">
          <RouterLink :to="{ name: route.name }">
            <div class="block">{{ route.name }}</div>
          </RouterLink>
        </li>
      </template>
    </ul>
  </aside>
</template>

<style scoped>
.aside {
  grid-area: aside;
  height: 100%;
  width: 240px;
  position: fixed;
  transition: all .3s ease;

  &.slim {
    width: 80px;
  }
}

.menu-icon-wrapper {
  padding: 8px;
}

.menu-icon {
  color: white;
}

.aside_list {
  margin-top: 2rem;
}

.aside_list-item {
  color: var(--vt-c-white-soft);

  &:hover {
    background: royalblue;
    cursor: pointer;
  }
}

a {
  color: white;
  text-decoration: none;
}

.block {
  display: block;
  padding: 20px;
}
</style>