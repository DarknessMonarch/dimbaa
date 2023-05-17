<script setup>
import axios from "axios";
import position from "./soccerview/playerPosition.vue";
import formation from "./soccerview/formationView.vue";
import staff from "./soccerview/teamStaff.vue";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";


const tacticPage = shallowRef(formation);
const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
// sort input 
const sortFormation = ref(0);
const sortPosition = ref(0);
const sortStaff = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const FFormation = ref(false);
const Fstaff = ref(false);
const FPosition = ref(false);
// filter input


//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const toggleFormation = () => {
  sortFormation.value = !sortFormation.value;
  console.log(sortFormation.value)
}

const togglePosition = () => {
  sortPosition.value = !sortPosition.value;
  console.log(sortPosition.value)
}

const toggleStaff = () => {
  sortStaff.value = !sortStaff.value;
  console.log(sortStaff.value)
}


//filter magic 

const showAllFilter = () => {
  showAll.value = !showAll.value;
  FFormation.value = !FFormation.value;
  Fstaff.value = !Fstaff.value;
  FPosition.value = !FPosition.value;

}
//filter magic 

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});



//we use this id to determine which drawer opens

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
    url: `${url}admin/users`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.users;
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
      <div class="main-details">
        <h1>Tactic</h1>
        <span>User</span>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input type="text" v-model="search" class="main-search" placeholder="Search" />
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
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button class="data-n-b" @click="tacticPage = formation" :class="[tacticPage == formation ? 'datapage' : '']">
          Formation
        </button>
        <button class="data-n-b" @click="tacticPage = position" :class="[tacticPage == position ? 'datapage' : '']">
          Position
        </button>
        <button class="data-n-b" @click="tacticPage = staff" :class="[tacticPage == staff ? 'datapage' : '']">
          Staff
        </button>
      </div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="tacticPage" />
    </div>
    side bar component for sorting
    <SideDrawer v-if="drawerID == 1" title="Sort by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Formation</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleFormation">
                <div class="inner-radio" v-show="sortFormation == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Position</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="togglePosition">
                <div class="inner-radio" v-show="sortPosition == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Staff</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleStaff">
                <div class="inner-radio" v-show="sortStaff == true">
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
              <!-- Rounded switch -->
             <label class="switch">
                <input type="checkbox" v-model="showAll" @click="showAllFilter"/>
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
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
                <input type="checkbox" v-model="showAll" @click="showAllFilter"/>
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Formation</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="FFormation" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Staff</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="Fstaff" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Position</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="FPosition" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>

        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Add formation" v-if="formation == false">
        <EditUser />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
