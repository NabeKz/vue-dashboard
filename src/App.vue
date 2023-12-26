<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/the-header.vue'
import SideMenu from './components/side-menu.vue'
import TheFooter from './components/the-footer.vue'
import Main from './components/the-main.vue'
</script>

<template>
  <TheHeader class="header" />
  <SideMenu />
  <Main>
    <RouterView />
  </Main>
  <TheFooter />
  <div id="modal-overlay"></div>
</template>

<style scoped>
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
}
</style>