<template>
  <v-form ref="form" class="dynamic-form">
    <v-container fluid>
      <div v-for='(element, index) in formStructure' :key='`field-${index}`'>
        <v-text-field
        v-if="element.type == 'textField'"
        :label='element.label'
        :placeholder='element.placeholder'
        :rules="[rules.required(element.required)]"
        v-model='value[element.key]'
        autofocus
        >
        </v-text-field>

        <v-select
          v-if="element.type == 'selectField'"
          :label='element.label'
          :items='element.items'
          :placeholder='element.placeholder'
          v-model='value[element.key]'
          :rules="[rules.required(element.required)]"
        >
        </v-select>

        <v-radio-group
          v-if="element.type =='radioGroup'"
          :label='element.label'
          :items='element.items'
          :rules="[rules.required(element.required)]"
          v-model='value[element.key]'
        >
          <v-radio
          v-for='(radioGroupItem,index) in element.items'
          :key='`radioGroupItem-${index}`'
          :label='radioGroupItem.text'
          :value='radioGroupItem.value'
          :rules="[rules.required(element.required)]"
          ></v-radio>
        </v-radio-group>
      </div>
    </v-container>

  </v-form>
</template>

<script lang="ts">
import { Company } from '@/store/companies-types';
import { FormElements } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true
    },
    value: {
      type: Object as PropType<Company>,
      required: true,
    }
  },
  data() {
    return {
      rules: {
        required: (fieldIsRequired: boolean) => (value: string | number ) => {
          if (fieldIsRequired) {
            return !!value || 'This field is required';
          } else {
            return true;
          }
        }
      }
    };
  },
});
</script>

<style lang="scss" scoped></style>
