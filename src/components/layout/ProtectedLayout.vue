<script setup lang="ts">
import SideMenu from '@/components/side-menu.vue'
import TheHeader from '@/components/the-header.vue'
import Main from '@/components/the-main.vue'
import { ref } from 'vue';
import { RouterView } from 'vue-router'

const slim = ref(false)
const toggle = () => slim.value = !slim.value
</script>

<template>
  <div id="wrapper" :class="{ slim }">
    <TheHeader class="header" />
    <SideMenu class="aside" @toggle="toggle" :slim="slim" />
    <Main class="main">
      <RouterView />
    </Main>
  </div>
  <div id="modal-overlay"></div>
</template>

<style scoped>
#wrapper {
  display: grid;
  min-width: 100vw;
  grid-template-areas:
    "header header"
    "aside main"
  ;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 200px 1fr;
  transition: all .3s ease;

  &.slim {
    grid-template-columns: 80px 1fr;
    transition: all .3s ease;
  }

  .header {
    grid-area: header;
    display: flex;
    padding: 0 64px;
    align-items: center;
    gap: 32px;
    background: whitesmoke;
  }

  .aside {
    grid-area: aside;
    background: var(--vt-c-indigo);
    height: 100%;
  }

  .main {
    grid-area: main;
    background: whitesmoke;
    border: 1px solid darkblue;
    border-radius: 4px;
  }
}

#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
}
</style>