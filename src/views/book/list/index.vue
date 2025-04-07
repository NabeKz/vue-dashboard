<script setup lang="ts">
import { useId } from "vue"
import TheForm from "@/shared/parts/form/the-form.vue"

defineOptions({ name: "BookList", inheritAttrs: false })

const id = useId()
</script>

<template>
  <main>
    <div>search</div>
    <TheForm>
      <label :for="id"> キーワード <input :id="id" /> </label>
      <label :for="id"> 著者 <input :id="id" /> </label>
      <label :for="id"> 資料区部 <input :id="id" /> </label>
      <label :for="id"> 資料種別 <input :id="id" /> </label>
      <button type="submit">submit</button>
    </TheForm>
  </main>
</template>

<style scoped>
.date-container {
  width: 100px;
}
</style>
