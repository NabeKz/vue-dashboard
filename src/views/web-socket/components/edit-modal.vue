<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { TextInput } from "@/components/parts/form"
import { ref } from "vue"

type Props = {
  onSubmit: (model: Model) => void
  onClose: () => void
}
defineProps<Props>()
defineEmits<{ close: []; submit: [model: Model] }>()

type Model = {
  name: string
  title: string
}
const model = ref<Model>({ name: "", title: "" })
</script>

<template>
  <FlexBox class="column edit-modal">
    <header>
      <h1>edit modal</h1>
    </header>
    <form @submit.prevent>
      <FlexBox class="row" gap="24">
        <TextInput label="name" v-model="model.name" error-message="" />
        <TextInput label="title" v-model="model.title" error-message="" />
        <FlexBox class="row buttons" gap="24">
          <TheButton kind="submit" @click="$emit('submit', model)">submit</TheButton>
          <TheButton kind="submit" @click="$emit('close')">close</TheButton>
        </FlexBox>
      </FlexBox>
    </form>
  </FlexBox>
</template>

<style scoped>
.edit-modal {
  margin: auto;
  place-content: normal;
  place-items: center;
}

.buttons {
  justify-content: center;
}
</style>
