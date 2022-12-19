<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <div class="dynamic-form--fields" v-for="element in formStructure" v-bind:key="element.type">
        <component :is="element.type" :element="element" :formData="formData"/>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue';
import { CompanyForm } from '@/store/companies-types';
import TextField from './TextField.vue';
import SelectField from './SelectField.vue';
import RadioGroup from './RadioGroup.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    TextField,
    SelectField,
    RadioGroup,
  },
  props: {
    formStructure: {
      type: Array as PropType<CompanyForm>,
      required: true,
    },
    formData: {
      type: Object
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
