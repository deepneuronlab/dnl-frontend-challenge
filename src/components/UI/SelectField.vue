<template>
  <v-select
    :items="input.items"
    item-text="text"
    item-value="value"
    :label="input.label"
    :required="input.required"
    :rules="error"
    return-object
    v-model="formData[input.key]"
  >
  </v-select>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormSelect } from '@/store/form-types';
import { CompanyArbitraryValues } from '@/store/companies-types';

export default Vue.extend({
  name: 'SelectField',
  props: {
    formData: { type: Object as PropType<CompanyArbitraryValues>, required: true },
    error: { type: Array as PropType<Array<Function>>, required: false, default: [] },
    input: { type: Object as PropType<FormSelect>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
