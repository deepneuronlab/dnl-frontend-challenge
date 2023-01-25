<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <ul>
        <li v-for="field of formStructure" v-bind:key="field.key">
          <component
            v-bind:is="getFieldComponent(field)"
            :options="field.items"
            :items="field.items"
            :label="field.label"
            :name="field.key"
            :value="data[field.key]"
            @input="value => $emit('change', value, field.key)"
            @change="value => $emit('change', value, field.key)"
          ></component>
        </li>
      </ul>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { FormElements } from '@/store/form-types';
import Vue from 'vue';
import RadioGroup from './FormFields/RadioGroup.vue';

export default Vue.extend({
  name: 'DynamicForm',
  props: ['formStructure', 'data'],
  data() {
    return {
      isFormValid: false,
    };
  },
  methods: {
    getFieldComponent(field: FormElements) {
      switch (field.type) {
        case 'selectField':
          return 'v-select';
        case 'radioGroup':
          return RadioGroup;
        case 'textField':
          return 'v-text-field';
        default:
          return null;
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
