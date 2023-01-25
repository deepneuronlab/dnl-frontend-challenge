<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            @change="handleInputChange"
            :data="formState"
            :formStructure="formStructure"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="clearFormAndClose()"> Cancel </v-btn>
        <v-btn color="blue darken-1" type="submit" text @click="$emit('save', formState)">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { Company } from '@/store/companies-types';

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
    data: {
      type: Object,
    },
  },
  data() {
    return {
      formState: {} as Company,
    };
  },
  watch: {
    data: {
      handler(val) {
        this.formState = { ...val };
      },
    },
  },

  methods: {
    handleInputChange(value: string, key: string) {
      this.formState[key] = value;
    },
    clearFormAndClose() {
      this.formState = {} as Company;
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" scoped></style>
