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
            @clickAction="$emit('editItem', item)"
          />
          <BtnTableAction
            text="Delete"
            icon="mdi-delete"
            :disabled="false"
            @clickAction="$emit('showDeleteDialog', item.companyId)"
          />
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BtnTableAction from '@/components/UI/BtnTableAction.vue';

export default Vue.extend({
  name: 'DataTableCompanies',
  components: { BtnTableAction },
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
  computed: {
    allTableHeaders() {
      const newTableHeaders = [
        ...this.tableHeaders,
        { text: 'Actions', value: 'actions', sortable: false },
      ];
      return newTableHeaders;
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
