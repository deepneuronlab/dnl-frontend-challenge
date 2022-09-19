<template>
  <div>
    <v-text-field
      :value="inputValue"
      :rules="fieldRules"
      :label="formElement.label"
      @input="onChange"
      v-if="formElement.type === 'textField'"
    />
    <v-select
      :value="inputValue"
      :rules="fieldRules"
      :items="formElement.items"
      :label="formElement.label"
      @input="onChange"
      v-if="formElement.type === 'selectField'"
    />
    <div v-if="formElement.type === 'radioGroup'">
      <v-radio-group
        v-model="radios"
        :value="inputValue"
        :rules="fieldRules"
        :label="formElement.label"
      >
        <v-radio
          :key="item.value"
          :label="item.text"
          :value="item.value"
          v-for="item in formElement.items"
        />
      </v-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicInput',
  components: {},
  props: ['formElement', 'inputValue'],
  watch: {
    radios(value) {
      this.$emit('onInputChange', value);
    },
  },
  methods: {
    onChange(value: string) {
      this.$emit('onInputChange', value);
    },
  },
  data() {
    return {
      radios: null,
      fieldRules: [
        (value: string) => (this.formElement.required ? !!value || 'Field cannot be empty.' : true),
      ],
    };
  },
});
</script>
