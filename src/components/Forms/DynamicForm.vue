<template>
  <v-form ref="dynamicForm" class="dynamic-form">
    <v-container fluid>
      <v-col cols="16" v-for="(formElement, index) in formStructure" :key="formElement.key">
        <v-text-field
          v-if="formElement.type === 'textField'"
          :autofocus="index === 0"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          @input="$emit('input', $event, formElement.key)"
          :rules="[rules.required(formElement.required)]"
          filled
        />

        <v-select
          v-else-if="formElement.type === 'selectField'"
          :autofocus="index === 0"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          :items="formElement.items"
          @input="$emit('input', $event, formElement.key)"
          :rules="[rules.required(formElement.required)]"
          filled
        ></v-select>

        <v-radio-group
          v-else-if="formElement.type === 'radioGroup'"
          :autofocus="index === 0"
          :label="formElement.label"
          :rules="[rules.required(formElement.required)]"
        >
          <v-radio
            v-for="radioItem in formElement.items"
            :key="radioItem.value"
            :label="radioItem.text"
            :value="radioItem.value"
            @change="$emit('input', radioItem.value, formElement.key)"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormElements } from '@/store/form-types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>, //to-fix
      required: true,
    },
  },
  data() {
    return {
      formValid: false,
      rules: {
        required: (isRequired: boolean) => (value: string | number | null) => {
          console.log(isRequired, value);
          if (isRequired) {
            return !!value || 'This field is required';
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
