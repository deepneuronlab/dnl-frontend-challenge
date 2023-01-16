<template>
  <v-radio-group :label="label" v-model="formData[inputKey]" row>
    <v-radio
      v-for="item in items"
      :key="item.value"
      :label="item.text"
      :value="item.value"
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
    inputKey: { type: String, required: true },
    required: { type: Boolean, required: false },
    formData: { type: Object, required: true }
  },
});
</script>

<style lang="scss" scoped></style>
