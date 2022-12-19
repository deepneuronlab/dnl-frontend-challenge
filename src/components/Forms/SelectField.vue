<template>
  <div class="select-field">
    <v-select
      v-model="formData[element.key]"
      :items="element.items"
      :label="element.label"
      data-vv-name="select"
      required
    ></v-select>
  </div>
</template>

<script lang="ts">
import { FormSelect } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'SelectField',
  components: {},
  props: {
    element: {
      type: Object as PropType<FormSelect>,
      required: true,
    },
    formData: {
        type: Object as PropType<Company>,
        required: true,
    }
  }
});
</script>

<style lang="scss" scoped></style>
