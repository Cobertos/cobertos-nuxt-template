<template>
  <portal
    to="modal"
  >
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
      v-bind="$attrs"
      :class="{ 'is-active': show }"
    >
      <div
        class="modal-background"
        @click="$emit('close')"
      />
      <div
        class="modal-content"
      >
        <slot />
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="$emit('close')"
      />
    </div>
    
  </portal>
</template>

<script>
import { Portal } from 'portal-vue';

export default {
  components: { Portal },
  props: {
    show: Boolean,
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_utils.scss";

.modal-content {
  background-color: #FFF;
  color: #000;
  text-align: center;
  padding: 25px !important;
  @include desktop {
    padding: 50px !important;
  }
}

.modal-close {
  padding: 24px !important; // Fix bulma?
}
</style>