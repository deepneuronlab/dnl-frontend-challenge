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
              @clickAction="$emit('editItem', item)"
            />
            <BtnTableAction
              text="Delete"
              icon="mdi-delete"
              :disabled="false"
              @clickAction="openDeleteDialog(item)"
            />
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <DeleteDialog
      :is-visible="isDeleteDialogVisible"
      @confirm-delete="onConfirmDeleteCompany"
      @close="closeDeleteDialog"
    />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { Company } from '@/types/companies-types';
import BtnTableAction from '@/components/UI/BtnTableAction.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';

export default Vue.extend({
  name: 'DataTableCompanies',
  components: { BtnTableAction, DeleteDialog },
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
    selectedCompany: null as Company | unknown,
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
      await this.deleteCompany((this.selectedCompany as Company)?.companyId);
      await this.$nextTick();
      this.closeDeleteDialog();
    },
    openDeleteDialog(company: Company) {
      this.isDeleteDialogVisible = true;
      this.selectedCompany = company;
    },
    closeDeleteDialog() {
      this.isDeleteDialogVisible = false;
      this.selectedCompany = null;
    },
  },
});
</script>
