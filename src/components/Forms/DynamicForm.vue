<template>
  <v-form
    v-model="isFormValid"
    class="dynamic-form" 
    ref="form">
    <v-container fluid>
      <template v-for="field in formStructure">
        <template v-if="field.type === 'selectField'">
          <v-select
            :key="field.key"
            :items="field.items"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            :rules="createRules(field)"
            v-model="form[field.key]"
          ></v-select>
        </template>
        <template v-else-if="field.type === 'textField'">
          <v-text-field
            :key="field.key"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            :rules="createRules(field)"
            v-model="form[field.key]"
          ></v-text-field>
        </template>
        <template v-else-if="field.type === 'radioGroup'">
          <v-radio-group
            v-model="form[field.key]"
            :rules="createRules(field)"
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
import { validationMixin } from 'vuelidate';
import Vue from 'vue';

interface Data {
  valid: boolean;
}

interface Methods {
  validate: () => boolean;
  createRules: (v: FormElements) => ((v: unknown) => boolean)[],
}

interface Computed {}

interface Props {
  formStructure: FormElements[];
  form?: object;
}
export default Vue.extend<Data, Methods, Computed, Props>({
  mixins: [validationMixin],
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
      isFormValid: true,
    };
  },
  methods: {
    createRules(field: FormElements) {
      const rules = [];
      if (field.required) {
        rules.push((value: unknown) => !!value || `${field.label} Required.`,)
      }
      return rules;
    },
    validate() {
      this.$refs.form.validate();
      return this.isFormValid;
    },
    reset() {
      this.$refs.form.reset();
    }
  }
});
</script>

<style lang="scss" scoped></style>
