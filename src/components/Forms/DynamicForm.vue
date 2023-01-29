<template>
  <form class="dynamic-form" v-if="companyForm">
    <v-container fluid>
      <div v-for="formElement in formStructure" :key="formElement.key">
        <v-text-field
          v-if="formElement.type === FORM_FIELD_TYPE.TEXT"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          v-model.trim="companyForm[formElement.key]"
          @input="$v.companyForm[formElement.key].$touch()"
          @blur="$v.companyForm[formElement.key].$touch()"
          :error-messages="getFieldErrors(formElement)"
        />
        <v-select
          v-else-if="formElement.type === FORM_FIELD_TYPE.SELECT"
          v-model="companyForm[formElement.key]"
          :label="formElement.label"
          :placeholder="formElement.placeholder"
          :items="formElement.items"
          @input="$v.companyForm[formElement.key].$touch()"
          @blur="$v.companyForm[formElement.key].$touch()"
          :error-messages="getFieldErrors(formElement)"
        />

        <v-radio-group
          v-else-if="formElement.type === FORM_FIELD_TYPE.RADIO"
          v-model="companyForm[formElement.key]"
          :mandatory="formElement.required"
          @input="$v.companyForm[formElement.key].$touch()"
          @blur="$v.companyForm[formElement.key].$touch()"
          :error-messages="getFieldErrors(formElement)"
        >
          <template v-slot:label>
            {{ formElement.label }}:
          </template>
          <v-radio
            v-for="item in formElement.items"
            :key="item.value"
            :label="item.text"
            :value="item.value"
          />
        </v-radio-group>
      </div>

    </v-container>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Company } from '@/store/companies-types';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { FormElements, CompanyFormState } from '@/store/form-types';
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
  data(): DynamicFormState {
    return {
      companyForm: null,
    };
  },
  validations() {
    return buildValidators(this.formStructure);
  },

  // to rebuild the form state in case props changed
  watch: {
    combinedProps: {
      immediate: true,
      handler() {
        // we consider props are the freshest ones (todo: check this)
        this.$data.companyForm = buildFormState(this.formStructure, this.originalCompany);
      },
    },
    companyForm: {
      deep: true,
      handler(form): void {
        // we are not going to mutate the form, but safer would be to emit a new object
        this.$emit('formUpdate', form, !this.$v.$invalid);
      },
    },
  },

  computed: {
    combinedProps() {
      return this.$props.formStructure && this.originalCompany;
    },
    FORM_FIELD_TYPE() {
      return FORM_FIELD_TYPE;
    },
  },
  methods: {
    // We intentionally don't limit input length, because there's no requirements about. In "real life" We would ask about db limits, at least.
    getFieldErrors(formElement: FormElements): string[] {
      // todo: make a method out of this condition?
      if (!formElement || !this.$data.companyForm || !this.$v.companyForm || !this.$v.companyForm[formElement.key]?.$dirty) {
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
  const validations: {companyForm: any} = {
    companyForm: {},
  };
  if (!formStructure) {
    return validations;
  }

  formStructure.forEach((formElement: FormElements) => {
    validations.companyForm[formElement.key] = {};
    if (formElement.required) {
      validations.companyForm[formElement.key].required = required;
    }
  });

  return validations;
}

// note for devs - should we also have "valueType" field, "default value" etc? Or everything is string and empty string is default?
function buildFormState(formStructure: FormElements[], originalCompany?: Company): CompanyFormState {
  const formState: CompanyFormState = {};
  if (!formStructure) {
    return formState;
  }

  formStructure.forEach((formElement: FormElements) => {
    formState[formElement.key] = originalCompany ? originalCompany[formElement.key] : '';
  });
  return formState;
}

interface DynamicFormState {
  companyForm: CompanyFormState | null;
}
</script>

<style lang="scss" scoped></style>
