<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import PlayerDetails from "@/components/specific/PlayerComponent.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import AddApparel from "@/components/form/updateform/AddApparel.vue";

import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(PlayerDetails);
const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
const check = ref(false);
// sort input 
const playerName = ref(0);
const JerseyNumber = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const togglePlayer = () => {
  playerName.value = !playerName.value;
  console.log(playerName.value)
}
//sort magic

const toggleJersey = () => {
  JerseyNumber.value = !JerseyNumber.value;
  console.log(JerseyNumber.value)
}

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

//we use this id to determin which drawer opens
//show page based
const showSpecific = (id) => {
  routeStore.setPlayerId(id);
  routeStore.togglePage();
};


const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};

const openEdit = () => {
  check.value = true;
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


const searchResult = computed(() => {
  return data.value.filter((d) => d.playing_position.includes(search.value));
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}teammanager/players`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.players;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details">
        <h1>Team Apparel</h1>
        <span>Team apparel</span>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input type="text" v-model="search" class="main-search" placeholder="Search  Player" />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="openDrawer(1)">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-a" @click="openCreate">
            <AddIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
    <component :is="activePage" v-if="routeStore.showPage == true" />
    <div class="user-content" v-else>
      <h2></h2>
      <div class="table-slide">
        <table>
          <tr>
            <th>Start date</th>
            <th>End date</th>
            <th>Color of outfit</th>
            <th>Picture of outfit</th>
            <th>Home games</th>
            <th>Away games</th>
            <th>Picture of outfit</th>
            <!-- <th>Stadium</th> -->
            <th>action</th>
          </tr>
          <tr v-for="(
            { first_name, middle_name, jersey_number, signature }, index
          ) in searchResult" :key="index">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="openEdit">Edit</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <SideDrawer v-if="drawerID == 1" title="Sort by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Sort player list using</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Player Name</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="togglePlayer">
                <div class="inner-radio" v-show="playerName == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">JerseyNumber</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleJersey">
                <div class="inner-radio" v-show="JerseyNumber == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
          </div>
        </div>
        <div class="sort-wrapper">
          <h1>Order</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="ascending">Ascending</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleA">
                <div class="inner-radio" v-show="Ascending == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleB">
                <div class="inner-radio" v-show="Descending == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Add Apparel" v-if="check == true">
        <AddApparel />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
