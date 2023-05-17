<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const drawerStore = useDrawerStore();
const router = useRouter();
const data = ref([]);

const showPdf = () =>{
  router.push({ name: "report-pdf" });
}

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
    <div class="user-content">
      <!-- <h2></h2> -->
      <div class="table-slide">
        <table>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>City</th>
            <th>Ref report</th>
          </tr>
          <tr
        v-for="(
            { city, venue, date, id, home_team_id, away_team_id,  }, index
          ) in data"
          :key="index"
        >
          <td>{{ id }}</td>
          <td>{{ date }}</td>
          <td>{{ home_team_id }}</td>
          <td>{{ away_team_id }}</td>
          <td>{{ venue }}</td>
          <td>{{ city }}</td>
          <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.toggleSecond()">Upload</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="showPdf">View</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>
<style>
    
</style>