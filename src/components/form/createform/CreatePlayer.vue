<script setup>
import axios from "axios";
import AddPhoto from "@/components/icons/AddPhoto.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

//generate random numbers
 

const jerseyNumber = ref("");
const first = ref("");
const second = ref("");
const Weight = ref("");
const Height = ref("");
const Nationality = ref("");
const dob = ref("");
const last = ref("");
const Team = ref("");
const localID = ref("");
const fifaID = ref("");
const playerPic =ref("");
const professional_date =ref("");
const playingPosition = ref("");
const playerPosition = ref("");
const player_image = ref("");
const team_image = ref("");

function uploadTeamImage(e) {
  team_image.value = e.target.value;
}


function uploadImage(e) {
  player_image.value = e.target.value;
}

const createUser = () => {

if (password.value != confirmPassword.value) {
  error.value = "Password's don't match"
  
} else {

 const playerData = JSON.stringify({
  "team_id": Math.floor(Math.random() * 100),
  "first_name": first.value,
  "second_name": second.value,
  "last_name": last.value,
  "local_id": localID.value,
  "fifa_id": fifaID.value,
  "playing_position": playingPosition.value,
  // "player_position": playerPosition.value,  // no server implementation
  "weight": Weight.value,
  "height": Height.value,
  "nationality":Nationality.value,
  "dob":dob.value,
  "jersey_number":jerseyNumber.value,
  "professional_date":professional_date.value,
  "player_image":player_image.value,
  "team_image":team_image.value,

});  


async () => {
  const options = {
    method: "POST",
    url: "https://be-tblp.dimbaa.com/api/teammanager/players",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
    data:  playerData,
  };

 await axios
    .request(options)
    .then(function (response) {
      data.value = JSON.stringify(response.data);
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
};

}

  reset();
};


//Reset the form
const reset = () => {
 
jerseyNumber.value = "";
first.value = "";
second.value = "";
 Weight.value = "";
 Height.value = "";
 Nationality.value = "";
 dob.value = "";
 last.value = "";
 Team.value = "";
 localID.value = "";
 fifaID.value = "";
 playerPic.value = "";
 professional_date.value = "";
 playerPosition.value = "";
 player_image.value = "";
 team_image.value = "";
};

</script>
<template>
  <div class="pop-adduser-form">

    <form action="" method="post" @submit.prevent="getDetails" class="userform-wrapper">
      <div class="separator-p">
        <div class="userform-input">
          <label for="add-user-input" class="user-label">Player name</label>
          <input required type="text" class="user-input sep-r" v-model="first" placeholder="first name" />
        </div>
        <div class="userform-input">
          <input required type="text" class="user-input sep-r" v-model="second" placeholder="second name" />
        </div>
        <div class="userform-input">
          <input required type="text" class="user-input sep-r" v-model="last" placeholder="last name" />
        </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Local ID</label>
        <input required type="text" class="user-input" v-model="localID" placeholder="player id" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Fifa ID</label>
        <input required type="text" class="user-input" v-model="fifaID" placeholder="fifa id" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Height</label>
        <input required type="text" class="user-input" v-model="Height" placeholder="Height" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Weight</label>
        <input required type="text" class="user-input" v-model="Weight" placeholder="Weight" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Nationality</label>
        <input required type="text" class="user-input" v-model="Nationality" placeholder="Natonality" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">DOB</label>
        <input required type="date" class="user-input" v-model="dob" placeholder="date of birth" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">DOP</label>
        <input required  type="date" class="user-input" v-model="professional_date" placeholder="date of professional playing" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Playing position</label>
        <input required type="text" class="user-input" v-model="playingPosition" placeholder="position" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Player position</label>
        <input required type="text" class="user-input" v-model="playerPosition" placeholder="position" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Jersey number</label>
        <input required type="text" class="user-input" v-model="jerseyNumber" placeholder="User Name" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Jersey number</label>
        <input required type="text" class="user-input" v-model="jerseyNumber" placeholder="User Name" />
      </div>
     
      <div class="userform-input">
        <label for="add-user-select" class="user-label">Team:</label>
        <select required v-model="Team" class="user-input" id="add-user-select">
          <option>Manchester</option>
          <option>Chelsea</option>
        </select>
      </div>
      <div class="separator-p spe-pe">
        <div class="userform-input">
          <label for="add-user-input" class="user-label">Former team</label>
          <input required type="text" class="user-input sep-r" v-model="former" placeholder="Team" />
        </div>
        <div class="userform-input">
          <label for="add-user-input" class="user-label">Employment start date</label>
          <input required type="date" class="user-input sep-r" v-model="startDate" placeholder="start date" />
        </div>
        <div class="userform-input">
          <label for="add-user-input" class="user-label">Employment end date</label>
          <input required type="date" class="user-input sep-r" v-model="endDate" placeholder="end date" />
        </div>
      </div>
      <div class="userform-input">
         <label for="add-user-input" class="user-label">Signature</label>
        <div class="user-input signature-p">
          <h4> K.p.Msangi</h4>
        </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team logo</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadTeamImage(e)" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Player Picture</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadImage(e)" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u" @click="createUser">Add</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
