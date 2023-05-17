<script setup>
import Upcoming from "./UpcomingView.vue";
import History from "./historyView.vue";
import second from "./teamSecond.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import PopUP from "@/components/drawer/popup.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import MatchT from "@/components/form/updateform/MatchT.vue";
import { ref, watchEffect, shallowRef } from "vue";

const dataPage = shallowRef(Upcoming);
const secondPage = shallowRef(second);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const check = ref(false);
const userFirstName =ref(null);
// sort input 
const sortRound = ref(0);
const sortVenue = ref(0);
const sortCity = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const Pending = ref(false);

//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const toggleRound = () => {
  sortRound.value = !sortRound.value;
  console.log(sortRound.value)
}


const toggleVenue = () => {
  sortVenue.value = !sortVenue.value;
  console.log(sortVenue.value)
}

const toggleCity = () => {
  sortCity.value = !sortCity.value;
  console.log(sortCity.value)
}


//filter magic 

const showAllFilter = () => {
  showAll.value = !showAll.value;
  Pending.value = !Pending.value;

}
//filter magic 



// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

userFirstName.value = authStore.userName.split('@')[0];


const openCreate = () => {
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


</script>
<template>
    <div v-if="drawerStore.showSecond == true">
    <component :is="secondPage" />
  </div>
 <div class="main-container" v-else>
    <div class="nav-top">
      <div class="main-details">
        <h1>Welcome {{ userFirstName }}</h1>
        <h2>Team Manager</h2>
        <div class="main-center-da">
          <span>Welcome {{ userFirstName }}</span>
          <span>Team Manager</span>
        </div>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search Here"
          />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="openDrawer(1)">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-c" @click="openDrawer(2)">
            <FilterIcon class="icon icon-menu" />
          </CircleDraw>
          <!-- <CircleDraw class="circle-a" @click="openCreate">
            <AddIcon class="icon icon-menu" />
          </CircleDraw> -->
        </div>
      </div>
    </div>
    <div class="team-b-txt">
    </div>  
      <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="dataPage = Upcoming"
          :class="[dataPage == Upcoming ? 'datapage' : '']"
        >
          Upcoming
        </button>
        <button
          class="data-n-b"
          @click="dataPage = History"
          :class="[dataPage == History ? 'datapage' : '']"
        >
          History
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="dataPage" />
      </div>    
    <!-- side bar component for sorting  -->
    <SideDrawer v-if="drawerID == 1" title="Sort by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Number</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleRound">
                <div class="inner-radio" v-show="sortRound == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Venue</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleVenue">
                <div class="inner-radio" v-show="sortVenue == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">City</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleCity">
                <div class="inner-radio" v-show="sortCity == true">
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
      <SideDrawer
      v-else
      title="Filter by"
      class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
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
            <h2>Pending Form Filling</h2>
            <div class="filter-b-c">
                <!-- Rounded switch -->
                <label class="switch">
                <input type="checkbox" v-model="Pending" />
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
      <PopUP title="Edit match" v-if="check == true">
      <MatchT/>  
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
