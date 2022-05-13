<template>
  <v-btn
    class="text-capitalize"
    color="grey darken-3"
    :disabled="disabled"
    text
    @click.stop.prevent="$emit('clickAction')"
  >
    {{ text }}
    <v-icon v-if="icon" class="pl-1" small :color="disabled ? 'grey' : 'primary'">{{
      icon
    }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BtnTableAction',
  props: {
    disabled: { type: Boolean, required: false, default: false },
    text: { type: String, required: true },
    icon: { type: String, default: '' },
  },
});
</script>

<style lang="scss" scoped></style>
