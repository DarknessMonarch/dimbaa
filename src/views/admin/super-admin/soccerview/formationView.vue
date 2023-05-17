<script setup>
import { ref } from "vue";
import PopUP from "@/components/drawer/popup.vue";
import { useDrawerStore } from "@/stores/drawer";
import AddPhoto from "@/components/icons/AddPhoto.vue";
import DeleteFormation from "@/components/form/deleteForm/DeleteFormation.vue";


const check = ref(null);
const inputImg =  ref(null);
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
    <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
            <th>Type of formation</th>
            <th>Image of formation</th>
            <th>Action</th>

          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr>
            <td>4-3-3 Attack-minded-midfield</td>
            <td>
              <div class="tbl-formation">
      <img src="../../../../assets/formation/433Attack-minded-midfield.jpg" alt="formation" class="tbl-img-formation">
    </div>
            </td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="openF">Edit</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="deleteF">Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <PopUP title="Add formation" v-if="check == true">
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
      <input type="text" class="formation-input" v-model="inputF" placeholder="4-3-3 Attack-minded-midfield"
        @change="show">
    </div>
    <div class="show-formation">
      <img src="../../../../assets/formation/433Attack-minded-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Attack-minded-midfield'">
      <img src="../../../../assets/formation/433Defensive-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Defensive-midfield'">
      <img src="../../../../assets/formation/442Diamond-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Diamond-midfield'">
      <img src="../../../../assets/formation/442Flat-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Flat-midfield'">
    </div>

  </div>
    </PopUP>
    <PopUP title="Delete formation" v-else>
        <DeleteFormation />
      </PopUP>
  </div>

</template>
<style>
@import "@/style/formation.css";
</style>  