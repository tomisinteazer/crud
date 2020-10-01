<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Profitoffers
        income generation marketing for the future and teaching you financial literacy through support systems and updated
        investment tactics moving from system to system a sure fire way to reach your target financial peak
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;
        {{ new Date().getFullYear() }} —
        <strong>Profitoffers</strong>
        <h4>
          In No Way Is Profitoffers Or It's Creators Partnered
          With Google Or YouTube Or Facebook Or Any Other Company
        </h4>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-whatsapp",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
