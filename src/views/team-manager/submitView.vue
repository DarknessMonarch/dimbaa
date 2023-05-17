<script setup>
import { useNextStore } from "@/stores/next.js";
import { getApi } from "@/components/composable/getData.js";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const nextStore = useNextStore();
const acknowledge = ref(false);
const message = ref(null);
const data = ref();


let url = 'https://be-tblp.dimbaa.com/api/'
let token = localStorage.authKey;

const info = getApi(
  `${url}admin/teams`,
  `Bearer ${token}`,
);


const Submit = () => {
  const data = JSON.stringify({
    team: info.id,
  });

  onMounted(async () => {
    const options = {
      method: "POST",
      url: `${url}teammanager/team-players/submit`,
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
};
</script>
<template>
  <div class="form1-container r9">
    <!-- form input container  -->
    <div class="form-ark">
      <input type="checkbox" id="checkbox" v-model="acknowledge" />
      <h1>
        I confirm that this form has the correct team mentioned playing with
      </h1>
    </div>
    <div class="form9-r">
      <label for="">Team of</label>
      <div type="text" class="form1-input i-r8">
        <span>{{ info.team }}</span>
      </div>
    </div>
    <div class="form9-r">
      <label for="">Current Date</label>
      <div type="text" class="form1-input i-r8">
        <span>{{ info.date }}</span>
      </div>
    </div>
    <!-- form input container  -->
    <div class="form9-r">
      <label for="">Manager's Signature</label>
      <div type="text" class="form1-input i-r8">
        <span>Predefined</span>
      </div>
    </div>
    <div class="form9-r">
      <label for="">Coach's Signature</label>
      <div type="text" class="form1-input i-r8">
        <span>Predefined</span>
      </div>
    </div>
  </div>
  {{ message }}
  <!-- form input container  -->
  <div class="btn1-center">
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
      <button class="btn1 btn1-b" v-if="acknowledge == true" @click="Submit">
        Submit
      </button>
      <button class="btn1 btn1-b" v-else disabled>Submit</button>
    </div>
  </div>
</template>
<style>
@import "@/style/report.css";
</style>
