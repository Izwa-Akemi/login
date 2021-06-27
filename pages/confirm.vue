<template>
  <div class="confirm">
    <h2>ログイン完了</h2>
    <p>{{ user.displayName }}</p><br>
    <p>{{ user.email }}</p><br>
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
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>
.confirm {
  height: 100vh;
  text-align:center;
  /*display: flex;
  align-items: center;
  justify-content: center;*/
}
</style>