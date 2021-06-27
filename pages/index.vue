<template>
  <div class="login">
    <div>
      <button @click="login">googleアカウントでログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  methods: {
    login() {
         firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
         this.$router.push({name:"confirm",params:{user:this.userName,user:this.userMail}});

    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>