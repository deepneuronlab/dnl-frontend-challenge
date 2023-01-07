<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue'
import { Company } from '@/store/companies-types';
import { FormSelect } from '@/store/form-types';

export default Vue.extend({
  name: 'TextField',
  props: {
    model: {
      type: Object as PropType<Company>
    },
    inputType: {
      type: Object as PropType<FormSelect>,
    },
  }
});
</script>

<template>
  <v-expand-transition>
    <div>
      <v-select v-model="model.whatever" :label="inputType.label" :items="inputType.items"
        :required="inputType.required"></v-select>
    </div>
  </v-expand-transition>
</template>