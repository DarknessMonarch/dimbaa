<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import TeamDetails from "@/components/specific/TeamComponent.vue";
import CreateTeam from "@/components/form/createform/CreateTeam.vue";
import EditTeam from "@/components/form/updateform/EditTeam.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(TeamDetails);
const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const showPage = ref(false);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
const check = ref(false);
// sort input 
const sortTeam = ref(0);
const region = ref(0);
const stadium = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const notAssignStadium = ref(false)
// filter input

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const toggleSortTeam = () => {
  sortTeam.value = !sortTeam.value;
  console.log(sortTeam.value)
}

const toggleRegion = () => {
  region.value = !region.value;
  console.log(region.value)
}

const toggleStadium = () => {
  stadium.value = !stadium.value;
  console.log(stadium.value)
}
//filter magic 


const showAllFilter = () => {
  showAll.value = !showAll.value;
  notAssignStadium.value = !notAssignStadium.value;

}

//filter magic 

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

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET", 
    url: `${url}admin/teams`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.teams;
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
        <h1>Team</h1>
        <span>Team</span>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input type="text" v-model="search" class="main-search" placeholder="Search  Team" />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="openDrawer(1)">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-c" @click="openDrawer(2)">
            <FilterIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
    <component :is="activePage" v-if="showPage == true" />
    <div class="user-content" v-else>
      <h2></h2>
      <div class="table-slide">
        <table>
          <tr>
            <th>Team name</th>
            <th>Region</th>
            <th>Stadium id</th>
            <!-- <th>Stadium</th> -->
            <th>action</th>
          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr v-for="({ id, name, region, stadium_id }, index) in searchResult" :key="index">
            <td>{{ name }}</td>
            <td>{{ region }}</td>
            <td>{{ stadium_id }}</td>

            <td>
              <div class="table-link-c">
                <!-- <div class="table-link">
                <a href="#" @click="showSpecific(id)">View</a>
              </div> -->
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
          <h1>Sort team list using</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Team Name</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleSortTeam">
                <div class="inner-radio" v-show="sortTeam == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Region</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleRegion">
                <div class="inner-radio" v-show="region == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Stadium</label>
             <!-- custom made radio  -->
             <div class="radio-wrapper" @click="toggleStadium">
                <div class="inner-radio" v-show="stadium == true">
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
    <!-- side bar component for filter  -->
    <SideDrawer v-else title="Filter by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="filter-c">
        <h1>Enable switch to show in list</h1>
        <div class="filter-wrapper">
          <!-- show component  -->
          <div class="filter-list">
            <h2>Show All</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="showAll" @click="showAllFilter" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Not assign Stadium</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="notAssignStadium" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Add Team" v-if="check == true">
        <CreateTeam />
      </PopUP>
      <PopUP title="Edit" v-else>
        <EditTeam />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
