<template>
  <v-radio-group
    :label="input.label"
    :required="input.required"
    :rules="error"
    :value="input.value"
  >
    <v-radio
      v-for="item in input.items"
      :key="item.value"
      :label="item.text"
      :value="item.value"
      @change="$emit('onChange', { newValue: item.value, key: input.key })"
    ></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormRadioButtonGroup } from '@/store/form-types';

export default Vue.extend({
  name: 'RadioGroup',
  props: {
    error: { type: Array as PropType<Array<Function>>, required: false, default: [] },
    input: { type: Object as PropType<FormRadioButtonGroup>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
