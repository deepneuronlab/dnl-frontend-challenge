<template>
  <v-radio-group :label="label" row>
    <v-radio
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :label="item.text"
      :checked="value === item.value"
      v-on:change="$emit('onChange', item.value)"
    ></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormItem } from '@/store/form-types';

export default Vue.extend({
  name: 'SelectField',
  props: {
    label: { type: String, required: false },
    items: { type: Array as PropType<Array<FormItem>>, required: true },
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
