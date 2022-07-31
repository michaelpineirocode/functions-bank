<template>
  <div class="home">
    <img alt="Generic Image"
      src="../assets/homelogo1.png"
      contain
      height="400"
      width="300"
      />
    <div>
      <login-button 
        buttonText="Login with Google"
        class="themed baseButton"
        style="margin-top: 20px"/>
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