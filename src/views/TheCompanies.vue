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
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :selectedCompany="selectedCompany"
        @close="closeEditCompanyDialogVisible()"
        @onSave="updateCompany"
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
import { Company, CompanyForm } from '@/store/companies-types';
import { FormElements, FormRule } from '@/store/form-types';
import { cloneDeep } from 'lodash';

declare interface BaseComponentData {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  selectedCompany: Company | null;
  formErrors: FormRule;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): BaseComponentData => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    selectedCompany: null,
    formErrors: {},
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  methods: {
    clearForm() {
      this.$store.commit('companies/setDefaultFormStructure');
    },
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
      this.clearForm();
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
      this.clearForm();
      this.selectedCompany = null;
    },
    showDeleteDialog(company: Company) {
      this.isDeleteDialogVisible = true;
      this.selectedCompany = company;
    },
    showEditDialog(company: Company) {
      this.clearForm();
      this.isEditCompanyDialogVisible = true;
      this.selectedCompany = cloneDeep({ ...company }) as Company;

      const tempStruct: CompanyForm = [];

      const keys = Object.keys(this.selectedCompany as Company);
      this.formStructure.forEach((struct: FormElements) => {
        // struct.key in selectedCompanyKeys
        if (keys.includes(struct.key)) {
          tempStruct.push({
            ...struct,
            value: (this.selectedCompany as Company)[struct.key] as string,
          });
        }
      });

      this.$store.commit('companies/setFormStructure', tempStruct);
    },
    createCompany() {
      this.$store
        .dispatch('companies/createCompany')
        .then(this.closeAddCompanyDialogVisible)
        .catch(error => {
          console.log(error);
          // show toast message or some other error UI
        });
    },
    updateCompany() {
      this.$store
        .dispatch('companies/updateCompany', this.selectedCompany)
        .then(this.closeEditCompanyDialogVisible)
        .catch(error => {
          console.log(error);
          // show toast message or some other error UI
        });
    },
    deleteCompany() {
      this.$store
        .dispatch('companies/deleteCompany', this.selectedCompany?.companyId)
        .then(() => {
          this.isDeleteDialogVisible = false;
          this.selectedCompany = null;
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
