<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <ol>
        <li v-for="field of companyFields" v-bind:key="{ name: field.label }">
          <DynamicField :field="field" />
        </li>
      </ol>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import companiesState from '@/store/companies-state';
import DynamicField from './FormFields/DynamicField.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: { DynamicField },
  props: {},
  data() {
    return {
      isFormValid: false,
      companyFields: companiesState.companyForm,
    };
  },
});
</script>

<style lang="scss" scoped></style>
