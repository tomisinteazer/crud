<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-img
        src="@/assets/logo.png"
        aspect-ratio="1"
        max-height="150"
        max-width="300"
        align="center"
      ></v-img>
    </v-row>
    <v-content>
      <router-view></router-view>
    </v-content>
    <foot />
  </v-app>
</template>

<script>
import foot from "./components/foot";

export default {
  name: "App",

  components: {
    foot
  },

  data: () => ({
    //
  })
};
</script>
