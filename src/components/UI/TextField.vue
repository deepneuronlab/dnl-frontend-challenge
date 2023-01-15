<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :value="value"
    :required="required"
    type="text"
    clearable
    @input="$emit('onChange', $event)"
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
    required: { type: Boolean, required: false },
  },
});
</script>

<style lang="scss" scoped></style>
