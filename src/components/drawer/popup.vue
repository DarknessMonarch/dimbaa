<script setup>
import { useDrawerStore } from "@/stores/drawer";
import CircleDrawer from "./CircleDrawer.vue";
import ExitIcon from "../icons/ExitIcon.vue";

import { ref, watchEffect } from "vue";

const drawerStore = useDrawerStore();
const open = ref(null);

watchEffect(() => {
    open.value = drawerStore.popDrawer;
})

const props = defineProps({
  height: String,
  width: String,
  title: String,

});
</script>
<template>
  <Teleport to="body">
    <div
      class="pop-container"
      :class="[open == false ? 'Close' : '']"
      :style="{ width: `${props.width}%`, height: `${props.height}%`}"
    >
    <div class="pop-inner">
    <div class="pop-inner-c">
      <div class="pop-circle-container">
      <CircleDrawer class="pop-circle" @click="drawerStore.togglePop">
          <ExitIcon class="icon pop-exit-icon" />
        </CircleDrawer>
    </div>
      <div class="pop-up-details">
        <h1>{{ props.title }}</h1>
      </div>
    </div>
    <div class="pop-sec-d">
      <slot></slot>
    </div>
    </div>
    </div>
  </Teleport>
</template>
<style>
@import "@/style/popup.css";
</style>

