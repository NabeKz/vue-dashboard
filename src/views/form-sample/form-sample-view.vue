<script setup lang="ts">
import FlexBox from "@/components/parts/box/flex-box.vue";
import TextInput from "@/components/parts/form/text-input.vue"
import { useForm } from "@/views/_shared_/use-form";
import { schema, type Schema } from "./schema";

const { handleSubmit, values, errors, defineField } = useForm<Schema>(schema)
const [value] = defineField("email");
console.log("value: ", value)
const onSubmit = handleSubmit(cb => {
  console.debug(values)
  console.debug(cb)
})
</script>

<template>
  <FlexBox column>
    <h1>form-sample</h1>
    <form @submit.prevent @submit="onSubmit">
      <TextInput label="メール" v-model="value" :errorMessage="errors.email" />
      <button>submit</button>
    </form>
  </FlexBox>
</template>