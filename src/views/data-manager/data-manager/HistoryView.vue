<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";
import PlayerDetails from "@/components/specific/PlayerComponent.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(PlayerDetails);
const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const showPage = ref(false);
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
  <component :is="activePage" v-if="showPage == true" />
  <div class="upcoming-container-r" v-else>
    <div class="upcoming-wrapper-r">
      <div class="table-slide">
        <table>
        <tr>
          <th>Round</th>
          <th>Number</th>
          <th>Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Venue</th>
          <th>City</th>
          <th>Action</th> 
        </tr>
        <tr
        v-for="(
            { round, city, venue, date, id, home_team_id, away_team_id,  }, index
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
                <a href="#"  @click="openCreate">Edit</a>
              </div>
            </div>
          </td>
        </tr>
      </table>
      </div>
    </div>
    <div>
    </div>
    <div>
      <PopUP title="Edit match" v-if="check == true">
      <EditMatch/>  
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/upcoming.css";
</style>
