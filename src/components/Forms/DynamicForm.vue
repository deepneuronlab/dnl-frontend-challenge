<template>
  <v-form ref="form" class="dynamic-form">
    <v-container fluid>
      <div v-for="(element, index) in formStructure" :key="`field-${index}`">
        <component
          :is="components[element.type]"
          :label="element.label"
          :items="element.items"
          :placeholder="element.placeholder"
          :rules="[rules.required(element.required)]"
          v-model="value[element.key]"
        >
          <component
            :is="handleNestedComponents(element.type)"
            v-for="(radioGroupItem, index) in element.items"
            :key="`radioGroupItem-${index}`"
            :label="radioGroupItem.text"
            :value="radioGroupItem.value"
            :rules="[rules.required(element.required)]"
          ></component>
        </component>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Company } from '@/store/companies-types';
import { FormElements } from '@/store/form-types';
import { VTextField, VRadioGroup, VSelect, VRadio } from 'vuetify/lib';
import Vue, { PropType } from 'vue';

interface Components {
  [key: string]: string;
}

export default Vue.extend({
  name: 'DynamicForm',
  components: { VTextField, VRadioGroup, VSelect, VRadio },
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
  data() {
    return {
      components: {
        textField: 'v-text-field',
        selectField: 'v-select',
        radioGroup: 'v-radio-group',
      } as Components,
      nestedComponents: {
        radioGroup: 'v-radio',
      } as Components,
      rules: {
        required: (fieldIsRequired: boolean) => (value: string | number) => {
          if (fieldIsRequired) {
            return !!value || 'This field is required';
          } else {
            return true;
          }
        },
      },
    };
  },
  methods: {
    handleNestedComponents(type: string) {
      for (const prop in this.nestedComponents) {
        if (prop === type) {
          return this.nestedComponents[prop];
        } else {
          return;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
