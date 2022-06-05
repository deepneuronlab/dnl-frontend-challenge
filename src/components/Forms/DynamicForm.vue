<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <div
        v-for="(dynamicInputField, fieldIndex) in formStructure"
        :key="`dynamicField-${fieldIndex}`"
      >
        <v-text-field
          v-if="dynamicInputField.type == 'textField'"
          :v-model="formData[dynamicInputField.key]"
          :label="dynamicInputField.label"
          :placeholder="dynamicInputField.placeholder"
          :required="dynamicInputField.required"
        ></v-text-field>
        <v-select
          v-if="dynamicInputField.type == 'selectField'"
          v-model="formData[dynamicInputField.key]"
          :items="dynamicInputField.items"
          :label="dynamicInputField.label"
          :placeholder="dynamicInputField.placeholder"
          :required="dynamicInputField.required"
        ></v-select>
        <v-radio-group
          v-if="dynamicInputField.type == 'radioGroup'"
          :label="dynamicInputField.label"
          v-model="formData[dynamicInputField.key]"
          :required="dynamicInputField.required"
        >
          <v-radio
            v-for="(option, radioOptionIndex) in dynamicInputField.items"
            :key="`radioOption-${radioOptionIndex}`"
            :label="option.text"
            :value="option.value"
          >
          </v-radio>
        </v-radio-group>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
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

<style lang="scss" scoped></style>
