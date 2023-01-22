<template>
  <v-form class="dynamic-form" v-model="isFormValid" ref="form">
    <v-container fluid>
      <div v-for="formElement in formStructure" :key="formElement.key">
        <template v-if="formElement.type === 'textField'">
          <v-text-field
            :label="formElement.label"
            :rules="formElement.required ? rules : []"
            :placeholder="formElement.placeholder"
            hide-details="auto"
            v-model="formElement.value"
            @change="changeHandler($event, formElement.key)"
            :required="formElement.required"
          />
        </template>
        <template v-else-if="formElement.type === 'selectField'">
          <v-select
            v-model="formElement.value"
            :label="formElement.label"
            :rules="formElement.required ? rules : []"
            :placeholder="formElement.placeholder"
            hide-details="auto"
            @change="changeHandler($event, formElement.key)"
            :items="formElement.items"
            :required="formElement.required"
          />
        </template>
        <template v-else-if="formElement.type === 'radioGroup'">
          <v-radio-group
            :mandatory="formElement.required"
            row
            v-model="formElement.value"
            @change="changeHandler($event, formElement.key)"
          >
            <template v-slot:label>
              <strong>{{ formElement.label }}:</strong>
            </template>
            <v-radio
              v-for="item in formElement.items"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            />
          </v-radio-group>
        </template>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormElements } from '@/store/form-types';
import DynamicFormPayload from '@/components/Forms/DynamicFormPayload';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array as () => FormElements[],
      default: () => [],
      required: true,
    },
    isValidByDefault: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFormValid: this.isValidByDefault,
      rules: [(value: string) => !!value || 'Required.'],
    };
  },
  mounted() {
    this.$emit('form-mounted', this.$refs.form);
  },
  methods: {
    changeHandler(value: string, key: string) {
      const payload: DynamicFormPayload = {
        data: null,
        valid: this.isFormValid,
      };
      const data = {} as Record<string, string>;
      data[key] = value;
      payload.data = data;
      this.$emit('data-change', payload);
    },
  },
});
</script>

<style lang="scss" scoped></style>
