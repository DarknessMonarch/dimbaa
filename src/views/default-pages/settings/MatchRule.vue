<script setup>
import coming from "./coming.vue";
import soon from "./soon.vue";
import cardrule from "./CardRule.vue";
import { shallowRef } from "vue";


const cardruleP = shallowRef(cardrule);


</script>
<template>
  <div class="main-container">
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button class="data-n-b" @click="cardruleP = cardrule" :class="[cardruleP == cardrule ? 'security-py' : '']">
          CardRule
        </button>
        <button class="data-n-b" @click="cardruleP = coming" :class="[cardruleP == coming ? 'security-py' : '']">
          upcoming
        </button>
        <button class="data-n-b" @click="cardruleP = soon" :class="[cardruleP == soon ? 'security-py' : '']">
         upcoming
        </button>
      </div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="cardruleP" />
    </div>
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/securityp.css";
</style>
