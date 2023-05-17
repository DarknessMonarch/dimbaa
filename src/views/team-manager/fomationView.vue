<script setup>
import { ref } from "vue";
import { useNextStore } from "@/stores/next.js";
import { useDrawerStore } from "@/stores/drawer";
import AddPhoto from "@/components/icons/AddPhoto.vue";


const check = ref(null);
const inputImg =  ref(null);
const nextStore = useNextStore();
const drawerStore = useDrawerStore();
const inputF = ref("4-3-3 Attack-minded-midfield");

const addImg = () => {
  inputImg.value.click;
}

const getImage = (e) => {
  inputImg.value = e.target.files[0]; 
  console.log(e)
}


const openF = () => {
  check.value = true;
  drawerStore.togglePop();
};

const deleteF = () => {
  check.value = false;
  drawerStore.togglePop();
};


const show = () => {
  switch (inputF.value) {
    case "4-3-3 Attack-minded-midfield":

      break;
    case "4-3-3 Defensive-midfield":
      break;
    case "4-4-2 Diamond-midfield":
      break;  
    case "4-4-2 Flat-midfield":
      break;
    default:
      break;
  }

}

</script>
<template>
   <div class="main-container">
      <div class="formation-s">
    <div class="formation-con">
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Add formation picture</label>
       <AddPhoto class="icon-pic-d" @click="addImg" v-if="inputImg == null">
       </AddPhoto>
       <div class="f-f-a" v-else>
          <img :src="inputImg" class="input-f-img" />
        </div>
       <input class="formation-btn" type="file" accept="image/*" v-on:change="getImage(e)">
      </div>
      <label for="" class="formation-la">choose formation</label>
      <input type="text" class="formation-input  input-f-line" v-model="inputF" placeholder="4-3-3 Attack-minded-midfield"
        @change="show">
    </div>
    <div class="show-formation">
      <img src="@/assets/formation/433Attack-minded-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Attack-minded-midfield'">
      <img src="@/assets/formation/433Defensive-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Defensive-midfield'">
      <img src="@/assets/formation/442Diamond-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Diamond-midfield'">
      <img src="@/assets/formation/442Flat-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Flat-midfield'">
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
@import "@/style/formation.css";
@import "@/style/user.css";
</style>