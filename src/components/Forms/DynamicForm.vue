<template>
  <v-form :value="isFormValid" ref="dynamicForm" @input="onFormInput">
    <v-row>
      <v-col v-for="(formInputField, index) in formStructure" :key="index" cols="12">
        <DynamicInput v-model="formValue[formInputField.key]" :element="formInputField" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormElements } from '@/types/form-types';
import { Company } from '@/types/companies-types';
import DynamicInput from './DynamicInput.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: { DynamicInput },
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
    },
    value: {
      type: Object as PropType<Company>,
      required: false,
    },
  },
  watch: {
    value: {
      handler(newModelValue) {
        this.formValue = newModelValue;
        if (this.$refs.dynamicForm)
          (this.$refs.dynamicForm as Vue & { validate: () => boolean }).validate();
      },
      immediate: true,
    },
    formValue(newFormValueValue) {
      this.$emit('input', newFormValueValue);
    },
  },
  data() {
    return {
      isFormValid: false,
      formValue: {} as Company,
    };
  },
  methods: {
    onFormInput(valid: boolean) {
      this.$emit('validationChange', valid);
    },
  },
});
</script>
