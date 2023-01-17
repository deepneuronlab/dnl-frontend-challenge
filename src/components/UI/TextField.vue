<template>
  <v-text-field
    v-if="input.type === 'textField'"
    :label="input.label"
    :placeholder="input.placeholder"
    type="text"
    :name="input.key"
    @input="$emit('onChange', { newValue: $event, key: input.key })"
    :value="input.value"
    :required="input.required"
    clearable
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormTextField } from '@/store/form-types';

export default Vue.extend({
  name: 'TextField',
  props: {
    error: { type: Array as PropType<Array<Function>>, required: false, default: [] },
    input: { type: Object as PropType<FormTextField>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
