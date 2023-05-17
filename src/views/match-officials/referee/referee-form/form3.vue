<script setup>
// import axios from "axios";
// import { ref, onMounted, computed, watchEffect } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
// const JerseyNumber = ref("");
// const data = ref([]);

// let token = localStorage.authKey;
// const filling = ref("");

// let url = 'https://be-tblp.dimbaa.com/api/'



// //api
// const searchResult = computed(() => {
//   return data.value.filter((d) => d.jersey_number.includes(JerseyNumber.value));
// });

// const pos = searchResult.value.playing_position;
// const first = searchResult.value.first_name;
// const middle = searchResult.value.middle_name;
// const last = searchResult.value.middle_name;
// const full_name = `${first}${middle}${last}`

// watchEffect(() => {
//   if (JerseyNumber.value != '') {
//     filling.value = true;
//   } else {
//     filling.value = false;
//   }
// })

// console.log(pos.value)

// onMounted(async () => {
//   const options = {
//     method: "GET",
//     url: `${url}teammanager/players`,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   await axios
//     .request(options)
//     .then(function (response) {
//       data.value = response.data.players;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });

</script>
<template>
  <div class="form1-container r1">
  <h1>Starting squad/wanaoanza </h1>
  <!-- input container  -->
  <div class="r-conquer">
  <div class="r-divider">
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No" V-model="JerseyNumber">
    <input type="text" class="form1-input short-r"   placeholder="pos">
      <input type="text" class="form1-input short-i" placeholder="full_name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
  </div>
  <div class="r-divider">
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
  </div>
  </div>
    </div>
    <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/form.css";
@import "@/style/report.css";
</style>
