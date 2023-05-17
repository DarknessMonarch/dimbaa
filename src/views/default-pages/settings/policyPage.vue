<script setup>
import Copyright from "./copyrightPage.vue";
import Terms from "./termsCondition.vue";
import Policy from "./privacyPolicy.vue";
import { shallowRef } from "vue";


const policyP = shallowRef(Policy);


</script>
<template>
  <div class="main-container">
    <div class="st-ncp">
      <!-- data nav  -->
      <div class="data-nav security-ncp">
        <button class="data-n-b sed-ncp" @click="policyP = Policy" :class="[policyP == Policy ? 'security-py' : '']">
          Privacy   Policy
        </button>
        <button class="data-n-b sed-ncp" @click="policyP = Terms" :class="[policyP == Terms ? 'security-py' : '']">
          Terms & Conditions
        </button>
        <button class="data-n-b sed-ncp" @click="policyP = Copyright" :class="[policyP == Copyright ? 'security-py' : '']">
          Copyright Notice
        </button>
      </div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="policyP" />
    </div>
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/securityp.css";
</style>
