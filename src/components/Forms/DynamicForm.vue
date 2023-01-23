<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <component
        v-for="formElement in filteredFormStructure"
        :is="getComponentForFieldType(formElement.type)"
        :key="formElement.key"
        :value="companyData[formElement.key]"
        :formElement="formElement"
        @onCompanyFieldUpdated="updateCompanyField"
      ></component>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Company, CompanyForm } from '@/store/companies-types';
import Vue, { PropType } from 'vue';
import FormTextField from './FormTextField.vue';
import FormSelect from './FormSelect.vue';
import FormRadioButtonGroup from './FormRadioButtonGroup.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    FormRadioButtonGroup,
    FormSelect,
    FormTextField,
  },
  props: {
    formStructure: {
      type: Array as PropType<CompanyForm>,
      required: true,
    },
    companyData: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },
  computed: {
    filteredFormStructure() {
      return this.formStructure.filter(
        formElement => this.companyData[formElement.key] !== undefined,
      );
    },
  },
  methods: {
    updateCompanyField(key: string, value: string) {
      this.$emit('onCompanyFieldUpdated', key, value);
    },
    getComponentForFieldType(fieldType: string) {
      switch (fieldType) {
        case 'textField':
          return FormTextField;
        case 'selectField':
          return FormSelect;
        case 'radioGroup':
          return FormRadioButtonGroup;
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
