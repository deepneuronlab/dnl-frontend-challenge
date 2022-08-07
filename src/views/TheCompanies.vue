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
        @editItem='setCompanyToEdit'
        @deleteItem='setCompanyIdToDelete'
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        v-model="companyToAdd"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isAddCompanyDialogVisible = false"
        @save="onAddCompany"
        ref='addCompanyFormDialog'
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        v-model='companyToEdit'
        @close="isEditCompanyDialogVisible = false"
        @save="onUpdateCompany()"
        ref='editCompanyFormDialog'
      />

      <DeleteDialog
        :isVisible="isDeleteCompanyDialogVisible"
        @close="isDeleteCompanyDialogVisible = false"
        @delete='onDeleteCompany' />
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
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteCompanyDialogVisible: false,
    companyToAdd: {},
    companyToEdit: null as null | Company,
    companyIdToDelete: null as string | null,

  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm'
    }),
  },
  methods: {
    /**
     *
     * @param company
     */
    setCompanyToEdit(company: Company) {
      this.companyToEdit = company
      this.isEditCompanyDialogVisible = true;
    },
    /**
     *
     * @param company
     */
    setCompanyIdToDelete(company: Company) {
      this.companyIdToDelete = company.companyId
      this.isDeleteCompanyDialogVisible = true;
    },
    /**
     *
     */
    onAddCompany() {
      const addCompanyFormDialog = this.$refs.addCompanyFormDialog as any;
      const dynamicForm = addCompanyFormDialog.$refs.dynamicForm as any;
      const form = dynamicForm.$refs.form as any;
      const isCompanyFormValid = form.validate();
      if(isCompanyFormValid) {
        this.$store.dispatch('companies/addCompany', this.companyToAdd)
      }
        this.companyToAdd = {} as Company

      this.isAddCompanyDialogVisible = false;
    },
    /**
     *
     */
    onUpdateCompany() {
      const editCompanyFormDialog = this.$refs.editCompanyFormDialog as any;
      const dynamicForm = editCompanyFormDialog.$refs.dynamicForm as any;
      const form = dynamicForm.$refs.form as any;
      const isCompanyFormValid = form.validate();
      if(isCompanyFormValid) {
        this.$store.dispatch('companies/updateCompany', this.companyToEdit)
      }
      this.companyToEdit = {} as Company

      this.isEditCompanyDialogVisible = false;
    },
    /**
     *
     */
    onDeleteCompany() {
      if(this.companyIdToDelete) {
        this.$store.dispatch('companies/deleteCompany', this.companyIdToDelete)
        this.isDeleteCompanyDialogVisible = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
