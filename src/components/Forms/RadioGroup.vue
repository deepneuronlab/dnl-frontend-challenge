<template>
  <div class="radio-group">
    <v-radio-group v-model="formData.language" :label="element.label">
      <v-radio v-for="n in element.items" :key="n.text" :label="n.text" :value="n.value"></v-radio>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { Company } from '@/store/companies-types';
import { FormRadioButtonGroup } from '@/store/form-types';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'RadioGroup',
  components: {},
  props: {
    element: {
      type: Object as PropType<FormRadioButtonGroup>,
      required: true,
    },
    formData: {
        type: Object as PropType<Company>,
        required: true,
    }
  },
});
</script>

<style lang="scss" scoped></style>
