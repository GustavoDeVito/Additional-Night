<template>
  <div>
      <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from './components/base/Navbar.vue'

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>