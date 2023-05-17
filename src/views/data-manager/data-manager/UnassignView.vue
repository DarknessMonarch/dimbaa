<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import { ref, onMounted, watchEffect } from "vue";
import PopUP from "@/components/drawer/popup.vue";
import AssignMatch from "@/components/form/createform/AssignMatch.vue";

const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const check = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};

console.log(authStore.userName);

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

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}data-manager/list-match-events`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.match;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <div class="main-container">
    <!-- inner data content -->
    <div class="user-content">
      <form action="">
        <div class="user-content">
        <div class="table-slide">
          <table>
            <tr>
              <th>Round</th>
              <th>Date</th>

              <th>Number</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Venue</th>
              <th>City</th>
              <th>Actiion</th>
            </tr>
            <tr
              v-for="(
                { round, city, venue, date, id, home_team_id, away_team_id },
                index
              ) in data"
              :key="index"
            >
              <td>{{ round }}</td>
              <td>{{ id }}</td>
              <td>{{ date }}</td>
              <td>{{ home_team_id }}</td>
              <td>{{ away_team_id }}</td>
              <td>{{ venue }}</td>
              <td>{{ city }}</td>
              <td>
            <div class="table-link-c">
              <div class="table-link">
                <a href="#"  @click="openCreate">Assign</a>
              </div>
            </div>
          </td>
            </tr>
          </table>
        </div>
      </div>
      </form>
    </div>
    <div>
    </div>
    <div>
      <PopUP title="" v-if="check == true">
        <AssignMatch />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/data.css";
@import "@/style/main.css";
</style>
