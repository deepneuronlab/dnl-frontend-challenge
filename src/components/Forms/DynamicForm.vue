<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <component
        v-for="el in meta"
        :key="el.key"
        :label="el.label"
        :placeholder="el.placeholder"
        :items="el.items"
        :rules="el.required ? [rules.required] : []"
        v-model="model[el.key]"
        :is="getTag(el.type)"
      >
        <template v-if="el.type === 'radioGroup'">
          <v-radio
            v-for="item in el.items"
            :label="item.text"
            :key="item.value"
            :value="item.value"
          />
        </template>
      </component>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { VTextField, VSelect, VRadioGroup, VRadio } from 'vuetify/lib';
import type { FormElementType, FormFieldBase } from '@/store/form-types';
import { CompanyFormSerialized } from '@/store/companies-types';

const TAG_MAPPING = {
  textField: 'v-text-field',
  selectField: 'v-select',
  radioGroup: 'v-radio-group',
};
export default Vue.extend({
  name: 'DynamicForm',
  components: { VTextField, VSelect, VRadioGroup, VRadio },
  props: {
    meta: Array,
    value: Object,
  },
  data() {
    return {
      isFormValid: false,
      model: {} as CompanyFormSerialized,
      rules: {
        required: (value: string) => !!value || 'Required'
      }
    };
  },
  mounted() {
    this.initModel();
    this.$watch(
      'model',
      () => {
        this.$emit('input', this.model);
        this.$emit('isValid', this.isValid(this.model))
      },
      { deep: true },
    );
  },
  methods: {
    getTag: (elementType: FormElementType) => TAG_MAPPING[elementType] || 'pre',
    initModel() {
      this.model = { ...this.value };
    },
    isValid (model: CompanyFormSerialized) {
      const fields = (this.meta || []) as FormFieldBase[];
      let valid = true;
      fields.forEach(({key, required}) => {
        if (!model[key] && required) {
          valid = false;
        }
      })
      return valid;
    }
  },
});
</script>

<style lang="scss" scoped></style>
