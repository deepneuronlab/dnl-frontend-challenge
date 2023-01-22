<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="addCompanyHandler" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="deleteItemHandler"
        @editItem="editItemHandler"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialogVisible()"
        @save="saveNewCompanyHandler"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isEditCompanyDialogVisible = false"
        @save="saveEditedCompanyHandler"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @cancel="deleteCancelHandler"
        @delete="deleteConfirmHandler"
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
import { mapGetters, mapActions } from 'vuex';
import { Company, NewCompanyFormPayload } from '@/store/companies-types';
import makeCompany from '@/utils/make-company';
import makeUpdatedCompany from '@/utils/make-updated-company';
import getFilledInCompanyForm from '@/utils/get-filled-in-company-form';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: () => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    formStructure: [],
    idOfSelectedCompany: '',
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      companyForm: 'companies/companyForm',
      getCompanyById: 'companies/companyById',
    }),
  },
  methods: {
    ...mapActions({
      deleteCompany: 'companies/delete',
      addCompany: 'companies/add',
      updateCompany: 'companies/update',
    }),
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
      this.formStructure = [];
    },
    deleteItemHandler(item: Company) {
      this.idOfSelectedCompany = item.companyId;
      this.isDeleteDialogVisible = true;
    },
    editItemHandler(item: Company) {
      const companyToEdit = this.getCompanyById(item.companyId);
      const filledInCompanyForm = getFilledInCompanyForm(this.companyForm, companyToEdit);
      this.idOfSelectedCompany = item.companyId;
      this.formStructure = filledInCompanyForm as never[];
      this.isEditCompanyDialogVisible = true;
    },
    saveEditedCompanyHandler(payload: NewCompanyFormPayload) {
      const companyBeforeUpdate = this.getCompanyById(this.idOfSelectedCompany);
      const updatedCompany = makeUpdatedCompany(payload, companyBeforeUpdate);
      this.updateCompany(updatedCompany);
      this.isEditCompanyDialogVisible = false;
      this.idOfSelectedCompany = '';
    },
    addCompanyHandler() {
      this.isAddCompanyDialogVisible = true;
      this.formStructure = this.companyForm;
    },
    saveNewCompanyHandler(payload: NewCompanyFormPayload) {
      const newCompany = makeCompany(payload);
      this.addCompany(newCompany);
      this.isAddCompanyDialogVisible = false;
    },
    deleteConfirmHandler() {
      this.deleteCompany(this.idOfSelectedCompany);
      this.isDeleteDialogVisible = false;
      this.idOfSelectedCompany = '';
    },
    deleteCancelHandler() {
      this.isDeleteDialogVisible = false;
      this.idOfSelectedCompany = '';
    },
  },
});
</script>

<style lang="scss" scoped></style>
