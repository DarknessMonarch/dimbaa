<script setup>
import { ref } from "vue";
const jerseyNumber = ref("");
const first = ref("");
const second = ref("");
const last = ref("");
const Team = ref("");
const Email = ref("");
const Mobile = ref("");

const getDetails = () => {
  //   console.log(
  //     jerseyNumber.value,
  //     mobile.value,
  //     Team.value,
  //     PlayerNumber.value,
  //     email.value,
  //     Team.value
  //   );

  reset();
};

//Reset the form
const reset = () => {
  Email.value = "";
  Mobile.value = "";
  Team.value = "";
  first.value = "";
  second.value = "";
  last.value = "";
  playerName.value = "";
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
        <label for="add-user-input" class="user-label">Natonality</label>
        <input required type="text" class="user-input" v-model="Natonality" placeholder="Natonality" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">DOB</label>
        <input required type="text" class="user-input" v-model="dob" placeholder="date of birth" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">DOP</label>
        <input required type="text" class="user-input" v-model="dop" placeholder="date of professional playing" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Natonality</label>
        <input required type="text" class="user-input" v-model="Natonality" placeholder="Natonality" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Playing postion</label>
        <input required type="text" class="user-input" v-model="position" placeholder="position" />
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
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Add</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
