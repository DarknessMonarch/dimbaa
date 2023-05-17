<template>
  <div class="dashboard-container">
    <div class="dashbar">
      <div class="inner-container">
        <button
          class="inner-component"
          @click="activePage = User"
          :class="[activePage == User ? 'active' : '']"
        >
          <div class="inner-i">
            <SecureIcon class="icon icon-c" />
            <span>User</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Team"
          :class="[activePage == Team ? 'active' : '']"
        >
          <div class="inner-i">
            <TeamIcon class="icon icon-c" />
            <span>Team</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Stadium"
          :class="[activePage == Stadium ? 'active' : '']"
        >
          <div class="inner-i">
            <StadiumIcon class="icon icon-c" />
            <span>Stadium</span>
            </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Soccer"
          :class="[activePage == Soccer ? 'active' : '']"
        >
          <div class="inner-i">
            <SoccerIcon class="icon icon-c" />
            <span>Soccer tactic</span>
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
<script setup>
import { shallowRef } from "vue";
// icons

import TeamIcon from "@/components/icons/TeamIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import SecureIcon from "@/components/icons/SecureIcon.vue";
import SoccerIcon from "@/components/icons/SoccerIcon.vue";
import StadiumIcon from "@/components/icons/StadiumIcon.vue";

// pages

import User from "./userView.vue"
import Team from "./teamView.vue"
import Soccer from "./soccerView.vue";
import Stadium from "./stadiumView.vue";

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef(User);

//check state of the drawer
</script>
<style>
@import "@/style/board.css";
</style>
