<template>
  <v-form v-model="isFormValid" class="dynamic-form" ref="form">
    <v-container fluid>
      <template v-for="elm in formStructure">
        <v-text-field
          v-if="elm.type === 'textField'"
          :key="elm.key"
          v-model="formData[elm.key]"
          :label="elm.label"
          :placeholder="elm.placeholder"
          :required="elm.required"
          :rules="getValidationRules(elm)"
        ></v-text-field>
        <v-select
          v-if="elm.type === 'selectField'"
          :key="elm.key"
          v-model="formData[elm.key]"
          :items="elm.items"
          :label="elm.label"
          :placeholder="elm.placeholder"
          :required="elm.required"
          :rules="getValidationRules(elm)"
        ></v-select>
        <v-radio-group
          v-if="elm.type === 'radioGroup'"
          :key="elm.key"
          :label="elm.label"
          v-model="formData[elm.key]"
          :required="elm.required"
          :rules="getValidationRules(elm)"
        >
          <v-radio
            v-for="item in elm.items"
            :key="item.text"
            :label="item.text"
            :value="item.value"
          ></v-radio>
        </v-radio-group>
      </template>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { FormElementsWithValue } from '@/store/form-types';
import { Company } from '../../store/companies-types';

import Vue from 'vue';

const DynamicForm = Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: false,
      formData: {},
    };
  },

  watch: {
    // Re init formData when dialog opens
    isVisible(val) {
      if (val) {
        this.initFormData();
        (this.$refs.form as HTMLFormElement).resetValidation();
      }
    },
  },

  created() {
    this.initFormData();
  },

  methods: {
    initFormData() {
      const formData: Partial<Company> = {};

      this.formStructure.forEach(formElm => {
        const elm = formElm as FormElementsWithValue;

        formData[elm.key] = elm.value;
      });
      this.formData = formData;
    },

    getValidationRules(elm: FormElementsWithValue) {
      return elm.required ? [(v: string) => !!v || `${elm.label} is required`] : [];
    },
  },
});

export type DynamicFormRef = InstanceType<typeof DynamicForm>;
export default DynamicForm;
</script>

<style lang="scss" scoped></style>
