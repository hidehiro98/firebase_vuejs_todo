<template>
  <div class="signup">
    <h2>サインアップ</h2>
    <!-- 登録フォーム -->
    <h3>Two way binding form</h3>
    <input type="email" placeholder="email" v-model="email" >
    <p>Your email is: {{ email }}</p>

    <h3>One way binding form (Data object of Vue.js -> input form)</h3>
    <input type="text" placeholder="test" v-bind:value="test" >
    <p>{{ test }}</p>
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
      email: "default@email.com",
      password: "",
      test: "test from data object of Vue.js"
    };
  },
  methods: {
    // singUpボタンが押されたときに実行されるfunction
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
