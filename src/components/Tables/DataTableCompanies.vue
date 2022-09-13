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
              @clickAction="openDeleteDialog(item.companyId)"
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
    selectedCompanyId: null as string | unknown,
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
      await this.deleteCompany(this.selectedCompanyId);
      await this.$nextTick();
      this.resetSelectedCompanyId();
      this.closeDeleteDialog();
    },
    openDeleteDialog(companyId: string) {
      this.isDeleteDialogVisible = true;
      this.selectedCompanyId = companyId;
    },
    closeDeleteDialog() {
      this.isDeleteDialogVisible = false;
    },
    resetSelectedCompanyId() {
      this.selectedCompanyId = null;
    },
  },
});
</script>
