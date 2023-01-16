<template>
  <v-radio-group
    :label="input.label"
    v-model="formData[input.key]"
    :required="input.required"
    :rules="error"
  >
    <v-radio
      v-for="item in input.items"
      :key="item.value"
      :label="item.text"
      :value="item.value"
    ></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormRadioButtonGroup } from '@/store/form-types';
import { CompanyArbitraryValues } from '@/store/companies-types';

export default Vue.extend({
  name: 'RadioGroup',
  props: {
    formData: { type: Object as PropType<CompanyArbitraryValues>, required: true },
    error: { type: Array as PropType<Array<Function>>, required: false, default: [] },
    input: { type: Object as PropType<FormRadioButtonGroup>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
