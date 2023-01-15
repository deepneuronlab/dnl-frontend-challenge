<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm :formStructure="formStructure" />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="saveForm()"> Save </v-btn>
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
  },
  data() {
    return {};
  },
  methods: {
    saveForm() {
      this.$store.dispatch('companies/saveForm').then(() => {
        this.$emit('close');
        // this.$store.commit('companies/clearForm');
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
