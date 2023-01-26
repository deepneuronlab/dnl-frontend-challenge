<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            :form-structure="formStructure"
            :initial-data="initialData"
            @form-state-change="onFormStateChange"
            ref="form"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()" :disabled="saveDisabled"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

import DynamicForm from '@/components/Forms/DynamicForm.vue';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array,
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
    initialData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      saveDisabled: true,
    };
  },
  methods: {
    onFormStateChange(isValid: boolean) {
      this.saveDisabled = !isValid;
    },
    save() {
      // Not an ideal case and actually antipattern in reactive apps
      // worth to discuss options, e.g. handle save here and "pass" form values to the form itself
      // to have form data in the same place where it is saved
      if (this.$refs.form.save()) {
        this.$emit('close');
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
