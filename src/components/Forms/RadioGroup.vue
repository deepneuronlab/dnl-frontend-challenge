<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue'
import { Company } from '@/store/companies-types';
import { FormRadioButtonGroup } from '@/store/form-types';

export default Vue.extend({
  name: 'RadioGroup',
  props: {
    model: {
      type: Object as PropType<Company>
    },
    inputType: {
      type: Object as PropType<FormRadioButtonGroup>,
    },
  },
  data: () => ({
      radioRules: [
        (v: unknown)   => !!v || 'Language is required',
      ]
    }),
});
</script>

<template>
  <v-expand-transition>
    <v-container class="px-0" fluid>
      <v-radio-group v-model="model[inputType.key]" :label="inputType.label" :rules="radioRules" :required="inputType.required" row>
        <v-radio v-for="langItem in inputType.items" :key="langItem.value" :label="langItem.text" :value="langItem.value" />
      </v-radio-group>
    </v-container>
  </v-expand-transition>
</template>