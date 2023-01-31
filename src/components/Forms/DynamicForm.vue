<template>
  <v-form v-model="isFormValid" class="dynamic-form" ref="form">
    <v-container fluid>
      <v-row>
        <v-col v-for="field in formStructure" :key="field.key" sm="12">
          <!-- Text field -->
          <template v-if="field.type == 'textField'">
            <v-text-field
              v-model="formData[field.key]"
              :placeholder="field.placeholder"
              :label="field.label"
              :rules="field.required ? [rules.required] : []"
              required
            ></v-text-field>
          </template>
          <!-- RadioGroup field -->
          <template v-if="field.type == 'radioGroup'">
            <v-radio-group :label="field.label" v-model="formData[field.key]" row>
              <v-radio
                v-for="item in field.items"
                :key="item.value"
                :label="item.text"
                :value="item.value"
              ></v-radio>
            </v-radio-group>
          </template>
          <!-- Select field -->
          <template v-if="field.type == 'selectField'">
            <v-select
              v-model="formData[field.key]"
              :placeholder="field.placeholder"
              :label="field.label"
              :items="field.items"
              :rules="field.required ? [rules.required] : []"
              required
            ></v-select>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import { VForm } from './types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
    },
    formData: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: false,
      rules: {
        required: (value: unknown) => !!value || 'Required.',
      },
      year: '',
    };
  },
  mounted() {
    this.$emit('formRef', this.$refs.form as VForm);
  },
});
</script>

<style lang="scss" scoped></style>
