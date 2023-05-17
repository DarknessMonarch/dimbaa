<script setup>
import { ref, onMounted } from "vue";
import AddPhoto from "@/components/icons/AddPhoto.vue";

const StadiumName = ref("");
const City = ref("");
const Team = ref("");
const Region = ref("");
const url = ref(null)
const input = ref(null);

const getDetails = () => {
  reset();
};


 const onFileChange  = (() => {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
  })


onMounted(() => {
  console.log(input.value)
});


const openElementImg = () => {
  console.log(input)
};

//Reset the form
const reset = () => {
  City.value = "";
  Team.value = "";
  StadiumName.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
    <form action="" method="post" @submit.prevent="getDetails" class="userform-wrapper">
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Stadium Name</label>
        <input required type="text" class="user-input" v-model="StadiumName" placeholder="Stadium Name" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team</label>
        <select required v-model="Team" class="user-input" id="add-user-select">
          <option>Manchester</option>
          <option>Chelsea</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">City</label>
        <input required type="text" class="user-input" v-model="City" placeholder="city name" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Region</label>
        <input required type="email" class="user-input" v-model="Region" placeholder="region" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Location</label>
        <input required type="text" class="user-input" v-model="location" placeholder="location" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Capacity</label>
        <input required type="text" class="user-input" zv-model="capacity" placeholder="capacity" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Stadium owner</label>
        <input required type="text" class="user-input" v-model="owner" placeholder="owner's name" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Inauguration date</label>
        <input required type="date" class="user-input" v-model="InDate" placeholder="owner's name" />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Stadium picture</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadImage()" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
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
