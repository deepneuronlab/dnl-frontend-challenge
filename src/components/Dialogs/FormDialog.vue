<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            ref="dform"
            v-model="computedFormValues"
            :form-fields="formStructure"
            @validate="updateFormValidity"
          ></DynamicForm>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()" :disabled="!isFormValid">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    formStructure: {
      type: Array,
      required: true,
    },
    formValues: {
      type: Object as PropType<any>,
      required: false,
      default: () => ({}),
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedFormValues: {
      get() {
        return Object.assign({}, this.formValues);
      },
      set(value) {
        this.formValues = value;
      },
    },
  },
  data() {
    return {
      mutatedFormValues: null,
      isFormValid: true,
    };
  },
  methods: {
    save() {
      // with object usually better to emit
      this.$emit('save', Object.assign({}, this.computedFormValues));
      this.$refs.dform.reset();
    },
    closeDialog() {
      this.$refs.dform.reset();
      this.$emit('close');
    },
    updateFormValidity(valid: boolean) {
      this.isFormValid = valid;
    },
  },
});
</script>

<style lang="scss" scoped></style>
