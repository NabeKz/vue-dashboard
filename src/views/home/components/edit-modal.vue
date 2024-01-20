<script setup lang="ts">
import FlexBox from "@/components/parts/box/flex-box.vue";
import SmallButton from "@/components/parts/button/small-button.vue";
import TextInput from "@/components/parts/form/text-input.vue";
import { ref } from "vue";

type Props = {
  onSubmit: (model: Model) => void;
  onClose: () => void;
};
defineProps<Props>()
defineEmits<{ close: [], submit: [model: Model] }>()

type Model = {
  name: string;
  title: string;
};
const model = ref<Model>({ name: "", title: "" })
</script>

<template>
  <FlexBox column class="edit-modal gap-8">
    <header>
      <h1>edit modal</h1>
    </header>
    <form @submit.prevent>
      <FlexBox column class="gap-24">
        <TextInput label="name" v-model="model.name" :error-message="''" />
        <TextInput label="title" v-model="model.title" :error-message="''" />
        <FlexBox row class="buttons gap-24">
          <SmallButton type="submit" @click="$emit('submit', model)">submit</SmallButton>
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