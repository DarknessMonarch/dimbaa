<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";


const url = "https://be-tblp.dimbaa.com/api/teammanager/players"
const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerStatus = ref(null);
const showPage = ref(false);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
const check = ref(false);

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
  return data.value.filter((d) => d.playing_position.includes(routeStore.playerPos));
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
      data.value = response.data.players;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <div class="specific-content Sc-p">
    <div class="team-player-x" v-for="(
            {  first_name, middle_name, last_name, playing_position, player_image, },
          ) in searchResult"
          :key="`${searchResult}`">
        <div class="team-d-x">
          <img
            src="data:image/png;base64,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"
            alt="team-logo"
            class="team-logo-x"
          />
          <h3>{{ `${first_name} ${middle_name} ${last_name}` }}</h3>
          <h4>{{ playing_position }}</h4>
          <span>{{  }}</span>
        </div>
        <img
        :src="`${player_image}`"
          alt="player-pic"
          class="player-pic"
        />
      </div>
   
    <div class="table-slide ">
      <table class="tb-specific p-tb-spcfic">
        <tr>
              <th> <button class="sp-dbtn" @click="routeStore.togglePage">
              <ArrowIcon class="icon icon-dta" />
            </button></th>
            <th>Local ID</th>
            <th>Fifa ID</th>
            <th>Height</th>
            <th>Weight</th>
            <th>DOB</th>
            <!-- <th>DOP</th> -->
              <th>start date</th>
            <!-- <th>end date</th> -->
            <!-- <th>Team</th> -->
            <!-- <th>Former Team</th> -->
            <th>Nationality</th>
            <th>Playing position</th>
            <th>Jersey number</th>
            <th>Signature</th>
          </tr>
          <tr
            v-for="({ local_id, fifa_id, height, weight, dob,created_at, nationality, playing_position,  jersey_number, signature }, index) in searchResult"
            :key="index"
          >
          <td></td>
            <td>{{ local_id }}</td>
            <td>{{ fifa_id }}</td>
            <td>{{ height }}</td>
            <td>{{ weight }}</td>
            <td>{{ dob }}</td>
            <td>{{ created_at }}</td>
            <td>{{ nationality }}</td>
            <td>{{ playing_position }}</td>
            <td>{{ jersey_number }}</td>
            <td>{{ signature }}</td>
        </tr>
      </table>
    </div>
    </div>
</template>
<style>
@import "@/style/main.css";
@import "../../style/userspecific.css"
</style>
