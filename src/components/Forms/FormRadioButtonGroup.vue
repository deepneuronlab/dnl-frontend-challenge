<template>
  <div class="d-flex align-center">
    <div class="mr-4">{{ formElement.label }} {{ formElement.required ? '*' : '' }}:</div>
    <v-radio-group
      :value="value"
      @change="$emit('onCompanyFieldUpdated', formElement.key, $event)"
      :rules="formElement.required ? required : []"
    >
      <v-radio
        v-for="item in formElement.items"
        :key="item.value"
        :label="item.text"
        :value="item.value"
      ></v-radio>
    </v-radio-group>
  </div>
</template>
<script lang="ts">
import { FormRadioButtonGroup } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'FormRadioButtonGroup',
  props: {
    value: {
      type: String,
    },
    formElement: {
      type: Object as PropType<FormRadioButtonGroup>,
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
