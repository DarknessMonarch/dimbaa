<script  setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { useAuthStore } from "../../stores/auth.js";
import { ref, watchEffect, shallowRef, onMounted } from "vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";
import tableData from "./data-form/tblInfo.vue";

import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const drawerStore = useDrawerStore();
const tablePage = shallowRef(tableData);
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const data = ref([]);
const isTableOpen = ref(false);
const check = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openTable = () => {
  isTableOpen.value = !isTableOpen.value
}

console.log(authStore.userName);

const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};

const openEdit = () => {
  check.value = false;
  drawerStore.togglePop();
};

const openDrawer = (id) => {
  switch (id) {
    case 1:
      drawerID.value = 1;
      drawerStore.toggleDrawer();
      break;
    case 2:
      drawerID.value = 2;
      drawerStore.toggleDrawer();
      break;
    default:
      drawerID.value = null;
      break;
  }
};


let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}league-director/scoreboard`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.scoreboard;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});

</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details data-b">
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <select type="text" v-model="select" class="main-search">
            <option disabled="disabled" selected>Select Tournament</option>
            <option>Tournament1</option>
            <option>Tournament2</option>
          </select>
        </form>
      </div>
    </div>

    <div class="inner-view-content">
      <h1>ScoreBoard</h1>
    </div>
    <div class="tbl-self-made">
      <div class="header-container">
        <div></div>
        <div>Position</div>
        <div>TeamA</div>
        <div>Team B</div>
        <div>Points</div>
        <div>Pld</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>GF</div>
        <div>GA</div>
        <div>GD</div>
      </div>
      <div class="row-inner-t" v-for="(
            { team1_score, team2_score, point }, index
          ) in data" :key="index">
        <div>
          <div class="row-container">
            <div class="controller-tb">
            <ArrowIcon class="icon" @click="openTable" :class="isTableOpen == true ? 'turnOn' : ''">
            </ArrowIcon>
          </div>
          <div>1</div>
        <div>{{ team1_score }}</div>
        <div>{{ team2_score }}</div>
        <div>{{ point }}</div>
        <div>4</div>
        <div>3</div>
        <div>1</div>
        <div>8</div>
        <div>8</div>
        <div>8</div>
        <div>2</div>
        </div>
          </div>
          <div class="inner-spy">
            <component :is="tablePage" v-show="isTableOpen == true" class="inner-hide" />
          </div>
      </div>
    </div>
  </div>
  <div>
    <PopUP title="Edit match" v-if="check == true">
      <EditMatch />
    </PopUP>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
