<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import SideMenu from './SideMenu.vue';
import TheHeader from './TheHeader.vue';
import Main from './TheMain.vue';

const slim = ref(false)
const toggle = () => slim.value = !slim.value
</script>

<template>
  <div id="modal-overlay"></div>
  <div id="wrapper" :class="{ slim }">
    <TheHeader class="header" />
    <SideMenu class="aside" @toggle="toggle" :slim="slim" />
    <Main class="main">
      <RouterView />
    </Main>
  </div>
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