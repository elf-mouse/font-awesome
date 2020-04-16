<template>
  <div class="container">
    <hello>
      <ul v-if="icons.length" class="icon-list">
        <fa-icon v-for="icon in icons" :key="icon" :icon="icon"></fa-icon>
      </ul>
      <p v-else>No Icons</p>
    </hello>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import FaIcon from '@/views/components/icon';
import icons from '@/config';

export default {
  name: 'app',
  components: {
    Hello,
    FaIcon
  },
  data() {
    return {
      icons
    };
  }
};
</script>
