<script setup>
import { ref } from "vue";
import AddPhoto from "@/components/icons/AddPhoto.vue";


const Region = ref("");
const TeamName = ref("");
const inputImg =  ref(null);

const getTeam = () => {

  reset();
};


const addImg = () => {
  inputImg.value.click;
}


const getImage = (e) => {
  inputImg.value = e.target.files[0]; 
  console.log(e)
}

const onFileChange  = (() => {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
  })

  const openElementImg = () => {
  console.log(input)
};


//Reset the form
const reset = () => {
  Region.value = "";
  TeamName.value = "";
  Stadium.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="userform-wrapper"
    >
      <div class="userform-input">
        <label for="add-user-select" class="user-label">Region</label>
        <select
          required
          v-model="Region"
          class="user-input"
          id="add-user-select"
        >
          <option>Region 1</option>
          <option>Region 2</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="TeamName"
          placeholder="Tean Name"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team logo</label>
       <AddPhoto class="icon-pic-d" @click="addImg" v-if="inputImg == null">
       </AddPhoto>
       <div class="f-f-a" v-else>
          <img :src="inputImg" class="input-f-img" />
        </div>
       <input class="formation-btn" type="file" accept="image/*" v-on:change="getImage(e)">
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
@import "@/style/formation.css";
</style>
