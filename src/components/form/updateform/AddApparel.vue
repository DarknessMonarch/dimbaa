<script setup>
import away from "./apparel/awayapparel.vue";
import home from "./apparel/homeapparel.vue";
import { shallowRef } from "vue";


const securityP = shallowRef(home);


</script>
<template>
  <div class="main-container">
    <div class="st-ncp">
      <!-- data nav  -->
      <div class="data-nav security-ncp">
        <button class="data-n-b apparel-sed sed-ncp" @click="securityP = home" :class="[securityP == home ? 'apparel-py' : '']">
          home
        </button>
        <button class="data-n-b apparel-sed sed sed-ncp" @click="securityP = away" :class="[securityP == away ? 'apparel-py' : '']">
          away
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
