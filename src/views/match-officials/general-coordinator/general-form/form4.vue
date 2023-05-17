<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";
const nextStore = useNextStore();

</script>
<template>
  <div class="form4-container ">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w count-d-c">
        <h3>
          Was there any incident during the team check
          <div class="count-i">
            <input type="radio" id="yes" value="yes" v-model="yes" />
            <label for="ascending">Yes</label>
            <input type="radio" id="No" value="No" v-model="No" />
            <label for="ascending">No</label>
          </div>
        </h3>
      </div>

      <div class="form4-w form5-i">
        <label for="">If No, why?</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="form4-container ">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w count-d-c">
        <h3>
          Condition of the pitch:
          <div class="count-i">
            <input type="radio" id="Good" value="Good" v-model="Good" />
            <label for="ascending">Good</label>
            <input type="radio" id="Average" value="Average" v-model="Average" />
            <label for="ascending">Average</label>
            <input type="radio" id="Bad" value="Bad" v-model="Bad" />
            <label for="ascending">Bad</label>
          </div>
        </h3>
      </div>
    </div>
    </div>
  </div>
  <div class="form4-container ">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w count-d-c">
        <h3>
          Condition of the dressing room:
          <div class="count-i">
            <input type="radio" id="Good" value="Good" v-model="Good" />
            <label for="ascending">Good</label>
            <input type="radio" id="Average" value="Average" v-model="Average" />
            <label for="ascending">Average</label>
            <input type="radio" id="Bad" value="Bad" v-model="Bad" />
            <label for="ascending">Bad</label>
          </div>
        </h3>
      </div>
    </div>
    </div>
  </div>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w f4-w">
        <h3>
          Strecher:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="count-down-w f4-w">
        <h3>
          Ambulance:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="form4-w">
        <label for="">On the pole</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="type here"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form4-wrapper">
   
      <div class="form4-w">
        <label for="">On the pole</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w f4-w">
        <h3>
          Infotainment:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="count-down-w f4-w">
        <h3>
          Giant screen:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="count-down-w f4-w">
        <h3>
          Announcer:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      </div>
      </div>
      <div class="form1-btn">
        <button class="btn1 btn1-a">Reset</button>
        <button class="btn1 btn1-b hide-m">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/form.css";
@import "@/style/form4.css";
</style>
