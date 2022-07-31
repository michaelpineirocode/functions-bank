<template>
  <div class="home">
    <img alt="Generic Image" src="../assets/logo.png" />
    <Home msg="Functions Bank" />
    <login-button buttonText="Login with Google" class="themed baseButton"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginButton from "@/components/LoginButton.vue";

export default {
  name: "HomeView",
  components: {
    LoginButton,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>