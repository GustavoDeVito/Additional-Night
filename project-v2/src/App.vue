<template>
  <div>
    <Navbar />
    <HomeScreen />
  </div>
</template>

<script>
  import Navbar from './components/snippet/Navbar'
  import HomeScreen from './components/screen/HomeScreen'

  export default {
    name: 'App',
    components: {
      Navbar,
      HomeScreen,
    }
  }
</script>