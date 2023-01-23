<template>
  <div class="d-flex align-center">
    <div class="mr-4">{{ formElement.label }} {{ formElement.required ? '*' : '' }}:</div>
    <v-select
      :value="value"
      :items="formElement.items"
      item-text="text"
      item-value="value"
      :label="formElement.placeholder"
      @change="$emit('onCompanyFieldUpdated', formElement.key, $event)"
      :rules="formElement.required ? required : []"
    ></v-select>
  </div>
</template>
<script lang="ts">
import { FormSelect } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'FormSelect',
  props: {
    value: {
      type: String,
    },
    formElement: {
      type: Object as PropType<FormSelect>,
      required: true,
    },
  },
  data() {
    return {
      required: [(v: string) => !!v || `${this?.formElement.label} is required`],
    };
  },
});
</script>
