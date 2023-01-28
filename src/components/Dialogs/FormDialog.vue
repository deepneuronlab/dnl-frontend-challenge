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
            :originalCompany="originalCompany"
            @updateCompany="onCompanyUpdate"
          />
        </v-container>
        <div>
          valid: {{valid}}<br>
          originalCompany: {{originalCompany}}<br>
          company: {{company}}<br>
        </div>
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
import { Company } from '@/store/companies-types';
import { FormElements } from '@/store/form-types';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
      required: true,
    },
    originalCompany: {
      type: Object as PropType<Company>,
      required: false,
    },
    // todo: there's a warning about avoiding prop mutation in child on "Esc" click (see https://stackoverflow.com/questions/66571662/avoid-mutating-a-prop-directly-error-in-vuetify-dialog-box)
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data(): FormDialogState {
    return {
      company: null,
      valid: false,
    };
  },
  methods: {
    onCompanyUpdate(company: Company, valid: boolean): void {
      console.log('onCompanyUpdate: ', company);
      console.log('valid: ', valid);
      this.company = company;
      this.valid = valid;
    },

    save(): void {
      if (!this.valid || !this.company) {
        console.log('not valid or no company');
        return;
      }

      this.$emit('save', this.company);
    }

  },
});

interface FormDialogState {
  company: Company | null;
  valid: boolean;
}
</script>

<style lang="scss" scoped></style>
