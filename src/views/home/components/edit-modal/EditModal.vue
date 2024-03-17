<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { TextInput } from "@/components/parts/form"
import type { Emits, Props } from "./types"
import { useEditForm } from "./use-edit-form"

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const { title, content, errors, onSubmit } = useEditForm(props, emits)
</script>

<template>
  <FlexBox class="column edit-modal">
    <header>
      <h1>edit modal</h1>
    </header>
    <form @submit.prevent>
      <FlexBox class="column" gap="24">
        <TextInput name="title" label="title" v-model="title" :error-message="errors.title" />
        <TextInput
          name="content"
          label="content"
          v-model="content"
          :error-message="errors.content"
        />
        <FlexBox class="row buttons" gap="24">
          <TheButton kind="submit" @click="onSubmit">submit</TheButton>
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
