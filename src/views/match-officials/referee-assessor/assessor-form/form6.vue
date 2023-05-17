<script setup>
import axios from "axios";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const filling = ref(false);
const submitted = ref(false);
const performance = ref("");
const improvements = ref("");
const comment = ref("");
const Iminutes = ref("");
const Pminutes = ref("");
const points = ref("");

watchEffect(() => {
  if(performance.value != '' || improvements.value != '' || Iminutes.value != '' || Pminutes.value != '' || points.value != '' || comment.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

const reset = () => {
 performance.value = "";
 improvements.value = "";
 comment.value = "";
 Iminutes.value = "";
Pminutes.value = "";
 points.value = "";
}

const isSubmitted = () => {



const data = JSON.stringify({
  "match": performance.value,
  "area_of_improvements": [
    {
      "area_of_improvements": improvements.value,
      "minutes": Iminutes.value
    }
  ],
  "positive_points": [
    {
      "positive_points": points.value,
      "minutes": Pminutes,
    }
  ]
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method:"POST",
    url: `${url}referee-assessor/assistant-referee-evaluation/two`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data:  data,
  };

 await axios
    .request(options)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
});

reset();

}


</script>
<template>
  <div class="assess-container">
    <h2>Evaluation of the Assistant Referee 2</h2>
    <div class="assess-inner">
      <div class="assess-wrapper">
        <div class="assess-i">
          <h1>Key points</h1>
          <li>
            <ol>
              <p>
              Accuracy of signals: Offside situations, foul, throw ins, goal kick etc
              </p>
              <p>
                Positioning and Movement
              </p>
              <p>
                Flag technique
              </p>
            </ol>
          </li>
        </div>
        <div class="assess-ir">
          <label for="">Perfomance:</label>
          <input type="text" placeholder="Type here" class="form1-input" v-model="performance" />
        </div>
      </div>
    <!-- styling part 2  -->
    <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Positive Points:</label>
          <input type="text" class="form1-input long-r" v-model="points"/>
          <!-- <input type="text" class="form1-input long-r" /> -->
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" v-model="Pminutes " />
          <!-- <input type="text" class="form1-input short-r" /> -->
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Area of improvement:</label>
          <input type="text" class="form1-input long-r" v-model="improvements"/>
          <!-- <input type="text" class="form1-input long-r" /> -->
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" v-model="Iminutes"/>
          <!-- <input type="text" class="form1-input short-r" /> -->
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Additional comments on control of the game:</label>
          <input type="text" class="form1-input long-r" v-model="comment"/>
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
@import "@/style/referee-asss.css";
</style>
