<template>
  <div class="dashboard-container">
    <div class="dashbar">
      <div class="inner-container">
        <button
          class="inner-component"
          @click="activePage = Player"
          :class="[activePage == Player ? 'active' : '']"
        >
          <div class="inner-i">
            <UserIcon class="icon icon-c" />
            <span>Player</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Apparel"
          :class="[activePage == Apparel ? 'active' : '']"
        >
          <div class="inner-i">
            <ApparelIcon class="icon icon-c" />
            <span>Team Apparel</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Staff"
          :class="[activePage == Staff ? 'active' : '']"
        >
          <div class="inner-i">
            <StaffIcon class="icon icon-c" />
            <span>Team Staff</span>
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

import StaffIcon from "@/components/icons/StaffIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import ApparelIcon from "@/components/icons/ApparelIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

// pages
import Player from "./playerV.vue"
import Staff from "./staffView.vue"
import Apparel from "./ApparelView.vue"

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef( Player);

//check state of the drawer
</script>
<style>
@import "@/style/board.css";
</style>
