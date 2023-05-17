<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import { useRoleStore } from "@/stores/roles.js";

const roleStore = useRoleStore();
const authState = useAuthStore();
const password = ref("");
const email = ref("");
const error = ref("");

localStorage.authKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzJkYmZhMTk3ZjNiMTkxNjYzY2VkNDI1YTRiMjZiNDRhZThiMjAwYjZlZTIwN2M1MWM3ZGM3ZGYyMWJiZTMxNzk3ZTc3NTVjMWJmZDdkOGUiLCJpYXQiOjE2ODM4MDA1NzguNDQ5MDY3LCJuYmYiOjE2ODM4MDA1NzguNDQ5MDcxLCJleHAiOjE2OTk2OTgxNzguNDI1MTIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QtmPUL9f6a-ohc0oql6GjJr2TrWERf_wvSXZxjAkRxFi2SOJ_YAgRFpyQLW65mI10EOtIAOwADplhLIcylemLZ3qEijacoBgFxws4q9EcOI7YH3h8RFuEY5nwdgZfZa_FjOG972yCiXAR83Gf05EhOrgbJwdrUDK5kYhfpI2vkDT11Uzp-7Qcn0FgCAcHkZwl3iFRmFBJY3gUQwMY9g_AWcKAIjXErbb0UcjRkmb1SeI0w_2SKf5la5cuxWHNhGYBnhHZARjj540gaIO_RRw46sZW0dTaFkHflpMGBHDZiSxMeuNyfQ-vBYcKu2uCW0HlPgfB9FAWZVx-t2cHQK3AbWhllISkqo93tv9d02eYE9gIG7tvlsLktVPlvclKaPRCcmG9SqaHMHechdlcsaKR_cHnb79cMeEAmaxxT0Xjm58jm3tcjv7eaXDgOZs_PrPW-KDeZOh9JpG7qB8U4Kd7cZ3jKBmoXdMvGfr3pU5AqUDiQlIjRtUwb2P1oC75VjHNdfV6U89Vn9HA1yI2ARRl7d5eZL3tvDRfpvNAsfFzSmargoIEOAT7uhSFaLuCayMWRPpL_HPT1OX9NI4olAY1Ej-wBxbpZwV8lokiqk02z6ZaXN8BY5P8RROR3KVfyqUw9y2u9-DDEMavX81Sni8vG6-5l1GN5VcD5Nlzvp1M28';
const login = () => {
  //check password length
  if (password.value.length < 6) {
    error.value = "Password must be at least 6 characters  long.";
  } else {
    switch (email.value) {
      case "Kevin@admin.com":
        roleStore.setRoles("super-admin");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@team.com":
        roleStore.setRoles("team-admin");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@data.com":
        roleStore.setRoles("data-manager");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@league.com":
        roleStore.setRoles("league-director");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@general.com":
        roleStore.setRoles("general-coordinator");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@match.com":
        roleStore.setRoles("match-commissioner");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@referee.com":
        roleStore.setRoles("referee");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@assessor.com":
        roleStore.setRoles("referee-assessor");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      case "Kevin@teamManager.com":
        roleStore.setRoles("team-manager");
        authState.logIn();
        authState.getUser(email.value);
        roleStore.route();
        break;
      default:
        error.value = "No login credentials found";
        break;
    }
  }

  email.value = "";
  password.value = "";
};
</script>
<template>
  <div class="login-container">
    <div class="login-c">
      <img src="@/assets/tplb-logo.png" alt="tplb" class="logo-tplb" />
      <div class="login-form-container">
        <form @submit.prevent="login" method="post" class="form-container">
          <div class="input-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="login-i"
              v-model="email"
              placeholder="Kevin@admin.com"
              required
            />
          </div>
          <div class="input-field">
            <label for="password"> Password</label>
            <input
              type="password"
              id="password"
              class="login-i"
              v-model="password"
              placeholder=" Atleast 6 characters long"
              required
            />
          </div>
          <span class="error-input">{{ error }}</span>
          <a href="#">Forgot password?</a>
          <div class="btn-i">
            <button class="login-btn">Login</button>
          </div>
        </form>
        <div class="footer-login">
          <h1>
            Download user manuals:<a href="/manual-swahili.pdf" download ><span>SW</span></a
            >|
            <a href="/English Manual.pdf" download ><span>EN</span></a>
          </h1>
          <h1>
            Powered by:
            <img src="@/assets/tff-logo.png" alt="tff-logo" class="tff-logo" />
          </h1>
        </div>
      </div>
    </div>
    <div class="login-adv">
      <img src="@/assets/banner.jpg" alt="banner" class="banner-img" />
    </div>
  </div>
</template>
<style>
@import "@/style/login.css";
</style>
