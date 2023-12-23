<script lang="ts">
export default { name: "TheHeader" }
</script>
<script setup lang="ts">
import GoogleFontIcon from '@/components/icons/google-font-icon.vue';
</script>

<template>
  <header class="header">
    <div class="header-item">header</div>
    <div class="header-item">
      <GoogleFontIcon @click="console.debug('hoge')">notifications</GoogleFontIcon>
    </div>
    <div class="header-item">
      <GoogleFontIcon @click="console.debug('hoge')">logout</GoogleFontIcon>
    </div>
  </header>
</template>

<style>
.header {
  grid-area: header;
  display: flex;
  padding: 0 64px;
  align-items: center;
  gap: 32px;

  & .header-item {
    &:first-child {
      margin-right: auto;
    }
  }
}
</style>