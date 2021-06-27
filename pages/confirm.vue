<template>
  <div class="confirm">
    <p>{{ user.displayName }}</p><br>
    <p>{{ user.email }}</p>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase";

export default {
  asyncData() {
    return {
      user: [],
    };
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};
</script>
<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>