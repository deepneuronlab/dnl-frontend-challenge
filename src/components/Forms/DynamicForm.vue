<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <template
        v-for="field in formStructure">
        <template v-if="field.type === 'selectField'">
          <v-select
            :key="field.key"
            :items="field.items"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
          ></v-select>
        </template>
        <template v-else-if="field.type === 'textField'">
          <v-text-field
            :key="field.key"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
          ></v-text-field>
        </template>
        <template v-else-if="field.type === 'radioGroup'">
          <v-radio-group :key="field.key">
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
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
