<template>
  <v-form ref="vform" class="dynamic-form">
    <v-container fluid>
      <div
        v-for="(dynamicInputField, fieldIndex) in formStructure"
        :key="`dynamicField-${fieldIndex}`"
      >
        <v-text-field
          v-if="dynamicInputField.type == 'textField'"
          v-model="formData[dynamicInputField.key]"
          :label="dynamicInputField.label"
          :placeholder="dynamicInputField.placeholder"
          :rules="[rules.required(dynamicInputField.required)]"
          @focus="$event.target.select()"
          autofocus
        ></v-text-field>
        <v-radio-group
          v-if="dynamicInputField.type == 'radioGroup'"
          :label="dynamicInputField.label"
          v-model="formData[dynamicInputField.key]"
          :rules="[rules.required(dynamicInputField.required)]"
        >
          <v-radio
            v-for="(option, radioOptionIndex) in dynamicInputField.items"
            :key="`radioOption-${radioOptionIndex}`"
            :label="option.text"
            :value="option.value"
          >
          </v-radio>
        </v-radio-group>
        <v-select
          v-if="dynamicInputField.type == 'selectField'"
          v-model="formData[dynamicInputField.key]"
          :items="dynamicInputField.items"
          :label="dynamicInputField.label"
          :placeholder="dynamicInputField.placeholder"
          :rules="[rules.required(dynamicInputField.required)]"
        ></v-select>
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
    value: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
  watch: {
    value: {
      handler: function(newVal) {
        this.formData = newVal;
      },
      immediate: true,
    },
    formData: {
      handler(newFormData) {
        this.$emit('input', newFormData);
      },
      deep: true,
    },
  },
  data() {
    return {
      formData: {} as Company,
      rules: {
        required: (requiredConfig: boolean) => (value: string | number | null) => {
          if (requiredConfig) {
            return (!!value && requiredConfig) || 'This field is required';
          } else {
            return true;
          }
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
