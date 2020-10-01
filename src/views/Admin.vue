<template>
  <div class="about">
    <v-row align="center" justify="center">
      <h1 class="text--center">This is the Admin page</h1>
    </v-row>

    <popup />
    <tables />
  </div>
</template>
<script>
import popup from "../components/popup";
import tables from "../components/table";

export default {
  components: {
    popup,
    tables
  },

  data: () => ({
    //
  })
};
</script>
