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
      <label :for="`${id}-1`"> キーワード <input :id="`${id}-1`" /> </label>
      <label :for="`${id}-2`"> 著者 <input :id="`${id}-2`" /> </label>
      <label :for="`${id}-3`"> 資料区部 <input :id="`${id}-3`" /> </label>
      <label :for="`${id}-4`"> 資料種別 <input :id="`${id}-4`" /> </label>
      <button type="submit">submit</button>
    </TheForm>
  </main>
</template>

<style scoped>
.date-container {
  width: 100px;
}
</style>
