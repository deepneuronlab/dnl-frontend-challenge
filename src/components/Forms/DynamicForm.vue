<template>
  <form class="dynamic-form" v-if="companyForm">
    <v-container fluid>

      isFormValid: {{!$v.$invalid}}<br>
      companyForm: {{companyForm}}
      <div v-for="formElement in formStructure" :key="formElement.key">
        <v-text-field
          v-if="formElement.type === FORM_FIELD_TYPE.TEXT"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          v-model="companyForm[formElement.key]"
          @input="$v[formElement.key].$touch()"
          @blur="$v[formElement.key].$touch()"
          :error-messages="getFieldErrors(formElement)"
        />
        <v-select
          v-else-if="formElement.type === FORM_FIELD_TYPE.SELECT"
          v-model="companyForm[formElement.key]"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          @input="$v[formElement.key].$touch()"
          @blur="$v[formElement.key].$touch()"
          :items="formElement.items"
          :error-messages="getFieldErrors(formElement)"
        />

      </div>

    </v-container>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Company } from '@/store/companies-types';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { FormElements } from '@/store/form-types';
import { FORM_FIELD_TYPE } from '@/store/types';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  mixins: [validationMixin],
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
    },
    originalCompany: {
      type: Object as PropType<Company>,
      required: false,
    },
  },
  data() {
    return {
      companyForm: null,
      FORM_FIELD_TYPE: FORM_FIELD_TYPE,
    };
  },
  validations() {
    console.log('validate');
    return buildValidators(this.formStructure);
  },

  // to rebuild the form state in case props changed
  watch: {
    combinedProps: {
      immediate: true,
      handler() {
        // we consider props are the freshest ones (todo: check this)
        this.$data.companyForm = buildFormState(this.formStructure, this.originalCompany);
        console.log('this.$data.companyForm: ', this.$data.companyForm);
      },
    },
    companyForm: {
      deep: true,
      handler(form): void {
        console.log('newForm: ', form);
        // todo: convert to a plain object from the form/reactive
        this.$emit('updateCompany', form, !this.$v.$invalid);
      },
    },
  },

  computed: {
    combinedProps() {
      return this.$props.formStructure && this.originalCompany;
    },
  },
  beforeMount(): void {
    console.log('before form dialog mount');
    console.log('formStructure: ', this.formStructure);
    console.log('$v: ', this.$v);

    // todo: build a from state from a structure
    // todo: transform currentCompany into form values if exists
    // this.$emit('updateCompany', {}, this.isFormValid);
  },

  methods: {
    // We intentionally don't limit input length, because there's no requirements about. In "real life" We would ask about db limits, at least.
    getFieldErrors(formElement: FormElements): string[] {
      if (!formElement || !this.$v[formElement.key].$dirty) {
        return [];
      }

      const errors: string[] = [];
      if (formElement.required && !this.$data.companyForm[formElement.key]) {
        errors.push('Required');
      }
      return errors;
    },
  },
});

// todo: use vuelidate typings, see https://github.com/vuelidate/vuelidate/issues/175
function buildValidators(formStructure: FormElements[]): any {
  const validations: any = {};
  if (!formStructure) {
    return validations;
  }

  formStructure.forEach((formElement: FormElements) => {
    validations[formElement.key] = {};
    if (formElement.required) {
      validations[formElement.key].required = required;
    }
  });

  return validations;
}

// note for devs - should we also have "valueType" field, "default value" etc? Or everything is string and empty string is default?
function buildFormState(formStructure: FormElements[], originalCompany?: Company): FormState {
  const formState: FormState = {};
  if (!formStructure) {
    return formState;
  }

  formStructure.forEach((formElement: FormElements) => {
    formState[formElement.key] = originalCompany ? originalCompany[formElement.key] : '';
  });
  console.log('formState: ' , formState);
  return formState;
}

interface DynamicFormState {
  companyForm: FormState | null;
}

interface FormState {
  [key: string]: unknown;
}
</script>

<style lang="scss" scoped></style>
