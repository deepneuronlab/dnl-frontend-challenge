<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="handleDialogVisibility('add')" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="setCompanyToEdit"
        @deleteItem="setCompanyIdToDelete"
      />

      <FormDialog
        v-if="formStructure"
        :title="mode === 'edit' ? 'Edit Company' : 'Add Company'"
        v-model="companyFormData"
        :isVisible="isCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isCompanyDialogVisible = false"
        @save="onSaveCompany"
        ref="companyFormDialog"
      />

      <DeleteDialog
        :isVisible="isDeleteCompanyDialogVisible"
        @close="isDeleteCompanyDialogVisible = false"
        @delete="onDeleteCompany"
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
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: () => ({
    isDeleteCompanyDialogVisible: false,
    isCompanyDialogVisible: false,
    companyFormData: {} as object | Company,
    companyIdToDelete: null as string | null,
    mode: 'add',
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  methods: {
    /**
     *
     * @param mode
     */
    handleDialogVisibility(mode: string) {
      this.mode = mode;
      this.isCompanyDialogVisible = true;
    },
    /**
     *
     * @param company
     */
    setCompanyToEdit(company: Company) {
      this.companyFormData = company;
      this.isCompanyDialogVisible = true;
      this.mode = 'edit';
    },
    /**
     *
     * @param company
     */
    setCompanyIdToDelete(company: Company) {
      this.companyIdToDelete = company.companyId;
      this.isDeleteCompanyDialogVisible = true;
    },
    /**
     *
     */
    onSaveCompany() {
      const companyFormDialog = this.$refs.companyFormDialog as any;
      const dynamicForm = companyFormDialog.$refs.dynamicForm as any;
      const form = dynamicForm.$refs.form as any;
      const isCompanyFormValid = form.validate();
      if (isCompanyFormValid && this.mode === 'add') {
        this.$store.dispatch('companies/addCompany', this.companyFormData);
      } else if (isCompanyFormValid && this.mode === 'edit') {
        this.$store.dispatch('companies/updateCompany', this.companyFormData);
      }
      this.companyFormData = {} as Company;

      this.isCompanyDialogVisible = false;
    },
    /**
     *
     */
    onDeleteCompany() {
      if (this.companyIdToDelete) {
        this.$store.dispatch('companies/deleteCompany', this.companyIdToDelete);
        this.isDeleteCompanyDialogVisible = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
