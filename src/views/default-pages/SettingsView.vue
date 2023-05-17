<script setup>
import { ref } from "vue";
import { shallowRef, watchEffect } from "vue";
import { useRoleStore } from "@/stores/roles.js";

// icons
import SecureIcon from "@/components/icons/KeyIcon.vue";
import MatchRuleIcon from "@/components/icons/LawIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

// pages
import Security from "./settings/securityPage.vue"
import MatchRule from "./settings/MatchRule.vue"
import Policy from "./settings/policyPage.vue"

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef(Security);
const roleStore = useRoleStore();
const isAdmin = ref(false);

watchEffect(() => {
  if (roleStore.routeName == "AdminBoard") {
    isAdmin.value = true;
  }
})


</script>
<template>
  <div class="dashboard-container">
    <div class="dashbar">
      <div class="inner-container">
        <button class="inner-component" @click="activePage = Security"
          :class="[activePage == Security ? 'active' : '']">
          <div class="inner-i">
            <SecureIcon class="icon icon-c" />
            <span>Account</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button class="inner-component" @click="activePage = Policy"
          :class="[activePage == Policy ? 'active' : '']">
          <div class="inner-i">
            <MatchRuleIcon class="icon icon-c" />
            <span>Policy</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button v-show="isAdmin == true" class="inner-component" @click="activePage = MatchRule"
          :class="[activePage == MatchRule ? 'active' : '']">
          <div class="inner-i">
            <MatchRuleIcon class="icon icon-c" />
            <span>MatchRule</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
      </div>
    </div>
    <div class="main-dash">
      <component :is="activePage" />
    </div>
  </div>
</template>
<style>
@import "@/style/board.css";
</style>
