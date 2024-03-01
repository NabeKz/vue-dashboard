<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { TextInput } from "@/components/parts/form"
import type { Announcement } from "@/views/home/repository"
import { useAnnouncementForm } from "@/views/home/use-announcement-form"

const emits = defineEmits<{ close: []; submit: [model: Announcement] }>()

const { title, content, errors, handleSubmit } = useAnnouncementForm()
const onClickSubmit = () => handleSubmit(form => emits("submit", form))
</script>

<template>
  <FlexBox class="column edit-modal">
    <header>
      <h1>add modal</h1>
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
          <TheButton kind="submit" @click="onClickSubmit">submit</TheButton>
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
