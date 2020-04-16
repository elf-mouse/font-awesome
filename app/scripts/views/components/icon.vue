<template>
  <div class="icon-item">
    <i :class="['fa', icon]"></i>
    <span>{{ icon }}</span>
  </div>
</template>

<script>
export default {
  name: 'fa-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
