<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, onMounted, watchEffect,  computed } from "vue";
import { useRouteStore } from "@/stores/route";



const url = "https://be-tblp.dimbaa.com/api/teammanager/players/";
const Team = ref("");
const router = useRouter();
const Tournament = ref("");
const City = ref("");
const Referee = ref("");
const Referee2 = ref("");
const Stadium = ref("");
const data = ref([]);
const Date = ref("");
const Away = ref("");
const Official = ref("");
const commissioner = ref("");
const playerId = ref("");

const routeStore = useRouteStore();


const general = () =>{
  router.push({ name: "general-pdf" });
}

const lineup = () =>{
  router.push({ name: "lineup-pdf" });
}

const assesor = () =>{
  router.push({ name: "assessor-pdf" });
}

const report = () =>{
  router.push({ name: "report-pdf" });
}

const post = () =>{
  router.push({ name: "post-pdf" });
}

const pre = () =>{
  router.push({ name: "pre-pdf" });
}

const getDetails = () => {

  reset();
};



//Reset the form
const reset = () => {
  Team.value = "";
  Tournament.value = "";
  City.value = "";
  Referee.value = "";
  Referee2.value = "";
  Stadium.value = "";
  Date.value = "";
  Away.value = "";
  Official.value = "";
  commissioner.value = "";
};

watchEffect(() => {
  playerId.value = routeStore.playerID
})




//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.id.includes(2));
});

console.log(data.value)

onMounted(async () => {
  const options = {
    method: "GET",
    url:`${url}` ,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.players;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
  });
</script>
<template>
  <div class="pop-adduser-form">
    <div class="view-info-tb">
          <table>
        <tr>
          <th>TeamA</th>
          <th>TeamB</th>
          <th>date&time</th>
          <th>stadium</th>
        </tr>
        <tr
        v-for="(
            { date, home_team_id, away_team_id, stadium }, index
          ) in data"
          :key="index"
        >
          <td>{{ home_team_id }}</td>
          <td>{{ away_team_id }}</td>
          <td>{{ date }}</td>
          <td>{{ stadium }}</td>
        </tr>
      </table>
        </div>
      <div class="match-wrapper">
        <div class="match-wrapper1">
          <div class="match-container">
            <label for="match-select" class="match-label">Line UP Report team A</label>
            <button type="submit" class="btn-Vi" @click="lineup">View</button>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Line UP Report team B</label>
            <button type="submit" class="btn-Vi" @click="lineup">View</button>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Pre-Match Report</label>
            <button type="submit" class="btn-Vi" @click="pre">View</button>
          </div>
        </div>
        <div class="match-wrapper2">
          <div class="match-container">
            <label for="match-select" class="match-label">Post-Match Report </label>
            <button type="submit" class="btn-Vi" @click="post">View</button>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Referee</label>
            <button type="submit" class="btn-Vi" @click="report">View</button>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Referee Assesor</label>
            <button type="submit" class="btn-Vi" @click="assesor">View</button>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">general commissioner</label>
            <button type="submit" class="btn-Vi" @click="general">View</button>
          </div>
        </div>
      </div>
  </div>
</template>
<style>
@import "@/style/match.css";
</style>
