<script setup>
import theme from "./themePage.vue";
import language from "./languagePage.vue";
import password from "./passwordPage.vue";
import { shallowRef } from "vue";


const securityP = shallowRef(password);


</script>
<template>
  <div class="main-container">
    <div class="st-ncp">
      <!-- data nav  -->
      <div class="data-nav security-ncp">
        <button class="data-n-b sed-ncp" @click="securityP = password" :class="[securityP == password ? 'security-py' : '']">
          Password
        </button>
        <button class="data-n-b sed-ncp" @click="securityP = language" :class="[securityP == language ? 'security-py' : '']">
          Language
        </button>
        <button class="data-n-b sed-ncp" @click="securityP = theme" :class="[securityP == theme ? 'security-py' : '']">
          Theme
        </button>
      </div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="securityP" />
    </div>
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
@import "@/style/securityp.css";
</style>
