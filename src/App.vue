<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/header/index.vue'
import SideMenu from './components/sidemenu/index.vue'
import TheFooter from './components/the-footer.vue'
import Main from './components/the-main.vue'
import ModalOverlay from "./components/modal-overlay.vue"
</script>

<template>
  <TheHeader class="header" />
  <SideMenu />
  <Main>
    <RouterView />
  </Main>
  <TheFooter />
  <ModalOverlay />
</template>
