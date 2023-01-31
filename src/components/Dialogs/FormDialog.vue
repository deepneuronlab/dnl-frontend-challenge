<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container
          ><DynamicForm :formStructure="formStructure" :formData="selectedItem" @formRef="formRef"
        /></v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import { VForm } from '../Forms/types';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
    },
    selectedItem: {
      type: Object as PropType<Company>,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data(): {
    vFormReference: VForm | undefined;
  } {
    return {
      vFormReference: undefined,
    };
  },
  methods: {
    save() {
      if (this.$data.vFormReference.validate()) {
        this.$emit('save', this.selectedItem);
        this.$emit('close');
      }
    },
    formRef(vForm: VForm) {
      this.$data.vFormReference = vForm;
    },
    resetForm() {
      this.$data.vFormReference.reset();
      this.$data.vFormReference.resetValidation();
    },
  },
  watch: {
    isVisible: function(val) {
      if (val && this.$data.vFormReference) {
        this.$data.vFormReference.resetValidation();
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
