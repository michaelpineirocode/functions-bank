<template>
  <button @click="login">{{ buttonText }}</button>
</template>

<script>
import { googleLogin } from "../services/FirebaseAuthService"

export default {
  name: "login-button",
  props: {
    buttonText: {
      type: String,
      default: () => "Login"
    },
    themed: {
      themed: Boolean,
      default: () => true,
    }
  },
  methods: {
    login() {
      googleLogin();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.themed {
  background: purple;
  color: white
}

.baseButton {
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
