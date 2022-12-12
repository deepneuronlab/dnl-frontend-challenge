<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm :formStructure="formStructure" v-model="this.internalValue" />
        </v-container>
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
import Vue from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements } from '@/store/form-types';

// tslint:disable-next-line
interface Data {
  internalValue: object | null;
}

// tslint:disable-next-line
interface Methods {
  updateInternalValue: () => void;
  save: () => void;
}

// tslint:disable-next-line
interface Computed {}
// tslint:disable-next-line
interface Props {
  formStructure: FormElements[];
  isVisible: boolean;
  title: string;
  form?: object;
}

export default Vue.extend<Data, Methods, Computed, Props>({
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
    form: {
      type: Object,
    },
  },
  data() {
    return {
      internalValue: null,
    };
  },
  watch: {
    '$props.form'() {
      this.updateInternalValue();
    },
  },
  methods: {
    updateInternalValue(): void {
      if (this.form !== undefined) {
        this.internalValue = this.form;
      } else {
        this.internalValue = this.formStructure.reduce((acc: { [key: string]: string, }, item: FormElements) => {
          acc[item.key] = '';
          return acc;
        }, {});
      }
    },
    save() {
      this.$emit('save', this.internalValue);
    },
  },
  mounted() {
    this.updateInternalValue();
  },
});
</script>

<style lang="scss" scoped></style>
