<template>
  <v-container class="data-table pl-0 pr-0" v-if="tableHeaders">
    <v-layout>
      <v-data-table
        @click:row="$emit('clickedRow', $event)"
        :headers="allTableHeaders"
        :items="tableItems"
        class="data-table__table"
        item-class="className"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <BtnTableAction
            text="Edit"
            icon="mdi-pencil"
            :disabled="false"
            @clickAction="$emit('editItem', theCompany(item))"
          />
          <BtnTableAction
            text="Delete"
            icon="mdi-delete"
            :disabled="false"
            @clickAction="$emit('deleteItem', theCompany(item))"
          />
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BtnTableAction from '@/components/UI/BtnTableAction.vue';
import { Company, CompanyTableHeaderItem } from '@/store/companies-types';
import { cloneDeep } from 'lodash';

export default Vue.extend({
  name: 'DataTableCompanies',
  components: { BtnTableAction },
  props: {
    tableHeaders: {
      type: Array as PropType<CompanyTableHeaderItem[]>,
      required: true,
    },
    tableItems: {
      type: Array as PropType<Company[]>,
      required: true,
    },
  },
  computed: {
    allTableHeaders(): CompanyTableHeaderItem[] {
      const newTableHeaders: CompanyTableHeaderItem[] = [
        ...this.tableHeaders,
        { text: 'Actions', value: 'actions', sortable: false },
      ];
      return newTableHeaders;
    },
  },
  methods: {
    theCompany(company: Company): Company {
      return cloneDeep(company) as Company;
    },
  },
});
</script>

<style lang="scss" scoped>
.data-table {
  min-width: 100%;
  .v-data-table {
    min-width: 100%;
  }
}
</style>
