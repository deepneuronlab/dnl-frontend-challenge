<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <DynamicForm
            v-if="isVisible && valueInternal"
            :meta="formStructure"
            v-model="valueInternal"
            @isValid="valid => (canSubmit = valid)"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="blue darken-1"
          :disabled="!canSubmit"
          text
          @click="$emit('save', valueInternal)"
        >
          Save
        </v-btn>
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
  data: () => ({ canSubmit: false, valueInternal: null }),
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
    value: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    this.valueInternal = this.value || {};
    this.$watch('valueInternal', () => {
      this.$emit('input', this.valueInternal);
    });
  },
});
</script>

<style lang="scss" scoped></style>
