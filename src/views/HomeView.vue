<template>
  <div class="home">
    <img alt="No bitches" src="../assets/logo.png" />
    <Home msg="No bitches?" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
};
</script>
