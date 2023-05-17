<script setup>
import match from "../createform/newMatch.vue";  
import tournament from "../createform/CreateTournament.vue";
import { useDrawerStore } from "@/stores/drawer";
import { ref, watchEffect, shallowRef } from "vue";

const matchtpage = shallowRef(match);  
const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const open = ref(null);

// update on changes  
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});


</script>
<template>
 <div class="main-container"> 
      <div class="data-sh">
      <!-- data nav  -->
      <div class="data-sh-s ">
        <button
          class="data-sh-button"
          @click="matchtpage = match"
          :class="[matchtpage == match ? 'kamio' : '']"
        >
          new match
        </button>
        <button
          class="data-sh-button"
          @click="matchtpage = tournament"
          :class="[matchtpage == tournament ? 'kamio' : '']"
        >
          create tournament
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="matchtpage" />
      </div>    
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
@import "@/style/teamtm.css";
</style>
