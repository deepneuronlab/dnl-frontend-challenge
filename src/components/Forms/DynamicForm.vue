<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <template v-for="field in formStructure">
        <template v-if="field.type === 'selectField'">
          <v-select
            :key="field.key"
            :items="field.items"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            v-model="form[field.key]"
          ></v-select>
        </template>
        <template v-else-if="field.type === 'textField'">
          <v-text-field
            :key="field.key"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            v-model="form[field.key]"
          ></v-text-field>
        </template>
        <template v-else-if="field.type === 'radioGroup'">
          <v-radio-group
            v-model="form[field.key]"
            :key="field.key">
            <v-radio
              v-for="radioItem in field.items"
              :key="field.key + radioItem.value"
              :label="radioItem.text"
              :value="radioItem.value"
            ></v-radio>
          </v-radio-group>
        </template>
      </template>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { FormElements } from '@/store/form-types';
import Vue from 'vue';

interface Data {
  isFormValid: boolean;
}

interface Methods {
  updateInternalValue: () => void;
  save: () => void;
}

interface Computed {}

interface Props {
  formStructure: FormElements[];
  form?: object;
}
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    form: {
      type: Object,
    },
  },
  model: {
      prop: 'form',
      event: 'change'
  },
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
