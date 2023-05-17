<script setup>
import { useDrawerStore } from "@/stores/drawer";
import DotIcon from "@/components/icons/DotIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import axios from "axios";

const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
// sort input 
const sortRole = ref(0);
const sortUser = ref(0);
const Ascending = ref(false);
const Descending = ref(false);

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

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.middle_name.includes(search.value));
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}notifications`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.player.data;
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
        <h1>Notification</h1>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search Notification"
          />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="drawerStore.toggleDrawer">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
    <div v-if="data.length <= 0" class="no-notification">
    <p>Their is no notification ✈ </p>
    </div>
    <div class="notification-content" v-else>
      <div class="notification-wrapper">
        <DotIcon class="icon-no" />
        <div class="notification-msg">
          <p>
            iam a
            notifications
          </p>
        </div>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <SideDrawer
      title="Sort by"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
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
    <div></div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/notification.css";
</style>
