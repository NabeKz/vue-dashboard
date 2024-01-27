<script setup lang="ts">
import { FlexBox } from "@/components/parts/box";
import { SelectBox, TextInput } from "@/components/parts/form";
import { useMyForm } from "./form";

const { email, item, handleSubmit, errors } = useMyForm()
const items = [
  { label: "a", value: "a" },
  { label: "b", value: "b" },
  { label: "c", value: "c" },
]
const onSubmit = handleSubmit(values => {
  console.debug(values)
})
</script>

<template>
  <FlexBox class="column">
    <h1>form-sample</h1>
    <form @submit.prevent @submit="console.debug($event.target)">
      {{ errors }}
      <TextInput label="メール" v-model="email" :error-message="errors.email" />
      <SelectBox :items="items" v-model="item" />
      <button type="button" @click="onSubmit">submit</button>
    </form>
  </FlexBox>
</template>