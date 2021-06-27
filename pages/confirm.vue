<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{this.userName}}</p>
      <p>{{this.usermail}}</p>
      <button @click="logout">ログアウト</button>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase";
export default {
  props:{
   user:String
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
}
</script>
<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>