<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
// import { getApi } from "@/components/composable/getData.js";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import userDetails from "@/components/specific/userComponent.vue";
import CreateUser from "@/components/form/createform/CreateUser.vue";
import EditUser from "@/components/form/updateform/EditDetails.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(userDetails);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const userFirstName = ref(null);
const drawerStatus = ref(null);
const showPage = ref(false);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
const check = ref(false);
// sort input 
const sortRole = ref(0);
const sortUser = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const superAdmin = ref(false);
const teamAdmin = ref(false);
const teamManager = ref(false);
const generalCoordinator = ref(false);
const referee = ref(false);
const matchComissioner = ref(false);
const refereeAssessor = ref(false);
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

const toggleUserRole = () => {
  sortRole.value = !sortRole.value;
  console.log(sortRole.value)
}

const toggleUserName = () => {
  sortUser.value = !sortUser.value;
  console.log(sortUser.value)
}

//filter magic 

const showAllFilter = () => {
  showAll.value = !showAll.value;
  superAdmin.value = !superAdmin.value;
  teamAdmin.value = !teamAdmin.value;
  teamManager.value = !teamManager.value;
  generalCoordinator.value = !generalCoordinator.value;
  referee.value = !referee.value;
  matchComissioner.value = !matchComissioner.value
  refereeAssessor.value = !refereeAssessor.value

}
//filter magic 

// userFirstName.value = authStore.userName.split('@')[0];


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
//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});


let url = 'https://be-tblp.dimbaa.com/api/'
let token = localStorage.authKey;

//get data composable
// const {searchResult} = getApi(url,'users', token, search.value);

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

  await axios
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
        <h1>Welcome {{ userFirstName }}</h1>
        <h2>Super admin</h2>
        <div class="main-center-da">
          <span>Welcome {{ userFirstName }}</span>
          <span>Super admin</span>
        </div>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input type="text" v-model="search" class="main-search" placeholder="Search User" />
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
      <h2>User list</h2>
      <div class="table-slide">
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>mobile</th>
            <!-- <th>Stadium</th> -->
            <th>action</th>
          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr v-for="({ id, name, email, mobile }, index) in searchResult" :key="index">
            <td>{{ name }}</td>
            <td>{{ email }}</td>
            <td>{{ mobile }}</td>

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
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">User Role</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleUserRole">
                <div class="inner-radio" v-show="sortRole == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">User Name</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleUserName">
                <div class="inner-radio" v-show="sortUser == true">
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
            <h2>Super Admin</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="superAdmin" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Team Admin</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="teamAdmin" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Team manager</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="teamManager" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>General Coordinator</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="generalCoordinator" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Referee</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="referee" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Match Commissioner</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="matchComissioner" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Referee Assessor</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="refereeAssessor" />
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
      <PopUP title="AddUser" v-if="check == true">
        <CreateUser />
      </PopUP>
      <PopUP title="Edit User Details" v-else>
        <EditUser />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
