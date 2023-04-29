import Vue from "vue";
import { Bar } from "vue-chartjs";
import { Line } from "vue-chartjs";
import { Pie } from "vue-chartjs";

Vue.component("BarChart", {
  extends: Bar,
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      }),
    },
  },

  watch: {
    data() {
      this.renderChart(this.data, this.options);
    },
  },

  mounted() {
    this.renderChart(this.data, this.options);
  },
});

Vue.component("line-chart", {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
});

Vue.component("pie-chart", {
  extends: Pie,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
