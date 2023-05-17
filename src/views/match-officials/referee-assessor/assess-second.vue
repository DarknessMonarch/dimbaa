<script setup>
import details from "./detailView.vue";
import form1 from "./assessor-form/form1.vue";
import form2 from "./assessor-form/form2.vue";
import form3 from "./assessor-form/form3.vue";
import form4 from "./assessor-form/form4.vue";
import form5 from "./assessor-form/form5.vue";
import form6 from "./assessor-form/form6.vue";
import form7 from "./assessor-form/form7.vue";
import form8 from "./assessor-form/form8.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useNextStore } from "@/stores/next.js";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { shallowRef , watchEffect} from 'vue'

const nextStore = useNextStore();
const drawerStore = useDrawerStore();
const dataPage = shallowRef(details);


const detailP = () => {
  dataPage.value = details;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F1 = () => {
  dataPage.value = form1;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F2 = () => {
  dataPage.value = form2;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F3 = () => {
  dataPage.value = form3;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F4 = () => {
  dataPage.value = form4;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F5 = () => {
  dataPage.value = form5;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F6 = () => {
  dataPage.value = form6;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F7 = () => {
  dataPage.value = form7;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F8 = () => {
  dataPage.value = form8;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}



// checks the active button and sets the next button
watchEffect(() => {
  switch (dataPage.value) {
    case details:
      if (nextStore.nextRouteState != false) {
        F1();
        console.log(nextStore.nextRouteState)
      };
      break;
    case form1:
      if (nextStore.nextRouteState != false) {
        F2()
        console.log(dataPage.value)
      };
      break;
    case form2:
      if (nextStore.nextRouteState != false) {
        F3()
        console.log(dataPage.value)
      };
      break;
    case form3:
      if (nextStore.nextRouteState != false) {
        F4()
        console.log(dataPage.value)
      };
      break;
    case form4:
      if (nextStore.nextRouteState != false) {
        F5()
        console.log(dataPage.value)
      };
      break;
    case form5:
      if (nextStore.nextRouteState != false) {
        F6()
        console.log(dataPage.value)
      };
      break;
    case form6:
      if (nextStore.nextRouteState != false) {
        F7()
        console.log(dataPage.value)
      };
      break;
    case form7:
      if (nextStore.nextRouteState != false) {
        F8()
        console.log(dataPage.value)
      };
      break;
    default:
      break;
  }
});



// checks the active button and sets the previous button
watchEffect(() => {
  switch (dataPage.value) {
    case form1:
      if (nextStore.previousRouteState != false) {
        detailP();
      };
      break;
    case form2:
      if (nextStore.previousRouteState != false) {
        F1();
      };
      break;
    case form3:
      if (nextStore.previousRouteState != false) {
        F2();
      };
      break;
    case form4:
      if (nextStore.previousRouteState != false) {
        F3();
      };
      break;
    case form5:
      if (nextStore.previousRouteState != false) {
        F4();
      };
      break;
    case form6:
      if (nextStore.previousRouteState != false) {
        F5();
      };
      break;
    case form7:
      if (nextStore.previousRouteState != false) {
        F6();
      };
      break;
    case form8:
      if (nextStore.previousRouteState != false) {
        F7();
      };
      break;
    default:
      break;
  }
});

</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details data-b second-t">
        <button class="second-btn second-m" @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-second" />
        </button>
        <span>Referee Assessor form</span>
      </div>
    </div>
    <div class="team-b-txt">
    <div class="second-t">
        <button class="second-btn" @click="drawerStore.toggleSecond()">
        <ArrowIcon class="icon icon-second" />
      </button>
      <h1>Referee Assesor form</h1>
    </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">

<button class="data-n-b" @click="detailP" :class="[dataPage == details ? 'datapage' : '']">
  Details
</button>

<button class="data-n-b" @click="F1" :class="[dataPage == form1 ? 'datapage' : '']">
  1
</button>
<button class="data-n-b" @click="F2" :class="[dataPage == form2 ? 'datapage' : '']">
  2
</button>
<button class="data-n-b" @click="F3" :class="[dataPage == form3 ? 'datapage' : '']">
  3
</button>
<button class="data-n-b" @click="F4" :class="[dataPage == form4 ? 'datapage' : '']">
  4
</button>
<button class="data-n-b" @click="F5" :class="[dataPage == form5 ? 'datapage' : '']">
  5
</button>
<button class="data-n-b" @click="F6" :class="[dataPage == form6 ? 'datapage' : '']">
  6
</button>
<button class="data-n-b" @click="F7" :class="[dataPage == form7 ? 'datapage' : '']">
  7
</button>
<button class="data-n-b" @click="F8" :class="[dataPage == form8 ? 'datapage' : '']">
  8
</button>
</div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="dataPage" />
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
