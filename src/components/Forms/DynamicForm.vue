<template>
  <v-form v-model="isFormValid">
    <v-row>
      <v-col v-for="(formInputField, index) in formStructure" :key="index" cols="12">
        <!-- If the type is textField -->
        <v-text-field
          v-if="formInputField.type == 'textField'"
          v-model="formData[formInputField.key]"
          :label="formInputField.label"
          :placeholder="formInputField.placeholder"
        ></v-text-field>

        <!-- If the type is select -->
        <v-select
          v-if="formInputField.type == 'selectField'"
          v-model="formData[formInputField.key]"
          :items="formInputField.items"
          :label="formInputField.label"
          :placeholder="formInputField.placeholder"
        ></v-select>

        <!-- If the type is radio -->
        <v-radio-group
          v-if="formInputField.type == 'radioGroup'"
          v-model="formData[formInputField.key]"
          :label="formInputField.label"
        >
          <v-radio
            v-for="(option, optionIndex) in formInputField.items"
            :key="`option-${optionIndex}`"
            :label="option.text"
            :value="option.value"
          >
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormElements } from '@/types/form-types';
import { Company } from '@/types/companies-types';

export default Vue.extend({
  name: 'DynamicForm',
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
    },
    value: {
      type: null as any,
    },
  },
  watch: {
    value(newVal) {
      // Avoid mutating formData more than necessary
      if (this.formData !== newVal) this.formData = newVal;
    },
    formData(newFormDataValue) {
      if (this.isFormValid) this.$emit('input', newFormDataValue);
    },
  },
  data() {
    return {
      isFormValid: false,
      formData: {} as Company,
    };
  },
});
</script>
