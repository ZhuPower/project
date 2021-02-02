<template>
  <div class="topNav">
    <img src="../assets/logo.png" class="logo">
    <div class="menu">
      <img src="../assets/menu.png">
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    created() { },
    computed: {},
    methods: {},
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topNav {
    height: 64px;
    margin: 0px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    cursor: pointer;
  }
</style>