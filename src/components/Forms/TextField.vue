<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue'
import {Company} from '@/store/companies-types';
import {FormTextField} from '@/store/form-types';

export default Vue.extend({
  name: 'TextField',
  props: {
    model: {
        type: Object as PropType<Company>
    },
    inpuType: {
      type: Object as PropType<FormTextField>,
    },
  }
});
</script>

<template>
      <v-expand-transition>
          <div>
              <v-text-field v-model="model.companyName" :label="inpuType.label" :required="inpuType.required"></v-text-field>
          </div>
      </v-expand-transition>
</template>