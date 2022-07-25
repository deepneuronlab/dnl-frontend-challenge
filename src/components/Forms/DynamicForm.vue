<template>
  <v-form ref="vForm" class="dynamic-form">
    <v-container fluid gi>
      <v-row dense no-gutters>
        <v-col cols="12" v-for="(formElement, index) in formElements" :key="formElement.key">
          <v-text-field
            :autofocus="index === 0"
            v-if="formElement.type === 'textField'"
            :label="formElement.label"
            :placeholder="formElement.placeholder"
            :rules="[validator.required(formElement.required)]"
            v-model="value[formElement.key]"
            filled
          />

          <v-select
            :autofocus="index === 0"
            v-else-if="formElement.type === 'selectField'"
            :label="formElement.label"
            :placeholder="formElement.placeholder"
            :rules="[validator.required(formElement.required)]"
            :items="formElement.items"
            v-model="value[formElement.key]"
            filled
          ></v-select>

          <v-radio-group
            :autofocus="index === 0"
            v-else-if="formElement.type === 'radioGroup'"
            :label="formElement.label"
            :placeholder="formElement.placeholder"
            :rules="[validator.required(formElement.required)]"
            v-model="value[formElement.key]"
          >
            <v-radio
              v-for="radioItem in formElement.items"
              :key="radioItem.value"
              :label="radioItem.text"
              :value="radioItem.value"
              :rules="[validator.required(formElement.required)]"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import validator from '@/utils/validationUtils';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    value: {
      required: true,
      type: Object as PropType<Company>,
    },
    formElements: {
      required: true,
      type: Array as PropType<FormElements[]>,
    },
  },
  data() {
    return {
      validator,
    };
  },
});
</script>

<style lang="scss" scoped></style>
