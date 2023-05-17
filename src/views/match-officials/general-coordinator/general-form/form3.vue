<script setup>
import axios from "axios";
import { ref, watchEffect, onMounted } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const tff = ref(null);
const fair = ref(null);
const benches = ref(null);
const bearers = ref(null);
const ball = ref(null);
const teams = ref(null);
const behaviour = ref(null);
const match = ref(null);
const mDate = ref("");
const mwhy = ref("");
const fwhy = ref("");
const Bwhy = ref("");
const comment = ref("");
const tffpole = ref("");
const fpole = ref("");
const filling = ref("");

watchEffect(() => {
  if (
    tff.value != null ||
    fair.value != null||
    benches.value != null ||
    bearers.value != null ||
    mwhy.value != "" ||
    fwhy.value != "" ||
    comment.value != "" ||
    tffpole.value != "" ||
    fpole.value != ""
  ) {
    filling.value = true;
  } else {
    filling.value = false;
  }
});

const reset = () => {
  tff.value = "";
  fair.value = "";
  benches.value = "";
  bearers.value = "";
  ball.value = "";
  teams.value = "";
  behaviour.value = "";
  match.value = "";
  mDate.value = "";
  mwhy.value = "";
  fwhy.value = "";
  tffpole.value = "";
  fpole.value = "";
};

const Submit = () => {
  const data = JSON.stringify({
    match: "quam",
    meeting_held: match,
    date: mDate,
    why: mwhy,
    comment: comment,
    tff_flag: tff,
    tff_pole: tffpole,
    fair_flag: fair,
    fair_pole: fpole,
    Position_benches: benches,
    Position_why: Bwhy,
    flag_bearers: bearers,
    Ball_boys: bearers,
    Team_escorts: bearers,
    Team_behaviour: behaviour,

  });

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


  onMounted(async () => {
    const options = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${url}general-coordinator/coordination-meeting`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
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
};
</script>
<template>
  <div class="form1-container">
    <!-- input container  -->
    <div class="count-down-w count-d-c c3 f2-i">
      <h3>
        Match coordination meeting held:
        <div class="count-i">
          <!-- custom made radio  -->
          <div class="radio-wrapper" @click="match = true">
            <div class="inner-radio" v-show="match == true"></div>
          </div>
          <label for="">Yes</label>
          <!-- custom made radio  -->
          <div class="radio-wrapper" @click="match = false">
            <div class="inner-radio" v-show="match == false"></div>
          </div>
          <label for="">No</label>
          <!-- custom made radio  -->
        </div>
      </h3>
    </div>

    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Meeting Date</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="date"
            v-bind="mDate"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">If no why?</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Explain here"
            v-bind="mwhy"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Comment</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type"
            v-bind="comment"
          />
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
            TFF flag raised:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="tff = true">
                <div class="inner-radio" v-show="tff == true"></div>
              </div>
              <label for="">Yes</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="tff = false">
                <div class="inner-radio" v-show="tff == false"></div>
              </div>
              <label for="">No</label>
              <!-- custom made radio  -->
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
              v-bind="tffpole"
            />
          </div>
        </div>
      </div>
      <!-- input container  -->
      <div class="form4-wrapper">
        <div class="count-down-w f4-w">
          <h3>
            Play Fair flag raised:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="fair = true">
                <div class="inner-radio" v-show="fair == true"></div>
              </div>
              <label for="">Yes</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="fair = false">
                <div class="inner-radio" v-show="fair == false"></div>
              </div>
              <label for="">No</label>
              <!-- custom made radio  -->
            </div>
          </h3>
        </div>
        <div class="form4-w">
          <label for="">On the pole</label>
          <div class="form4-i">
            <input
              type="text"
              class="form1-input short-i"
              placeholder="Type here"
              v-bind="fpole"
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
        <div class="count-down-w count-d-c">
          <h3>
            Position of benches respected by both team:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="benches = true">
                <div class="inner-radio" v-show="benches == true"></div>
              </div>
              <label for="">Yes</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="benches = false">
                <div class="inner-radio" v-show="benches == false"></div>
              </div>
              <label for="">No</label>
              <!-- custom made radio  -->
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
              v-bind="Bwhy"
            />
          </div>
        </div>
      </div>
      <!-- input container  -->
      <div class="form4-wrapper">
        <div class="count-down-w count-d-c1">
          <h3>
            Perfomance of flag bearers:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="bearers = 'Good'">
                <div class="inner-radio" v-show="bearers == 'Good'"></div>
              </div>
              <label for="">Good</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="bearers = 'Average'">
                <div class="inner-radio" v-show="bearers == 'Average'"></div>
              </div>
              <label for="">Average</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="bearers = 'Bad'">
                <div class="inner-radio" v-show="bearers == 'Bad'"></div>
              </div>
              <label for="">Bad</label>
            </div>
          </h3>
        </div>
        <div class="count-down-w count-d-c1">
          <h3>
            Perfomance of Ball Boys:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="ball = 'Good'">
                <div class="inner-radio" v-show="ball == 'Good'"></div>
              </div>
              <label for="">Good</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="ball = 'Average'">
                <div class="inner-radio" v-show="ball == 'Average'"></div>
              </div>
              <label for="">Average</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="ball = 'Bad'">
                <div class="inner-radio" v-show="ball == 'Bad'"></div>
              </div>
              <label for="">Bad</label>
            </div>
          </h3>
        </div>
        <div class="count-down-w count-d-c1">
          <h3>
            Perfomance of Team escorts:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="teams = 'Good'">
                <div class="inner-radio" v-show="teams == 'Good'"></div>
              </div>
              <label for="">Good</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="teams = 'Average'">
                <div class="inner-radio" v-show="teams == 'Average'"></div>
              </div>
              <label for="">Average</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="teams = 'Bad'">
                <div class="inner-radio" v-show="teams == 'Bad'"></div>
              </div>
              <label for="">Bad</label>
            </div>
          </h3>
        </div>
        <div class="count-down-w count-d-c1">
          <h3>
            Behaviour of the Two teams:
            <div class="count-i">
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="behaviour = 'Good'">
                <div class="inner-radio" v-show="behaviour == 'Good'"></div>
              </div>
              <label for="">Good</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="behaviour = 'Average'">
                <div class="inner-radio" v-show="behaviour == 'Average'"></div>
              </div>
              <label for="">Average</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="behaviour = 'Bad'">
                <div class="inner-radio" v-show="behaviour == 'Bad'"></div>
              </div>
              <label for="">Bad</label>
            </div>
          </h3>
        </div>
      </div>
    </div>

    <div class="form1-btn">
      <button class="btn1 btn1-a">Reset</button>
      <button class="btn1 btn1-b hide-m">Save draft</button>
      <button
        class="btn1 btn1-b"
        :class="filling == true ? 'filling' : ''"
        @click="nextStore.updatePreviousState()"
      >
        Previous
      </button>
      <button
        class="btn1 btn1-b"
        :class="filling == true ? 'filling' : ''"
        @click="nextStore.updateNextState()"
      >
        Next
      </button>
    </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>
