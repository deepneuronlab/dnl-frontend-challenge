<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue'
import { Company } from '@/store/companies-types';
import { FormTextField } from '@/store/form-types';

export default Vue.extend({
  name: 'TextField',
  props: {
    model: {
      type: Object as PropType<Company>
    },
    inputType: {
      type: Object as PropType<FormTextField>,
    },
  }
});
</script>

<template>
  <v-expand-transition>
    <div>
      <v-text-field v-model="model[inputType.key]" :label="inputType.label" :required="inputType.required"></v-text-field>
    </div>
  </v-expand-transition>
</template>