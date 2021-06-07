<template>
  <div class="root-nuxt">
    <main>
      <nuxt />
    </main>
    <modal-target />
  </div>
</template>

<script>
import ModalTarget from '@/components/util/ModalTarget.vue';
import { hostname } from 'assets/scripts/config.js';
export default {
  components: {
    ModalTarget
  },
  head() {
    //To conform with AWS S3 redirects, there should _always_ have a
    //trailing slash. This is setup in nuxt.config.js in router
    const path = this.$route.path === '/' ? '' : this.$route.path;
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: `${hostname}${path}` }
      ]
    };
  }
};
</script>

<style lang="scss">
//@import '@/assets/styles/_func.scss';
@import '@/assets/styles/global.scss';

</style>
