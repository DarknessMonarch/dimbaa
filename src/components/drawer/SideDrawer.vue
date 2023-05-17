<script setup>
import ExitIcon from "../icons/ExitIcon.vue";
import CircleDrawer from "./CircleDrawer.vue";
import { useDrawerStore } from "@/stores/drawer";

const drawerStore = useDrawerStore();
const props = defineProps({
  title: String,
});
</script>
<template>
  <div class="side-drawer-component">
    <div class="side-container">
      <CircleDrawer class="exit-circle"  @click="drawerStore.toggleDrawer">
        <ExitIcon class="icon icon-exit" />
      </CircleDrawer>
      <h1>{{ props.title }}</h1>
    </div>
    <slot></slot>
  </div>
</template>
<style>
@import "@/style/sidedrawer.css";
</style>
