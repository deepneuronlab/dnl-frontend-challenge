<template>
  <v-form ref="form" v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <div v-for="field in fields" :key="`form-field-${field.key}`">
        <component
          :is="field.vuetifyComponent"
          @input="val => setFormFieldValue(field.key, val)"
          :value="getFormFieldValue(field.key)"
          v-bind="field.vuetifyProps"
        />
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import CRadioGroup from './CustomRadioGroup.vue';

function requireField(message = 'Field is Required'): Function {
  return (value: any) => !!value || message;
}

/**
 * This method resolves mapped dynamic form type to
 * specific Vuetify component
 * @param type: DNL Form Attribute Type
 */
// TODO: extend to adopt wider input Components
// TODO: move this to another file for clean component file code
// TODO: typecheck parameter if included in possible allowed set of attribute names
function getMappedVuetifyComponent(type: string): string {
  switch (type) {
    case 'selectField':
      return 'v-select';
    case 'radioGroup':
      return 'c-radio-group'; // that is a custom made to utilize radio groups
    default:
    case 'textField':
      return 'v-text-field';
  }
}

export default Vue.extend({
  name: 'DynamicForm',
  components: { CRadioGroup },
  props: {
    value: {
      type: Object as PropType<any>,
    },
    formFields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: true,
      validations: {
        required: requireField(),
      },
    };
  },
  computed: {
    _formData: {
      set(value: any) {
        this.$emit('input', value);
      },
      get(): any {
        return this.value || {}; // default _data to {} in case component value is not set
      },
    },
    fields() {
      return this.formFields.map((field: any) => {
        const fieldOpts = {
          key: field.key,
          label: field.label,
          placeholder: field.placeholder,
          vuetifyComponent: getMappedVuetifyComponent(field.type),
          vuetifyProps: {
            label: field.label,
            placeholder: field.placeholder,
            items: field.items,
          },
        };

        // adapting more props for multi-answer input fields
        if (field.items) {
          fieldOpts.vuetifyProps['items'] = field.items;
        }
        //TODO: poor implementation :(, better use vuelidate
        if (field.required) {
          fieldOpts.vuetifyProps = Object.assign(fieldOpts.vuetifyProps, {
            rules: [requireField()],
          });
        }

        return fieldOpts;
      });
    },
  },
  methods: {
    setFormFieldValue(field: string, value: any) {
      this.$set(this._formData, field, value);
    },
    getFormFieldValue(field: string){
      return this._formData[field];
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  watch: {
    isFormValid(val) {
      this.$emit('validate', val);
    }
  }
});
</script>

<style lang="scss" scoped></style>
