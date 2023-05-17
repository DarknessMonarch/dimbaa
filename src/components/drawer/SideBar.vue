<script setup>
import { ref, watchEffect , computed} from "vue";
import { RouterLink } from "vue-router";
import HomeIcon from "../icons/HomeIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import AboutIcon from "../icons/AboutIcon.vue";
import { useRoleStore } from "../../stores/roles";
import SettingsIcon from "../icons/SettingIcon.vue";
import DashBoardIcon from "../icons/DashBoardIcon.vue";
import LogOutIcon from "@/components/icons/LogOutIcon.vue";
import NotificationIcon from "../icons/NotificationIcon.vue";

const roleStore = useRoleStore();
const IsNotification = ref(false);
const route = ref(null);
const show = ref(false)
// const toggleSideBarItem = ref(false);

watchEffect(() => {
  route.value = roleStore.routeName;
  if (roleStore.routeName == 'DataBoard' || roleStore.routeName == 'LeagueBoard') {
    show.value = true;
  } else {
    show.value = false;
  }
});

</script>
<template>
  <div class="side-component">
    <div class="start-component">
      <RouterLink :to="{ name: route }" class="side-link">
        <HomeIcon class="icon icon-home" />
        <span>Home</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Notification' }" class="side-link">
        <NotificationIcon
          :IsNotification="IsNotification"
          class="icon icon-notification"
        />
        <span>Notification</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Dashboard' }"
        class="side-link"
        :class="[show != true ? 'disappear-link' : '' ]"
      >
        <DashBoardIcon class="icon dashboard-icon" />
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Edit' }"
        class="side-link"
        :class="[show  != true ? 'disappear-link' : '' ]"
      >
        <EditIcon class="icon edit-icon" />
        <span>Edit</span>
      </RouterLink>
      <RouterLink :to="{ name: 'About' }" class="side-link">
        <AboutIcon class="icon about-icon" />
        <span>About</span>
      </RouterLink>
    </div>
 
    <div class="end-component">
      <RouterLink :to="{ name: 'Settings' }" class="side-link">
        <SettingsIcon class="icon settings-icon" />
        <span>Settings</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Login' }" class="side-link">
        <LogOutIcon class="icon settings-icon" />
        <span>Logout</span>
      </RouterLink>
    </div>
  </div>
</template>
<style>
@import "@/style/sidebar.css";
</style>
