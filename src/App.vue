<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';

const route = useRoute()
</script>

<template>
  <div class="flex h-full gap-6">
    <Navbar />
    <div class="flex-1 flex flex-col">
      <Header />
      <RouterView/>
      </div>
  </div>
</template>
