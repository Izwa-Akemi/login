<template>
  <div class="confirm">
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>
    <button @click="logOut">ログアウト</button>
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
  methods:{
      logOut () {
      firebase.auth().signOut()
    }
  }
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