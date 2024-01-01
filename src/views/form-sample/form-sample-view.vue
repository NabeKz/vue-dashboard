<script setup lang="ts">
import FlexBox from "@/components/parts/box/flex-box.vue";
import TextInput from "@/components/parts/form/text-input.vue";
import { useCustomForm } from "@/views/_shared_/use-custom-form";
import { schema } from "./schema";

const { handleSubmit, defineField, errors } = useCustomForm(schema)
const [email] = defineField("email")
const onSubmit = handleSubmit(values => {
  console.debug(values)
})
</script>

<template>
  <FlexBox column>
    <h1>form-sample</h1>
    <form @submit.prevent @submit="onSubmit">
      <TextInput label="メール" v-model="email" :errorMessage="errors.email" />
      <button>submit</button>
    </form>
  </FlexBox>
</template>