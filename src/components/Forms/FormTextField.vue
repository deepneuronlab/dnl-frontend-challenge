<template>
  <div class="d-flex align-center">
    <div class="mr-4">{{ formElement.label }}:</div>
    <v-text-field
      :label="formElement.placeholder"
      :value="value"
      @input="$emit('onCompanyFieldUpdated', formElement.key, $event)"
    ></v-text-field>
  </div>
</template>
<script lang="ts">
import { FormTextField } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'FormTextField',
  props: {
    formElement: {
      type: Object as PropType<FormTextField>,
      required: true,
    },
    value: {
      type: String,
    },
  },
});
</script>
