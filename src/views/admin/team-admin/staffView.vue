<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import userDetails from "@/components/specific/userComponent.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import TeamStaff from "@/components/form/createform/TeamStaff.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(userDetails);
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
const sortID = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const medic = ref(false);
const coach = ref(false);

//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const toggleTeam = () => {
  sortTeam.value = !sortTeam.value;
  console.log(sortTeam.value)
}

const toggleID = () => {
  sortID.value = !sortID.value;
  console.log(sortID.value)
}

//filter magic 

const showAllFilter = () => {
  showAll.value = !showAll.value;
  medic.value = !medic.value;
  coach.value = !coach.value;

}
//filter magic 

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});


//we use this id to determin which drawer opens

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
//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
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
        <h1>Team Staff </h1>
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
          <CircleDraw class="circle-a" @click="openCreate">
            <AddIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
    <component :is="activePage" v-if="showPage == true" />
    <div class="user-content" v-else>
      <h2>Team Staff</h2>
      <div class="table-slide">
        <table>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>official signature</th>
            <th>Job description</th>
            <th>Staff Image</th>


          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr>
            <td>tst</td>
            <td>tst</td>
            <td>tst</td>
            <td>tst</td>
            <td>
              <div class="tbl-formation">
                <img src="@/assets/formation/433Attack-minded-midfield.jpg" alt="staff" class="tbl-img-formation">
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
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Team name</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleTeam">
                <div class="inner-radio" v-show="sortTeam == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">ID</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleID">
                <div class="inner-radio" v-show="sortID == true">
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
            <h2>Medic</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="medic" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Coach</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="coach" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Add Staff" v-if="check == true">
        <TeamStaff />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
