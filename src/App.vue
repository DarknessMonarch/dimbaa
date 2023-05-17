<script setup>
import SideBar from "./components/drawer/SideBar.vue"
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="app-container">
  <div class="side">
  <SideBar/>
  </div>
  <div class="main">
  <RouterView/>
  </div>
  </div>
</template>
<style>
@import "./style/app.css";
</style>
