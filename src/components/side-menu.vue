<script setup lang="ts">
import GoogleFontIcon from './parts/icons/google-font-icon.vue';
import FlexBox from './parts/box/flex-box.vue';

defineProps<{ slim: boolean }>()
defineEmits<{ toggle: [] }>()
const routes = [
  { name: "home", icon: "home" },
  { name: "form-sample", icon: "edit" },
]
</script>

<template>
  <aside>
    <FlexBox row class="menu-icon-wrapper" :class="{ slim }">
      <GoogleFontIcon @click="$emit('toggle')" class="menu-icon" :class="{ slim }"></GoogleFontIcon>
    </FlexBox>
    <ul class="aside_list">
      <template v-for="route in routes" :key="route.name">
        <li class="aside_list-item">
          <RouterLink :to="{ name: route.name }">
            <FlexBox row class="list-item" :class="{ slim }">
              <GoogleFontIcon>{{ route.icon }}</GoogleFontIcon>
              <div v-show="!slim">{{ route.name }}</div>
            </FlexBox>
          </RouterLink>
        </li>
      </template>
    </ul>
  </aside>
</template>

<style scoped>
.menu-icon-wrapper {
  padding: 8px;
  justify-content: end;

  &.slim {
    justify-content: center;
  }
}

.menu-icon {
  color: white;

  &::after {
    content: "menu";
  }

  &:hover {
    &::after {
      content: "arrow_back";
    }
  }

  &.slim {
    &:hover::after {
      content: "arrow_forward";
    }
  }
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

.list-item {
  padding: 20px;

  &.slim {
    justify-content: center;
  }
}
</style>