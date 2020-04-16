<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <slot></slot>
    <hr />
    <p>thx <a href="//balmjs.com/">BalmJS</a></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello font-awesome'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
