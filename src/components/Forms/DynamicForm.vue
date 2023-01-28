<template>
  <form class="dynamic-form" v-if="companyForm">
    <v-container fluid>

      isFormValid: {{!$v.$invalid}}<br>
      companyForm: {{companyForm}}
    </v-container>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Company } from '@/store/companies-types';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { FormElements } from '@/store/form-types';

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
        this.$data.companyForm = buildFormState(this.formStructure, this.originalCompany);
        console.log('this.$data.companyForm: ', this.$data.companyForm);
      },
    },
  },

  computed: {
    combinedProps() {
      return this.$props.formStructure && this.originalCompany;
    },
  },
  // mb we should rebuild it on watch?
  beforeMount(): void {
    console.log('before form dialog mount');
    console.log('formStructure: ', this.formStructure);
    console.log('$v: ', this.$v);

    // todo: build a from state from a structure
    // todo: transform currentCompany into form values if exists
    // this.$emit('updateCompany', {}, this.isFormValid);
  },

  methods: {
    rebuildForm(): void {
      // this.$data.companyForm = buildFormState(this.formStructure, this.originalCompany);
      // this.comp
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
  // companyForm: string;
}

interface FormState {
  [key: string]: unknown;
}
</script>

<style lang="scss" scoped></style>
