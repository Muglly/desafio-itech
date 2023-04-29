<template>
  <main class="h-screen flex flex-col bg-slate-800">
    <header
      class="text-white h-12 w-full flex justify-center border-b-2 border-slate-700"
    >
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

    <saction
      class="w-2/3 m-auto flex flex-1 justify-center items-center overflow-hidden"
    >
      <div class="p-2 border border-gray-500 w-3/4 bg-white m-6 rounded h-auto">
        <label class="block mb-2 ml-2 text-slate-800 font-bold">
          Bar Chart
        </label>
        <client-only>
          <BarChart :data="chartData" :height="160" :width="300" />
        </client-only>

        <label class="block mb-2 ml-2 text-slate-800 font-bold">
          Line Chart
        </label>
        <client-only>
          <line-chart :data="chartData" :height="80" :width="300" />
        </client-only>

        <label class="block mb-2 ml-2 text-slate-800 font-bold">
          Pie Chart
        </label>
        <client-only>
          <pie-chart :data="chartData" :height="80" :width="300" />
        </client-only>
      </div>
    </saction>
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "DeshboardPage",

  props: {
    penilaian: {
      type: Object,
      required: true,
    },
  },

  computed: {
    chartData() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "",
            data: [2, 1, 16, 3, 2],
            backgroundColor: "rgba(7, 89, 133, 0.3)",
            borderColor: "rgba(2, 132, 199, 1)",
            borderWidth: 2,
            width: "26,25rem",
          },
        ],
      };
    },
  },

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
