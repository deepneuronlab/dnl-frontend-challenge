<template>
  <v-btn
    color="primary"
    class="pl-5 pt-5 pb-5 pr-5 subtitle-1 font-weight-bold text-capitalize"
    :disabled="disabled"
    @click.prevent="$emit('click')"
  >
    {{ text }}
    <v-icon v-if="icon" class="pl-1">{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BtnMain',
  props: {
    disabled: { type: Boolean, required: false, default: false },
    text: { type: String, required: true },
    icon: { type: String, default: '' },
  },
});
</script>

<style lang="scss" scoped></style>
