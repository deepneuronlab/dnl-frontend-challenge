<template>
  <v-radio-group :label="label" row>
    <v-radio
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :label="item.text"
      v-on:change="$emit('updateFormValue', item.value)"
    ></v-radio>
  </v-radio-group>
</template>

<!-- 
      :checked="radioChecked === item.value" -->

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormItem } from '@/store/form-types';
// import { mapState } from 'vuex';
// import { CompanyForm } from '@/store/companies-types';
// import { BaseState } from '@/store/types';

export default Vue.extend({
  name: 'SelectField',
  props: {
    label: { type: String, required: false },
    items: { type: Array as PropType<Array<FormItem>>, required: true },
    uniqueKey: { type: String, required: true },
  },
  computed: {
    // ...mapState<BaseState>({
    //   radioChecked: function(state: BaseState): string {
    //     const item: FormElements | undefined = (state.companies.companyForm as CompanyForm)?.find(
    //       (formElement: FormElements) => formElement.key === this.uniqueKey,
    //     );
    //     console.log(state);
    //     return (item as FormRadioButtonGroup)?.value ?? '';
    //   },
    // }),
  },
});
</script>

<style lang="scss" scoped></style>
