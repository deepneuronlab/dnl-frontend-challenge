<template>
  <v-dialog v-model="isVisible" @click:outside="close" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            :form-structure="formStructure"
            @data-change="dataChangeHandler"
            @form-mounted="formMountedHandler"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements, FormWithReset } from '@/store/form-types';
import DynamicFormPayload from '../Forms/DynamicFormPayload';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array as () => FormElements[],
      default: () => [],
      required: true,
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
  data() {
    return {
      isFormValid: true,
      formData: {},
      form: {} as FormWithReset,
    };
  },
  methods: {
    dataChangeHandler(payload: DynamicFormPayload) {
      this.formData = {
        ...this.formData,
        ...payload.data,
      };
      this.isFormValid = payload.valid;
    },
    resetLocalState() {
      this.formData = {};
      this.isFormValid = false;
    },
    formMountedHandler(payload: FormWithReset) {
      this.form = payload;
    },
    save() {
      if (Object.keys(this.formData).length !== 0 && this.isFormValid) {
        this.$emit('save', { ...this.formData });
        this.form.reset();
        this.resetLocalState();
      }
    },
    close() {
      this.$emit('close');
      this.form.reset();
      this.resetLocalState();
    },
  },
});
</script>

<style lang="scss" scoped></style>
