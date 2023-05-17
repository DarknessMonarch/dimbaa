<script setup>
import details from "./detailsView.vue";
import formation from "./fomationView.vue";
import submitPlayers from "./submitView.vue";
import leaderPlayers from "./leadersPlayers.vue";
import startingPlayers from "./startingPlayers.vue";
import substitutePlayers from "./substitutePlayers.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { useDrawerStore } from "@/stores/drawer.js";
import { useNextStore } from "@/stores/next.js";
import { ref, watchEffect, shallowRef } from "vue";

const teamPage = shallowRef(details);
const drawerStore = useDrawerStore();
const nextStore = useNextStore();
const drawerStatus = ref(null);
const open = ref(null);

watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const detailM = () => {
  teamPage.value = details;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const startingM = () => {
  teamPage.value = startingPlayers;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}


const substituteM = () => {
  teamPage.value = substitutePlayers;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}


const leaderM = () => {
  teamPage.value = leaderPlayers;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const formationM = () => {
  teamPage.value = formation;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const submitM = () => {
  teamPage.value = submitPlayers;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}


// checks the active button and sets the next button
watchEffect(() => {
    switch (teamPage.value) {
    case details:
      if(nextStore.nextRouteState != false ) {
        startingM();
        console.log(nextStore.nextRouteState)
      };
      break; 
      case startingPlayers:
      if(nextStore.nextRouteState != false ) {
        substituteM()
        console.log(teamPage.value)
      };
      break;
      case substitutePlayers:
      if(nextStore.nextRouteState != false ) {
        leaderM()
        console.log(teamPage.value)
      };
      break;
      case leaderPlayers:
      if(nextStore.nextRouteState != false ) {
        formationM()
        console.log(nextStore.nextRouteState)
      };
      break;
      case formation:
      if(nextStore.nextRouteState != false ) {
        submitM()
        console.log(nextStore.nextRouteState)
      };
      break;
    default:
      break;
  }
});

// checks the active button and sets the previous button
  watchEffect(() => {
    switch (teamPage.value) {
      case startingPlayers:
      if(nextStore.previousRouteState != false ) {
        detailM();
        console.log(nextStore.previousRouteState)
      };
      break;
      case substitutePlayers:
      if(nextStore.previousRouteState != false ) {
        startingM();
      };
      break;
      case leaderPlayers:
      if(nextStore.previousRouteState != false ) {
        substituteM();
      };
      break;
      case formation:
      if(nextStore.previousRouteState != false ) {
        leaderM();
      };
      break;
      case submitPlayers:
      if(nextStore.previousRouteState != false ) {
        formationM();
      };
      break;
    default:
      break;
  }
});




</script>
<template>
 <div class="main-container">
    <div class="nav-top">
      <div class="second-t data-b">
        <button class="second-btn " @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
          <h2>Line up Form</h2>
          <h2>Orodha ya wachezaji</h2>
        </div>
      </div>  
    </div>  
      <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="detailM"
          :class="[teamPage == details ? 'datapage'  : '']"
        >
          Details
        </button>
        <button
          class="data-n-b"
          @click="startingM"
          :class="[teamPage == startingPlayers ? 'datapage'  : '']"
        >
          StartingXI
        </button>
        <button
          class="data-n-b"
          @click="substituteM"
          :class="[teamPage == substitutePlayers ? 'datapage'  : '']"
        >
          Substitute
        </button>
        <button
          class="data-n-b"
          @click="leaderM"
          :class="[teamPage == leaderPlayers ? 'datapage'  : '']"
        >
          Official
        </button>
        <button
          class="data-n-b"
          @click="formationM"
          :class="[teamPage == formation ? 'datapage'  : '']"
        >
        Formation
        </button>
        <button
          class="data-n-b"
          @click="submitM"
          :class="[teamPage == submitPlayers ? 'datapage'  : '']"
        >
          Submit
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="teamPage" />
      </div>    
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
