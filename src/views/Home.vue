<template>
  <div class="home mt-6">
    <v-row align="center" justify="center">
      <h2 class="text--center blue--text">Welcome to Profit offers</h2>
    </v-row>
    <v-row align="center" justify="center">
      <h4 class="text--center black--text">The home of total profit and financial growth</h4>
    </v-row>
    <panel1 />
    <panel2 />
    <panel3 />
    <panel4 />
    <panel5 />
    <panel6 />
  </div>
</template>

<script>
// @ is an alias to /src
import panel1 from "../components/panel1";
import panel2 from "../components/panel2";
import panel3 from "../components/panel3";
import panel4 from "../components/panel4";
import panel5 from "../components/panel5";
import panel6 from "../components/panel6";

export default {
  name: "Home",
  components: { panel1, panel2, panel3, panel4, panel5, panel6 }
};
</script>
