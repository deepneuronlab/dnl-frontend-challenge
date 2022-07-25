<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="isAddCompanyDialogVisible = true" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="handleDeleteButtonClick"
        @editItem="handleUpdateButtonClick"
      />
      <FormDialog
        v-if="companyForm.length > 0"
        title="Add Company"
        v-model="companyToAdd"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="companyForm"
        @close="isAddCompanyDialogVisible = false"
        @save="handleAddDialogSaveClick()"
        ref="addCompanyFormDialog"
      />
      <FormDialog
        v-if="companyToUpdate && companyForm.length > 0"
        title="Edit Company"
        v-model="companyToUpdate"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="companyForm"
        @close="isEditCompanyDialogVisible = false"
        @save="handleUpdateDialogSaveClick()"
        ref="updateCompanyFormDialog"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="handleDeleteConfirm"
      />
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import { mapActions, mapGetters } from 'vuex';
import { Company } from '@/store/companies-types';
import { IVForm } from '@/types/vform';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },

  data: () => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    companyToAdd: {},
    companyToDelete: null as null | Company,
    companyToUpdate: null as null | Company,
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      companyForm: 'companies/companyForm',
    }),
  },
  methods: {
    ...mapActions({
      addCompany: 'companies/addCompany',
      deleteCompany: 'companies/deleteCompany',
      updateCompany: 'companies/updateCompany',
    }),
    clearAddCompanyForm() {
      this.companyToAdd = {};
    },
    clearUpdateCompanyForm() {
      this.companyToUpdate = null;
    },
    handleAddDialogSaveClick() {
      if (
        (((this.$refs.addCompanyFormDialog as Vue).$refs.dynamicForm as Vue).$refs.vForm as Vue &
          IVForm).validate()
      ) {
        this.addCompany(this.companyToAdd);
        this.clearAddCompanyForm();
        this.isAddCompanyDialogVisible = false;
      }
    },
    handleUpdateDialogSaveClick() {
      if (
        (((this.$refs.updateCompanyFormDialog as Vue).$refs.dynamicForm as Vue).$refs.vForm as Vue &
          IVForm).validate()
      ) {
        this.updateCompany(this.companyToUpdate);
        this.clearUpdateCompanyForm();
        this.isEditCompanyDialogVisible = false;
      }
    },
    handleDeleteButtonClick(company: Company) {
      this.isDeleteDialogVisible = true;
      this.setCompanyToDelete(JSON.parse(JSON.stringify(company))); // deep clone company
    },
    handleUpdateButtonClick(company: Company) {
      this.isEditCompanyDialogVisible = true;
      this.companyToUpdate = JSON.parse(JSON.stringify(company)); // deep clone company
    },
    handleDeleteConfirm() {
      this.deleteCompany(this.companyToDelete);
      this.isDeleteDialogVisible = false;
    },
    setCompanyToDelete(company: Company) {
      this.companyToDelete = company;
    },
  },
});
</script>

<style lang="scss" scoped></style>
