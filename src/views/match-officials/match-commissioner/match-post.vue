<script setup>
import match from "./post/match.vue";
import form1 from "./post/form1.vue";
import form2 from "./post/form2.vue";
import form3 from "./post/form3.vue";
import form4 from "./post/form4.vue";
import form5 from "./post/form5.vue";
import form6 from "./post/form6.vue";
import form7 from "./post/form7.vue";
import form8 from "./post/form8.vue";
import form9 from "./post/form9.vue";
import form10 from "./post/form10.vue";
import form11 from "./post/form11.vue";
import form12 from "./post/form12.vue";
import form13 from "./post/form13.vue";
import form14 from "./post/form14.vue";
import form15 from "./post/form15.vue";
import form16 from "./post/form16.vue";
import form17 from "./post/form17.vue";
import form18 from "./post/form18.vue";
import form19 from "./post/form19.vue";
import form20 from "./post/form20.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

import { useDrawerStore } from "@/stores/drawer";
import { useNextStore } from "@/stores/next.js";
import { useAuthStore } from "@/stores/auth.js";
import { ref, onMounted,shallowRef, watchEffect } from "vue";
import axios from "axios";

const postPage = shallowRef(match)
const drawerStore = useDrawerStore();
const nextStore = useNextStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const open = ref(null);
const data = ref([]);


// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}admin/users`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.users;
    })
    .catch(function (error) {
      console.error(error);
    });
});


const matchP = () => {
  postPage.value = match;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F1 = () => {
  postPage.value = form1;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const F2 = () => {
  postPage.value = form2;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F3 = () => {
  postPage.value = form3;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F4 = () => {
  postPage.value = form4;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F5 = () => {
  postPage.value = form5;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F6 = () => {
  postPage.value = form6;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F7 = () => {
  postPage.value = form7;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F8 = () => {
  postPage.value = form8;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F9 = () => {
  postPage.value = form9;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F10 = () => {
  postPage.value = form10;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F11 = () => {
  postPage.value = form11;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F12 = () => {
  postPage.value = form12;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F13 = () => {
  postPage.value = form13;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F14 = () => {
  postPage.value = form14;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F15 = () => {
  postPage.value = form15;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F16 = () => {
  postPage.value = form16;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F17 = () => {
  postPage.value = form17;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F18 = () => {
  postPage.value = form18;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F19 = () => {
  postPage.value = form19;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}
const F20 = () => {
  postPage.value = form20;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}



// checks the active button and sets the next button
  watchEffect(() => {
    switch (postPage.value) {
    case match:
      if(nextStore.nextRouteState != false ) {
        F1();
        console.log(nextStore.nextRouteState)
      };
      break; 
      case form1:
      if(nextStore.nextRouteState != false ) {
        F2()
        console.log(postPage.value)
      };
      break;
      case form2:
      if(nextStore.nextRouteState != false ) {
        F3()
        console.log(postPage.value)
      };
      break;
      case form3:
      if(nextStore.nextRouteState != false ) {
        F4()
        console.log(postPage.value)
      };
      break;
      case form4:
      if(nextStore.nextRouteState != false ) {
        F5()
        console.log(postPage.value)
      };
      break;
         case form5:
      if(nextStore.nextRouteState != false ) {
        F6()
        console.log(postPage.value)
      };
      break;
      case form6:
      if(nextStore.nextRouteState != false ) {
        F7()
        console.log(postPage.value)
      };
      break;
      case form7:
      if(nextStore.nextRouteState != false ) {
        F8()
        console.log(postPage.value)
      };
      break;
      case form8:
      if(nextStore.nextRouteState != false ) {
        F9()
        console.log(postPage.value)
      };
      break;
      case form9:
      if(nextStore.nextRouteState != false ) {
        F10()
        console.log(postPage.value)
      };
      break;
      case form10:
      if(nextStore.nextRouteState != false ) {
        F11()
        console.log(postPage.value)
      };
      break;
      case form11:
      if(nextStore.nextRouteState != false ) {
        F12()
        console.log(postPage.value)
      };
      break;
      case form12:
      if(nextStore.nextRouteState != false ) {
        F13()
        console.log(postPage.value)
      };
      break;
      case form13:
      if(nextStore.nextRouteState != false ) {
        F14()
        console.log(postPage.value)
      };
      break;
      case form14:
      if(nextStore.nextRouteState != false ) {
        F15()
        console.log(postPage.value)
      };
      break;
      case form15:
      if(nextStore.nextRouteState != false ) {
        F16()
        console.log(postPage.value)
      };
      break;
      case form16:
      if(nextStore.nextRouteState != false ) {
        F17()
        console.log(postPage.value)
      };
      break;
         case form17:
      if(nextStore.nextRouteState != false ) {
        F18()
        console.log(postPage.value)
      };
      break;
      case form18:
      if(nextStore.nextRouteState != false ) {
        F19()
        console.log(postPage.value)
      };
      break;
      case form19:
      if(nextStore.nextRouteState != false ) {
        F20()
        console.log(postPage.value)
      };
      break;
    default:
      break;
  }
});


// checks the active button and sets the previous button
watchEffect(() => {
    switch (postPage.value) {
      case form1:
      if(nextStore.previousRouteState != false ) {
        matchP();
      };
      break;
      case form2:
      if(nextStore.previousRouteState != false ) {
        F1();
      };
      break;
          case form3:
      if(nextStore.previousRouteState != false ) {
        F2();
      };
      break;
      case form4:
      if(nextStore.previousRouteState != false ) {
        F3();
      };
      break;
      case form5:
      if(nextStore.previousRouteState != false ) {
        F4();
      };
      break;
      case form6:
      if(nextStore.previousRouteState != false ) {
        F5();
      };
      break;
      case form7:
      if(nextStore.previousRouteState != false ) {
        F6();
      };
      break;
      case form8:
      if(nextStore.previousRouteState != false ) {
        F7();
      };
      break;
      case form9:
      if(nextStore.previousRouteState != false ) {
        F8();
      };
      break;
      case form10:
      if(nextStore.previousRouteState != false ) {
        F9();
      };
      break;
          case form11:
      if(nextStore.previousRouteState != false ) {
        F10();
      };
      break;
          case form12:
      if(nextStore.previousRouteState != false ) {
        F11();
      };
      break;
      case form13:
      if(nextStore.previousRouteState != false ) {
        F12();
      };
      break;
      case form14:
      if(nextStore.previousRouteState != false ) {
        F13();
      };
      break;
      case form15:
      if(nextStore.previousRouteState != false ) {
        F14();
      };
      break;
      case form16:
      if(nextStore.previousRouteState != false ) {
        F15();
      };
      break;
      case form17:
      if(nextStore.previousRouteState != false ) {
        F16();
      };
      break;
      case form18:
      if(nextStore.previousRouteState != false ) {
        F17();
      };
      break;
      case form19:
      if(nextStore.previousRouteState != false ) {
        F18();
      };
      break;
      case form20:
      if(nextStore.previousRouteState != false ) {
        F19();
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
        <button class="second-btn " @click="drawerStore.togglePost()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
        <h2>Post-Match Report</h2>
        </div>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="matchP"
          :class="[postPage == match ? 'datapage' : '']"
        >
          Match
        </button>
        <button
          class="data-n-b"
          @click="F1"
          :class="[postPage == form1 ? 'datapage' : '']"
        >
          1
        </button>
        <button
          class="data-n-b"
          @click="F2"
          :class="[postPage == form2 ? 'datapage' : '']"
        >
          2
        </button>
        <button
          class="data-n-b"
          @click="F3"
          :class="[postPage == form3 ? 'datapage' : '']"
        >
          3
        </button>
        <button
          class="data-n-b"
          @click="F4"
          :class="[postPage == form4 ? 'datapage' : '']"
        >
          4
        </button>
        <button
          class="data-n-b"
          @click="F5"
          :class="[postPage == form5 ? 'datapage' : '']"
        >
          5
        </button>
        <button
          class="data-n-b"
          @click="F6"
          :class="[postPage == form6 ? 'datapage' : '']"
        >
          6
        </button>
        <button
          class="data-n-b"
          @click="F7"
          :class="[postPage == form7 ? 'datapage' : '']"
        >
          7
        </button>
        <button
          class="data-n-b"
          @click="F8"
          :class="[postPage == form8 ? 'datapage' : '']"
        >
          8
        </button>
        <button
          class="data-n-b"
          @click="F9"
          :class="[postPage == form9 ? 'datapage' : '']"
        >
          9
        </button>
        <button
          class="data-n-b"
          @click="F10"
          :class="[postPage == form10 ? 'datapage' : '']"
        >
          10
        </button>
        <button
          class="data-n-b"
          @click="F11"
          :class="[postPage == form11 ? 'datapage' : '']"
        >
          11
        </button>
        <button
          class="data-n-b"
          @click="F12"
          :class="[postPage == form12 ? 'datapage' : '']"
        >
          12
        </button>
        <button
          class="data-n-b"
          @click="F13"
          :class="[postPage == form13 ? 'datapage' : '']"
        >
          13
        </button>
        <button
          class="data-n-b"
          @click="F14"
          :class="[postPage == form14 ? 'datapage' : '']"
        >
          14
        </button>
        <button
          class="data-n-b"
          @click="F15"
          :class="[postPage == form15 ? 'datapage' : '']"
        >
          15
        </button>
              <button
          class="data-n-b"
          @click="F16"
          :class="[postPage == form16 ? 'datapage' : '']"
        >
          16
        </button>
        <button
          class="data-n-b"
          @click="F17"
          :class="[postPage == form17 ? 'datapage' : '']"
        >
          17
        </button>
        <button
          class="data-n-b"
          @click="F18"
          :class="[postPage == form18 ? 'datapage' : '']"
        >
          18
        </button>
        <button
          class="data-n-b"
          @click="F19"
          :class="[postPage == form19 ? 'datapage' : '']"
        >
          19
        </button>
        <button
          class="data-n-b"
          @click="F20"
          :class="[postPage == form20 ? 'datapage' : '']"
        >
          20
        </button>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="postPage" />
    </div>
    <div></div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
