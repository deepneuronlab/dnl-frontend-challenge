<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            :formStructure="formStructure"
            v-model="this.internalValue"
            ref="dynamicForm" />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()" :disable="!formValid"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements } from '@/store/form-types';
import _ from 'lodash';

// tslint:disable-next-line
interface Data {
  internalValue: object | null;
  formValid: boolean,
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
      formValid: false,
    };
  },
  watch: {
    '$props.form'() {
      this.updateInternalValue();
    },
    isVisible(newValue) {
      if (!newValue) {
        this.$refs.dynamicForm.reset();
      }
    },
  },
  methods: {
    updateInternalValue(): void {
      this.internalValue = this.formStructure.reduce((acc: { [key: string]: string, }, item: FormElements) => {
        if (!Reflect.has(acc, item.key)) {
          acc[item.key] = '';
        }
        return acc;
      }, (_.cloneDeep(this.form || {}) as { [key: string]: string, }));
    },
    save() {
      const valid = this.$refs.dynamicForm.validate();
      if (valid) {
        this.$emit('save', _.cloneDeep(this.internalValue));
      }
    },
  },
  mounted() {
    this.updateInternalValue();
  },
});
</script>

<style lang="scss" scoped></style>
