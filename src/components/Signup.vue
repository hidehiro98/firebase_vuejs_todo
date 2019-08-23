<template>
  <div class="signup">
    <h2>サインアップ</h2>
    <!-- 登録フォーム -->
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="signUp">登録</button>

    <!-- サインインへの遷移ボタン -->
    <p>
      アカウントをすでにお持ちの方
      <router-link to="/signin">sign in now</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase"; // firebaseのインポート

export default {
  name: "Singup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // singUpボタンが押されたときに実行されるfunctrion
    signUp: function() {
      firebase
        .auth()
        // May 7にメソッド名変わった https://firebase.google.com/support/release-notes/js#version_600_-_may_7_2019
        .createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          // 成功時
          alert("Create account: " + user.user.email);
        })
        .catch(error => {
          // 失敗時
          alert(error.message);
        });
    }
  }
};
</script>

<style>
</style>
