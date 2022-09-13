<template>
  <v-layout class="mt-4">
    <v-row dense>
      <v-col cols="12">
        <v-data-table :headers="allTableHeaders" :items="tableItems">
          <template v-slot:[`item.actions`]="{ item }">
            <BtnTableAction
              text="Edit"
              icon="mdi-pencil"
              :disabled="false"
              @clickAction="openEditDialog(item)"
            />
            <BtnTableAction
              text="Delete"
              icon="mdi-delete"
              :disabled="false"
              @clickAction="openDeleteDialog(item.companyId)"
            />
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <DeleteDialog
      :is-visible="isDeleteDialogVisible"
      @confirmDelete="onConfirmDeleteCompany"
      @close="closeDeleteDialog"
    />

    <FormDialog
      v-model="companyToEdit"
      :is-visible="isEditDialogVisible"
      is-editing
      title="Edit Company"
      @close="isEditDialogVisible = false"
    />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import BtnTableAction from '@/components/UI/BtnTableAction.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import { Company } from '@/types/companies-types';

export default Vue.extend({
  name: 'DataTableCompanies',
  components: { BtnTableAction, DeleteDialog, FormDialog },
  props: {
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableItems: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isDeleteDialogVisible: false,
    isEditDialogVisible: false,
    companyToDeleteId: null as string | unknown,
    companyToEdit: null as Company | unknown,
  }),

  computed: {
    allTableHeaders() {
      const tableHeadersWithActions = [
        ...this.tableHeaders,
        { text: 'Actions', value: 'actions', sortable: false },
      ];
      return tableHeadersWithActions;
    },
  },
  methods: {
    ...mapActions('companies', ['deleteCompany']),

    async onConfirmDeleteCompany() {
      this.deleteCompany(this.companyToDeleteId);
      await this.$nextTick();
      this.resetSelectedCompany();
      this.closeDeleteDialog();
    },
    openDeleteDialog(companyId: string) {
      this.isDeleteDialogVisible = true;
      this.companyToDeleteId = companyId;
    },
    openEditDialog(company: Company) {
      this.isEditDialogVisible = true;
      this.companyToEdit = company;
    },
    closeDeleteDialog() {
      this.isDeleteDialogVisible = false;
    },
    resetSelectedCompany() {
      this.companyToEdit = null;
      this.companyToDeleteId = null;
    },
  },
});
</script>
