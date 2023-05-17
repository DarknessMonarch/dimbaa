<script setup>
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import { ref, onMounted } from "vue";
import AddPhoto from "@/components/icons/AddPhoto.vue";

const startDate = ref("");
const endDate = ref("");
const color = ref("");
const homegame = ref("");
const awaygame = ref("");
const picture = ref("");
const url = ref(null)
const input = ref(null);
const Kit = ref(true)
const Shirt = ref(false)
const Short = ref(false)
const Socks = ref(false)
 
const getDetails = () => {
  reset();
};


const showKit = () => {
  Kit.value = true;
  Shirt.value = false;
  Short.value = false;
  Socks.value = false;

};

const showShirt = () => {
  Shirt.value = true;
  Short.value = false;
  Socks.value = false;
  Kit.value = false;

};

const showShort = () => {
  Short.value = true;
  Shirt.value = false;
  Socks.value = false;
  Kit.value = false;

};

const showSocks = () => {
  Socks.value = true;
  Shirt.value = false;
  Short.value = false;
  Kit.value = false;

};


const onFileChange = ((e) => {
  const file = e.target.files[0];
  url.value = URL.createObjectURL(file);
})


onMounted(() => {
  console.log(input.value)
});


const openElementImg = () => {
  console.log(input)
};


const data = new FormData();
data.append('team_type', 'home');
data.append('home_team_id', homegame);
data.append('away_team_id', awaygame);
data.append('match_id', '1');
data.append('start_date', startDate);
data.append('end_date', endDate);
data.append('home_color', color);
data.append('away_color', color);
data.append('home_shirt_image', fs.createReadStream(Shirt));
data.append('home_full_kit_image', fs.createReadStream(Kit));
data.append('home_short_image', fs.createReadStream(Short));
data.append('away_shirt_image', fs.createReadStream(Shirt));
data.append('away_full_kit_image', fs.createReadStream(Kit));
data.append('away_short_image', fs.createReadStream(Short));
data.append('home_socks_image', fs.createReadStream(Socks));
data.append('away_socks_image', fs.createReadStream(Socks));

var config = {
  method: 'patch',
  url: 'https://be-tblp.dimbaa.com/api/teammanager/apparels',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



//Reset the form
const reset = () => {
  endDate.value = "";
  color.value = "";
  startDate.value = "";
};
</script>
<template>
  <div class="contained-apparel">
    <div class="apparel-c">
      <div class="apparel-container">
        <div class="apparel-d">
          <img src="@/assets/kit/fullKit.png" alt="formation" class="img-fap"
            v-show="Kit== true">
          <img src="@/assets/kit/shirt.png" alt="formation" class="img-fap"
            v-show="Shirt == true">
          <img src="@/assets/kit/short.png" alt="formation" class="img-fap"
            v-show="Short == true">
          <img src="@/assets/kit/legs.png" alt="formation" class="img-fap"
            v-show="Socks == true">
        </div>
        <div class="apparel-n">
          <button class="btn-ap" @click="showKit">
            FullKit
          </button>
          <button class="btn-ap" @click="showShirt">
            Tshirt
          </button>
          <button class="btn-ap" @click="showShort">
            Short
          </button>
          <button class="btn-ap" @click="showSocks">
            Socks
          </button>
        </div>
      </div>
    </div>

    <div class="pop-adduser-form">
      <form action="" method="post" @submit.prevent="getDetails" class="userform-wrapper apparel">
        <div class="separator-p spe-pe">
            <div class="userform-input">
              <label for="add-user-input" class="user-label">Start date</label>
              <input required type="date" class="user-input" v-model="startDate" placeholder="Start date  " />
            </div>
            <div class="userform-input">
              <label for="add-user-input" class="user-label">End date</label>
              <input required type="date" class="user-input" v-model="endDate" placeholder="End date" />
            </div>
          </div>
        <div class="divide-apparel">
          <div class="userform-input">
            <label for="add-user-input" class="user-label">Color of outfit</label>
            <input required type="text" class="user-input" v-model="color" placeholder="color" />
          </div>
      
        </div>
        <div class="userform-input">
          <label for="add-user-input" class="user-label">Outfit picture</label>
          <AddPhoto class="icon-pic-d" @click="openElementImg">
            <input ref="input" type="file" accept="image/*" @change="onFileChange(e)" class="upload-input"
              id="file-input">
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
  </div>
</template>
<style>
@import "@/style/apparel.css";
</style>
