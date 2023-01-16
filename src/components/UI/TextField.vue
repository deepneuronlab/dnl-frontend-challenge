<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :required="required"
    type="text"
    v-model="formData[inputKey]"
    clearable
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  props: {
    label: { type: String, required: false },
    placeholder: { type: String, required: false, default: 'Type here...' },
    value: { type: String, required: false },
    inputKey: { type: String, required: true },
    required: { type: Boolean, required: false },
    formData: { type: Object, required: true }
  },
});
</script>

<style lang="scss" scoped></style>
