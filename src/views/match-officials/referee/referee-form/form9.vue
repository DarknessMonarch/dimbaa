<script setup>
import FormA from "./9Form/formA.vue";
import FormB from "./9Form/formB.vue";
import FormC from "./9Form/formC.vue";
import { shallowRef } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const refereePage = shallowRef(FormA);
</script>
<template>
  <div class="form1-container r1">
    <!-- inner content  -->
    <div class="referee-inner-x">
      <component :is="refereePage" />
    </div>
    <!-- inner content  -->
    <div class="report-nav">
      <button
        class="form-n-b"
        @click="refereePage = FormA"
        :class="[refereePage == FormA ? 'datapage' : '']"
      >
        A
      </button>
      <button
        class="form-n-b"
        @click="refereePage = FormB"
        :class="[refereePage == FormB ? 'datapage' : '']"
      >
        B
      </button>
      <button
        class="form-n-b"
        @click="refereePage = FormC"
        :class="[refereePage == FormC ? 'datapage' : '']"
      >
        C
      </button>
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
@import "@/style/form.css";
@import "@/style/report.css";
</style>
