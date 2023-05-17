<script setup>
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import PopUP from "@/components/drawer/popup.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Stadium from "@/components/specific/StadiumComponent.vue";
import UpdateStadium from "@/components/form/updateform/UpdateStadium.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import DeletePlayerlist from "@/components/form/deleteForm/DeletePlayer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";
import axios from "axios";

let url = 'https://be-tblp.dimbaa.com/api/'
const showPage = shallowRef(Stadium);
const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerID = ref(null);
const playerId = ref(null);
const playerName = ref(null);
const drawerStatus = ref(null);
const check = ref(false);
const open = ref(null);
const data = ref([]);
const search = ref("");

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openAdd = () => {
  check.value = true;
  drawerStore.togglePop();
};

const stadiumSpecific = (name) => {
  routeStore.setStadium(name);
  routeStore.togglePage();
};



const openDelete = () => {
  check.value = false;
  drawerStore.togglePop();
};

let token = localStorage.authKey;

onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}admin/stadia`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

await axios
    .request(options)
    .then(function (response) {
      data.value = response.data.stadia;
    })
    .catch(function (error) {
      console.error(error);
    });
});

//filter by search
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});


</script>
<template>
    <component :is="showPage"  v-if="routeStore.showPage  == true " />
  <div class="main-container" v-else>
    <div class="nav-top">
      <div class="main-details">
        <h1>Stadium list</h1>
        <span>Stadium list</span>      
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search by stadium"
          />
        </form>
      </div>
    </div>
    <div class="team-list-c">
      <h3>Total Stadium : {{ searchResult.length }}</h3>
      </div>
    <div class="user-content">
      <div class="team-player-x" v-for="(
            { id, name, location, capacity, stadium_owner, stadium_picture},
          ) in searchResult"
          :key="`${searchResult}`">
        <div class="team-d-x">
          <h3>  {{ name }} </h3>
          <h4> {{stadium_owner}}</h4>
          <h4> {{capacity}}</h4>
          <h4> {{location}}</h4>
          <div class="stad-cd">
    
            <a @click="openAdd" class="stad-cd-a" >Add</a>
            <a  @click="openDelete" class="stad-cd-d" >Delete</a>
            <a  @click="stadiumSpecific(name) "  class="stad-cd-d">View</a>
          </div>
        </div>
          <img
          :src="`${stadium_picture}`"
          alt="player-pic"
          class="player-pic"
        />
      </div>
    </div>
    <div>
      <PopUP title="Add stadium" v-if="check == true">
        <UpdateStadium />
      </PopUP>
      <PopUP  v-else>
        <DeletePlayerlist :Id="`${routeStore.stadiumID}`" :text="playerName" :url="url" />
      </PopUP>
    </div>
        <!-- side bar component for sorting  -->
        <SideDrawer
      v-if="drawerID == 1"
      title="Sort by"
      class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Sort player list using</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">name</label>
              <input
                type="radio"
                id="one"
                value="PlayerName"
                v-model="name"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">region</label>
              <input
                type="radio"
                id="one"
                value="JerseyNumber"
                v-model="region"
              />
            </div>
          </div>
        </div>
        <div class="sort-wrapper">
          <h1>Order</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="ascending">Ascending</label>
              <input
                type="radio"
                id="one"
                value="Ascending"
                v-model="userRole"
              />
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <input
                type="radio"
                id="one"
                value="Descending"
                v-model="userRole"
              />
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>

