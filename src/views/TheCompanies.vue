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
        @showDeleteDialog="showDeleteDialog"
        @showEditDialog="showEditDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialogVisible()"
        @onSave="createCompany"
        :formData="formData"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeEditCompanyDialogVisible()"
        @onSave="updateCompany"
        :formData="formData"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @delete="deleteCompany"
        @close="isDeleteDialogVisible = false"
      />
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import { Company, CompanyArbitraryValues } from '@/store/companies-types';

declare interface BaseComponentData {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  selectedCompanyId: string | null;
  formData: CompanyArbitraryValues;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): BaseComponentData => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    selectedCompanyId: null,
    formData: {}
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  created(){
    this.formStructure?.forEach((v: string) => {
      this.formData[v] = ''
    })
  },
  methods: {
    clearForm(){
      this.formData = Object.assign({});
    },
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
      this.clearForm();
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
      this.formData = Object.assign({});
    },
    showDeleteDialog(companyId: string) {
      this.isDeleteDialogVisible = true;
      this.selectedCompanyId = companyId;
    },
    showEditDialog(company: Company) {
      this.isEditCompanyDialogVisible = true;
      this.formData = { ...company };
      this.selectedCompanyId = company?.companyId;
    },
    createCompany() {
      this.$store.dispatch('companies/saveForm', this.formData).then(() => {
        this.isAddCompanyDialogVisible = false;
        this.clearForm();
      });
    },
    updateCompany() {
      if (this.selectedCompanyId === null) {
        // show error
        return;
      }

      this.$store.dispatch('companies/updateCompany', {companyId: this.selectedCompanyId, formValues: this.formData}).then(() => {
        this.isEditCompanyDialogVisible = false;
        this.clearForm();
      });
    },
    deleteCompany() {
      this.$store
        .dispatch('companies/deleteCompany', this.selectedCompanyId)
        .then(() => {
          this.isDeleteDialogVisible = false;
          this.selectedCompanyId = null;
        })
        .catch(error => {
          console.log(error);
          // show toast message or some other error UI
        });
    },
  },
});
</script>

<style lang="scss" scoped></style>
