<template>
  <div class="home">
    <img alt="No bitches" src="../assets/logo.png" />
    <Home msg="No bitches?" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/HomeComponent.vue";
import { googleSignIn } from "../services/FirebaseAuthService";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  data() {
    return {
      signedIn: false,
    };
  },
  methods: {
    async signIn() {
      const user = await googleSignIn();
      this.signedIn == !!user;
    },
  },
};
</script>
