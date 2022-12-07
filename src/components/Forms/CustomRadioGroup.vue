<template>
  <v-radio-group :rules="rules" v-model="value" @change="change">
    <template v-slot:label v-if="!!label">
      <div>{{ label }}</div>
    </template>
    <v-radio
      v-for="option in items"
      :key="option.value"
      :value="option.value"
      :label="option.text"
    ></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
// TODO: this component is requires a lot to be better,
// got couple of ideas to improve here:
// - it may extend VRadioGroup
// - it should adopt props for inner VRadio components
export default {
  name: 'CRadioGroup',
  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },
    rules: {
      type: Array,
      required: false,
    },
    label: String,
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    change(value: string) {
      this.$emit('input', value);
    },
  },
};
</script>
