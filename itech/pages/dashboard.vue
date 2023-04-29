<template>
  <main class="h-screen flex justify-center">
    <header class="bg-slate-800 text-white h-12 w-full flex justify-center">
      <div class="flex justify-between items-center w-3/4">
        <h1 class="text-white font-bold text-xl">Deshboard</h1>
        <button
          v-if="user"
          @click="singout"
          class="rounded p-2 bg-sky-800 hover:bg-sky-600 text-white px-10 py-1 font-bold"
          type="button"
        >
          Sair
        </button>
      </div>
    </header>
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "DeshboardPage",

  data() {
    return {
      user: "",
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;

      if (!this.user) {
        this.$router.push("/");
      }
    });
  },

  methods: {
    singout() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          this.user = "";
          this.$router.push("/");
        });
    },
  },
};
</script>
