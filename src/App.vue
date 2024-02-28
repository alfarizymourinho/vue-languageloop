<template>
  <NavbarComponent />
  <Home></Home>
  <Materi></Materi>
  <Admin></Admin>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import Home from './views/Home.vue';
import Materi from './views/Materi.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,

  }
}
</script>
<style scoped></style>