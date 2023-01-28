<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      isFormValid: {{isFormValid}}
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    originalCompany: {
      type: Object as PropType<Company>,
      required: false,
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },

  // mb we should rebuild it on watch?
  beforeMount(): void {
    console.log('before form dialog mount');
  },
});
</script>

<style lang="scss" scoped></style>
