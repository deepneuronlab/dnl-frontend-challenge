<template>
  <v-text-field
    :label="input.label"
    :placeholder="input.placeholder"
    type="text"
    :name="input.key"
    v-model="formData[input.key]"
    :required="input.required"
    :rules="error"
    clearable
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormTextField } from '@/store/form-types';
import { CompanyArbitraryValues } from '@/store/companies-types';

export default Vue.extend({
  name: 'TextField',
  props: {
    formData: { type: Object as PropType<CompanyArbitraryValues>, required: true },
    error: { type: Array as PropType<Array<Function>>, required: false, default: [] },
    input: { type: Object as PropType<FormTextField>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
