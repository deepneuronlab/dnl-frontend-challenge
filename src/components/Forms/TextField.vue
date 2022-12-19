<template>
  <div class="text-field">
    <v-text-field v-model="formData.companyName" :label="element.label" required></v-text-field>
  </div>
</template>

<script lang="ts">
import { Company } from '@/store/companies-types';
import { FormTextField } from '@/store/form-types';
import Vue from 'vue';
import { PropType } from 'vue';

export default Vue.extend({
  name: 'TextField',
  components: {},
  props: {
    element: {
      type: Object as PropType<FormTextField>,
      required: true,
    },
    formData: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
