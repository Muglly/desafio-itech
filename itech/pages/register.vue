<template>
  <main class="flex justify-center items-center bg-slate-800 min-h-screen">
    <form
      @submit.prevent="pressed"
      class="flex flex-col gap-3 box-border w-80 text-center"
    >
      <h2 class="text-white font-bold text-xl">Faça o seu cadastro</h2>
      <input class="rounded p-2" placeholder="Name" type="name" />
      <input
        class="rounded p-2"
        placeholder="Email"
        type="email"
        v-model="email"
      />
      <input
        class="rounded p-2"
        placeholder="Senha"
        type="password"
        v-model="password"
      />
      <button
        type="submit"
        class="rounded p-2 bg-sky-800 hover:bg-sky-600 text-white"
      >
        Cadastrar
      </button>
    </form>
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "RegisterPage",

  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },

  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>
