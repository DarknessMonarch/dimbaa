<script setup>
import { useDrawerStore } from "@/stores/drawer";
import { ref, onMounted } from "vue";
import axios from "axios";


const drawerStore = useDrawerStore();
const data = ref([]);

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}/admin/teams`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.teams;
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
              <th>name</th>
              <th>region</th>
              <th>stadium id</th>
              <th>Line Up Form</th>
          </tr>
          <tr
        v-for="(
            {  id, name, region, stadium_id  }, index
          ) in data"
          :key="index"
        >
        
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ region }}</td>
          <td>{{ stadium_id }}</td>
          <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.toggleSecond()">Upload</a>
                </div>
                <div class="table-link">
                  <a href="#">View</a>
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

