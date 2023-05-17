<script  setup>
import { useDrawerStore } from "@/stores/drawer";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const drawerStore = useDrawerStore();
const router = useRouter();
const data = ref([]);

const showPdf = () =>{
  router.push({ name: "post-pdf" });
}

const showPdf2 = () =>{
  router.push({ name: "pre-pdf" });
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
      <div class="table-slide">
        <table>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>City</th>
            <th>Pre match Report</th>
            <th>Post match Report</th>
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
                  <a href="#" @click="drawerStore.togglePre()">Upload</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="showPdf2">View</a>
                </div>
              </div>
            </td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.togglePost()">Upload</a>
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