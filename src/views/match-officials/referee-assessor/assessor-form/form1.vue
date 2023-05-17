<script setup>
import axios from "axios";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import InfoIcon from "@/components/icons/InfoIcon.vue";
import PopUP from "@/components/drawer/popup.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useNextStore } from "@/stores/next.js";

const drawerStore = useDrawerStore();
const nextStore = useNextStore();
const check = ref(false);
const fullname = ref();
const filterName = ref()

const openInfo = () => {
  check.value = true;
  drawerStore.togglePop();
};

// update on changes
watchEffect(() => {
  open.value = drawerStore.popDrawer;
  filterName.value = fullname.value;
});


let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}referee-assessor/list-match-events`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.events;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});


//show data based on name
const filter = computed(() => {
  return data.value.filter((d) => d.name.includes(filterName.value));
});


</script>
<template>
  <div class="form1-container r1">
    <div class="form1-ra">
      <h1>Refeering Assistants</h1>
      <CircleDraw class="c-ra desktop-info"  @click="openInfo">
        <InfoIcon class="icon icon-ra" />
      </CircleDraw>
    </div>
    <!-- input container  -->
    <div class="r-conquer ra-conquer">
      <div class="form1-wrapper r-f">
        <div class="form1-i">
          <div class="r-input">
            <label for="">Name</label>
            <div class="report-12 short-1ra">
              <label for="">Full Name</label>
              <input type="text" class="form1-input short12ra" v-bind="fullname"   placeholder="predefined"/>
            </div>
            <div class="report-12 short-1ra">
              <label for="">Referee Reg No </label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">District </label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Region </label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Tel Number</label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Email</label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Game No. (TOL)</label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Game No. (Other)</label>
              <input type="text" class="form1-input short12ra" />
            </div>
            <div class="report-12 short-1ra">
              <label for="">Match Payment</label>
              <input type="text" class="form1-input short12ra" />
            </div>
          </div>
          <div class="r-input ri-rc">
            <label for="">Region</label>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
          </div>
          <div class="r-input ri-rc">
            <label for="">Difficulty</label>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
          </div>
          <div class="r-input">
            <label for="">Marks</label>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
          </div>
          <div class="r-input">
            <label for="">Marks</label>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
            <div class="report-12">
              <input type="text" class="form1-input short-ra" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  <div class="mobile-info">
    <CircleDraw class="c-ra" @click="openInfo">
        <InfoIcon class="icon icon-ra" />
      </CircleDraw>
  </div>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" @click="reset"  :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
  <PopUP v-if="check == true">
    <div class="info-detail-r">
      <p><span>9.0 – 10</span> NZURI SANA SANA/EXCELLENT</p>
      <p><span>8.5 - 8.9</span> NZURI Sana (very good)</p>
      <p><span>8.3 - 8.4</span>Nzuri (good)</p>
      <p>
        <span>8.2</span>AnafaaKuendelezwa (satisfactory with small areas of
        improvement)
      </p>
      <p>
        <span>8.0 - 8.1</span>Anaridhisha, afikiriwekuendelezwa (satisfactory
        with important areas of improvement)
      </p>
      <p>
        <span>7.9</span>Amefanyakosamuhimukwenyemchezo, alistahilikupewa 8.2
      </p>
      <p>
        <span>7.8</span>Amefanyakosamuhimukwenyemchezolakinialistahilikupata 8.0
        – 8.1
      </p>
      <p>
        <span>7.5 - 7.7</span>ChiniyaMatarajio, mambo
        yamsingianatakiwakurekebishwa(below expectations, significant points
        forimprovement)
      </p>
      <p>
        <span>7.0 - 7.4</span>Kiwango cha chini, amefanyakosamoja la wazina la
        msingi(disappointing, below expectations with one clear important
        mistake)
      </p>
      <p><span>6.0 - 6.9</span>Kiwangokisichokubalika (UNACCEPTABLE)</p>
     <div class="info-add-r">
      <h4>
        level of dificulty must be integrated into the mark and should be
        assessed for official separately
      </h4>
      <p>
        <span>3</span>Very difficult match with many situationa for the
        official
      </p>
      <p><span>2</span>Difficult match with situations for the official</p>
      <p>
        <span>1</span>Normal match for the official, few chalenging
        situtations
      </p>
     </div>
    </div>
  </PopUP>
</template>
<style>
@import "@/style/form.css";
@import "@/style/report.css";
@import "@/style/assessor.css";
</style>
