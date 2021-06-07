<template>
  <portal-target
    name="modal"
    multiple
    @change="modalChange"
  />
</template>

<script>
import { PortalTarget } from 'portal-vue';
import { hostname } from 'assets/scripts/config.js';
export default {
  components: {
    PortalTarget
  },
  methods: {
    async modalChange(newContent, oldContent) {
      if (!process.client) {
        return;
      }
      if (!newContent) { // Bool of if there's content
        return;
      }

      await this.$nextTick(); // Wait a tick for the close event to cause the modal to disappear
      // If any modal is open, add is-clipped to body (bulma needs this to stop scroll)
      document.body.classList
        // Test is any modals are 'show'
        [!!document.querySelector('.modal.is-active') ? 'add' : 'remove']
        ('is-clipped');
    },
  }
};
</script>