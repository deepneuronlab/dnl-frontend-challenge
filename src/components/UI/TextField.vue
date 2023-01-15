<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :value="value"
    type="text"
    clearable
    @input="$emit('updateFormValue', $event)"
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
  },
});
</script>

<style lang="scss" scoped></style>
