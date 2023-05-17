<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

import { ref, onMounted,  watchEffect, shallowRef } from "vue";

const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const data = ref([]);
const check = ref(false);

const url= "https://be-tblp.dimbaa.com/api/admin/stadia"

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

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
  return data.value.filter((d) => d.name.includes(routeStore.stadiumName));
});

onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
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
</script>
<template>
    <div class="main-container Sc-p">
    <div class="nav-top">
      <div class="main-details">
        <span>Stadium details</span>
      </div>

    </div>
    <div class="team-player-x" v-for="(
            {  name, location, capacity, stadium_owner, stadium_picture},
          ) in searchResult"
          :key="`${searchResult}`">
        <div class="team-d-x">
          <h3>  {{ name }} </h3>
          <h4> {{stadium_owner}}</h4>
          <h4> {{capacity}}</h4>
          <h4> {{location}}</h4>
        </div>
          <img
          :src="`${stadium_picture}`"
          alt="player-pic"
          class="player-pic"
        />
      </div>
  <div class="specific-content">
    <div class="table-slide">
      <table class="tb-specific">
        <tr>
          <th> <button class="sp-dbtn" @click="routeStore.togglePage">
              <ArrowIcon class="icon icon-dta" />
            </button></th>
          <th>Name</th>
          <th>Region</th>
          <th>location</th>
          <th>date</th>
          <th>team</th>
        </tr>
        <tr v-for="({ name, region, location, inauguration_date, stadium_picture }, index) in searchResult" :key="`${searchResult}`">
          <td></td>
          <td>{{ name }}</td>
          <td>{{ region }}</td>
          <td>{{ location }}</td>
          <td>{{ inauguration_date }}</td>
          <td>{{  }}</td>
        </tr>
      </table>
    </div>
  </div>
    <div>
      <PopUP title="Add Player" v-if="check == true">
        <CreatePlayer />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/userspecific.css";
</style>