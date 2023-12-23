<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Main from './components/the-main.vue'
import TheHeader from './components/the-header.vue'
import TheFooter from './components/the-footer.vue'
import SideMenu from './components/the-aside.vue'
</script>

<template>
  <TheHeader />
  <SideMenu />
  <Main></Main>
  <TheFooter />
</template>

<style scoped>
.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
