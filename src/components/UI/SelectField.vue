<template>
  <v-select :items="items" item-text="text" item-value="value" :label="label" return-object>
  </v-select>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormItem } from '@/store/form-types';
import { PropType } from 'vue';

export default Vue.extend({
  name: 'SelectField',
  props: {
    label: { type: String, required: false },
    items: { type: Array as PropType<Array<FormItem>>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
