<script setup lang="ts">
import FlexBox from "@/components/parts/box/flex-box.vue";
import SmallButton from "@/components/parts/button/small-button.vue";
import TextInput from "@/components/parts/form/text-input.vue";
import { useAnnouncementForm } from "../../use-announcement-form";
import type { Announcement } from "../../repository";

const emits = defineEmits<{ close: [], submit: [model: Announcement] }>()

const { title, content, errors, handleSubmit } = useAnnouncementForm()
const onClickSubmit = () => handleSubmit(form => emits("submit", form))
</script>

<template>
  <FlexBox column class="edit-modal gap-8">
    <header>
      <h1>add modal</h1>
    </header>
    <form @submit.prevent>
      <FlexBox column class="gap-24">
        <text-input label="title" v-model="title" :error-message="errors.title" />
        <text-input label="content" v-model="content" :error-message="errors.content" />
        <FlexBox row class="buttons gap-24">
          <SmallButton type="submit" @click="onClickSubmit">submit</SmallButton>
          <SmallButton type="submit" @click="$emit('close')">close</SmallButton>
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