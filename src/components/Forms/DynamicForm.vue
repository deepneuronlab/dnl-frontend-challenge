<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row v-for="input in formStructure" :key="input.key">
        <template v-if="input.type == 'textField'">
          <v-text-field
            type="text"
            v-model="formValues[input.key]"
            :label="input.label"
            :placeholder="input.placeholder"
            :rules="input.required ? [required] : []"
          />
        </template>
        <template v-if="input.type == 'selectField'">
          <v-select
            v-model="formValues[input.key]"
            :label="input.label"
            :placeholder="input.placeholder"
            :items="input.items"
            :item-text="'text'"
            :item-value="'value'"
          />
        </template>
        <template v-if="input.type == 'radioGroup'">
          <v-radio-group v-model="formValues[input.key]" :label="input.label">
            <v-radio
              v-for="item in input.items"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            />
          </v-radio-group>
        </template>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Company } from '@/store/companies-types';
import { FormElements } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formValues: { required: true, type: Object as PropType<Company> },
    formStructure: { required: true, type: Array as PropType<FormElements[]> },
  },
  data() {
    return {
      isFormValid: false,
      required: (value: unknown) => value !== null && value !== undefined && value !== '',
    };
  }
});
</script>
