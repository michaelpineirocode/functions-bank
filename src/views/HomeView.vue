<template>
  <div class="home">
    <img alt="Generic Image" src="../assets/logo.png" />
    <div>
      <login-button 
        buttonText="Login with Google"
        class="themed baseButton"
        style="margin-top: 100px"/>
    </div>
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