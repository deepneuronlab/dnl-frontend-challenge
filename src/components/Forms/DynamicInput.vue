<template>
  <div>
    <!-- If the type is textField -->
    <v-text-field
      v-if="element.type === 'textField'"
      v-model="inputValue"
      :rules="generateRulesArray(element)"
      :label="element.label"
      :placeholder="element.placeholder"
    ></v-text-field>

    <!-- If the type is select -->
    <v-select
      v-if="element.type === 'selectField'"
      v-model="inputValue"
      :rules="generateRulesArray(element)"
      :items="element.items"
      :label="element.label"
      :placeholder="element.placeholder"
    ></v-select>

    <!-- If the type is radio -->
    <v-radio-group
      v-if="element.type === 'radioGroup'"
      v-model="inputValue"
      :rules="generateRulesArray(element)"
      :label="element.label"
    >
      <v-radio
        v-for="(option, optionIndex) in element.items"
        :key="`option-${optionIndex}`"
        :label="option.text"
        :value="option.value"
      >
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import rules from '@/shared/validator/rules';
import { FormElements } from '@/types/form-types';

export default Vue.extend({
  name: 'DynamicInput',
  props: {
    element: {
      type: Object as PropType<FormElements>,
    },
    value: {
      type: [String, Number],
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.inputValue = newVal;
      },
      immediate: true,
    },
    inputValue(newInputValue) {
      this.$emit('input', newInputValue);
    },
  },
  data: () => ({
    inputValue: null,
  }),
  methods: {
    /**
     * @description This function gets the input structure and returns the only the rules specified in it,
     * It uses the rules object provided in the `shared/validator/rules.ts` file.
     * If we do not use lodash's once this function will run on every vue Tick.
     * @example
     * const structure = {
     * required: true,
     * isNumber: true,
     *  ...
     * }
     * const rules = generateRulesArray(structure)
     * // rules = [requied: Function, isNumber: Function]
     */
    generateRulesArray(companyInputStructure: FormElements) {
      return this.$_.once(() => {
        const companyInputStructureKeys = Object.keys(companyInputStructure);

        const specifiedRules = companyInputStructureKeys
          .filter((key: string) => {
            return (
              Object.prototype.hasOwnProperty.call(rules, key) &&
              // eslint-disable-next-line
              (companyInputStructure as any)[key] === true
            );
          })
          .map((rule: string) => {
            return rules[rule];
          });
        return specifiedRules;
      })();
    },
  },
});
</script>
