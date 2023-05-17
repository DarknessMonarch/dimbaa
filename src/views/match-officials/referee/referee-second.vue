<script setup>
import detail from "./DetailsView.vue";
import form1 from "./referee-form/form1.vue";
import form2 from "./referee-form/form2.vue";
import form3 from "./referee-form/form3.vue";
import form4 from "./referee-form/form4.vue";
import form5 from "./referee-form/form5.vue";
import form6 from "./referee-form/form6.vue";
import form7 from "./referee-form/form7.vue";
import form8 from "./referee-form/form8.vue";
import form9 from "./referee-form/form9.vue";
import form10 from "./referee-form/form10.vue";
import form11 from "./referee-form/form11.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useNextStore } from "@/stores/next.js";
import {shallowRef, watchEffect } from "vue";


const nextStore = useNextStore();
const refereePage = shallowRef(detail);
const drawerStore = useDrawerStore();


const refereP = () => {
  refereePage.value = detail;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F1 = () => {
  refereePage.value = form1;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F2 = () => {
  refereePage.value = form2;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F3 = () => {
  refereePage.value = form3;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F4 = () => {
  refereePage.value = form4;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F5 = () => {
  refereePage.value = form5;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F6 = () => {
  refereePage.value = form6;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F7 = () => {
  refereePage.value = form7;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F8 = () => {
  refereePage.value = form8;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F9 = () => {
  refereePage.value = form9;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F10 = () => {
  refereePage.value = form10;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F11 = () => {
  refereePage.value = form11;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}



// checks the active button and sets the next button
watchEffect(() => {
  switch (refereePage.value) {
    case detail:
      if (nextStore.nextRouteState != false) {
        F1();
        console.log(nextStore.nextRouteState)
      };
      break;
    case form1:
      if (nextStore.nextRouteState != false) {
        F2()
        console.log(refereePage.value)
      };
      break;
    case form2:
      if (nextStore.nextRouteState != false) {
        F3()
        console.log(refereePage.value)
      };
      break;
    case form3:
      if (nextStore.nextRouteState != false) {
        F4()
        console.log(refereePage.value)
      };
      break;
    case form4:
      if (nextStore.nextRouteState != false) {
        F5()
        console.log(refereePage.value)
      };
      break;
    case form5:
      if (nextStore.nextRouteState != false) {
        F6()
        console.log(refereePage.value)
      };
      break;
    case form6:
      if (nextStore.nextRouteState != false) {
        F7()
        console.log(refereePage.value)
      };
      break;
    case form7:
      if (nextStore.nextRouteState != false) {
        F8()
        console.log(refereePage.value)
      };
      break;
    case form8:
      if (nextStore.nextRouteState != false) {
        F9()
        console.log(refereePage.value)
      };
      break;
    case form9:
      if (nextStore.nextRouteState != false) {
        F10()
        console.log(refereePage.value)
      };
      break;
    case form10:
      if (nextStore.nextRouteState != false) {
        F11()
        console.log(refereePage.value)
      };
      break;
    default:
      break;
  }
});


// checks the active button and sets the previous button
watchEffect(() => {
  switch (refereePage.value) {
    case form1:
      if (nextStore.previousRouteState != false) {
        refereP();
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
    case form9:
      if (nextStore.previousRouteState != false) {
        F8();
      };
      break;
    case form10:
      if (nextStore.previousRouteState != false) {
        F9();
      };
      break;
    case form11:
      if (nextStore.previousRouteState != false) {
        F10();
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
      <div class="second-t data-b">
        <button class="second-btn " @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
          <h2>Referee Form</h2>
        </div>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button class="data-n-b" @click="refereePage = detail" :class="[refereePage == detail ? 'datapage' : '']">
          Details
        </button>
        <button
          class="data-n-b"
          @click="F1"
          :class="[refereePage == form1 ? 'datapage' : '']"
        >
          1
        </button>
        <button
          class="data-n-b"
          @click="F2"
          :class="[refereePage == form2 ? 'datapage' : '']"
        >
          2
        </button>
        <button
          class="data-n-b"
          @click="F3"
          :class="[refereePage == form3 ? 'datapage' : '']"
        >
          3
        </button>
        <button
          class="data-n-b"
          @click="F4"
          :class="[refereePage == form4 ? 'datapage' : '']"
        >
          4
        </button>
        <button
          class="data-n-b"
          @click="F5"
          :class="[refereePage == form5 ? 'datapage' : '']"
        >
          5
        </button>
        <button
          class="data-n-b"
          @click="F6"
          :class="[refereePage == form6 ? 'datapage' : '']"
        >
          6
        </button>
        <button
          class="data-n-b"
          @click="F7"
          :class="[refereePage == form7 ? 'datapage' : '']"
        >
          7
        </button>
        <button
          class="data-n-b"
          @click="F8"
          :class="[refereePage == form8 ? 'datapage' : '']"
        >
          8
        </button>
        <button
          class="data-n-b"
          @click="F9"
          :class="[refereePage == form9 ? 'datapage' : '']"
        >
          9
        </button>
        <button
          class="data-n-b"
          @click="F10"
          :class="[refereePage == form10 ? 'datapage' : '']"
        >
          10
        </button>
        <button
          class="data-n-b"
          @click="F11"
          :class="[refereePage == form11 ? 'datapage' : '']"
        >
          11
        </button>
      </div>
    </div>
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="refereePage" />
    </div>
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
