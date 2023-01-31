<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="openAddDialog" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="openEditDialog"
        @deleteItem="openDeleteDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isAddCompanyDialogVisible = false"
        @saveCompany="saveCompany"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isEditCompanyDialogVisible = false"
        @saveCompany="saveCompany"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="deleteCurrentCompany"
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
import { mapGetters } from 'vuex';
import { FormElements, FormElementsWithValue } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data() {
    return {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
      formStructure: [] as FormElementsWithValue[],
      currentCompany: {} as Company,
    };
  },

  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formElements: 'companies/companyForm',
    }),
  },

  watch: {
    formElements(newFormElements) {
      this.initFormStructure(newFormElements);
    },
  },

  created() {
    this.initFormStructure(this.formElements);
  },

  methods: {
    ...mapActions('companies', ['addCompany', 'updateCompany', 'deleteCompany']),

    initFormStructure(formElements: FormElements[]) {
      this.formStructure = [];
      for (let i = 0; i < formElements.length; i++) {
        const newElm = { ...formElements[i], value: '' };

        this.formStructure.push(newElm);
      }
    },

    openAddDialog() {
      // set all values in formStructure to empty
      for (let i = 0; i < this.formStructure.length; i++) {
        this.formStructure[i].value = '';
      }
      this.isAddCompanyDialogVisible = true;
    },

    openEditDialog(company: Company) {
      this.currentCompany = company;
      // set all values in formStructure current company values
      for (let i = 0; i < this.formStructure.length; i++) {
        const item = this.formStructure[i];
        item.value = company[item.key];
      }
      this.isEditCompanyDialogVisible = true;
    },

    openDeleteDialog(company: Company) {
      this.currentCompany = company;
      this.isDeleteDialogVisible = true;
    },

    saveCompany(partialCompanyRecord: Partial<Company>) {
      if (this.isAddCompanyDialogVisible) {
        this.addCompany(partialCompanyRecord);
        this.isAddCompanyDialogVisible = false;
      } else if (this.isEditCompanyDialogVisible) {
        this.updateCompany({ ...this.currentCompany, ...partialCompanyRecord });
        this.isEditCompanyDialogVisible = false;
      }
    },

    deleteCurrentCompany() {
      this.deleteCompany(this.currentCompany.companyId);
      this.isDeleteDialogVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
