<script setup>
import axios from "axios";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const filling = ref(false);
const submitted = ref(false);
const comment1 = ref("");
const comment2 = ref("");
const mark1 = ref("");
const mark2 = ref("");
const date = ref("");
const sig = ref("");


watchEffect(() => {
  if(comment1.value != '' || comment2.value != '' || mark1.value != '' || mark2.value != '' || date.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

const reset = () => {

 comment1.value = "";
 comment2.value = "";
 mark1.value = "";
 mark2.value = "";
 sig.value = "";
}



</script>
<template>
  <div class="assess-container">
    <h2>Additional Remarks</h2>
    <div class="assess-inner">
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Assistant Referee 1</label>
          <input type="text" class="form1-input long-r" v-model="comment1"/>
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Marks:</label>
          <input type="text" class="form1-input short-r"  v-model="mark1"/>
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Assistant Referee 2</label>
          <input type="text" class="form1-input long-r" v-model="comment2" />
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Marks:</label>
          <input type="text" class="form1-input short-r"  v-model="mark2" />
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner8-r">
          <label for="">Date:</label>
          <input type="date" class="form1-input short-r"  v-model="date" />
        </div>
        <div class="asses-inner2-r inner8-r">
          <label for="">Signature:</label>
          <input type="text" class="form1-input short-r"  v-model="sig"/>
        </div>
      </div>
    </div>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" @click="reset"  :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''">Submit</button>
      </div>
  </div>
</template>
<style> 
@import "@/style/referee-asss.css";
</style>
