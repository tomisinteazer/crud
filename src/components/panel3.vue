<template>
  <v-banner two-line elevation="10" class="container my-6 py-6">
    <v-avatar size="150">
      <v-img src="@/assets/atr.png"></v-img>
    </v-avatar>
    <span class="headline" align-center>{{ heading }}</span>
    <br />
    <template>
      <h3 justify="center">
        {{ content }}
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on" text color="deep-purple accent-4">Start Here</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline" align-center>Join us</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Your name*"
                        required
                        v-model="name"
                        :rules="[v => !!v || 'Name is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Email*"
                        type="email"
                        required
                        v-model="email"
                        :rules="[v => !!v || 'Email is required']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-1 white--text" @click="submit" :loading="loading">join</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </h3>
    </template>
  </v-banner>
</template>
<script>
import db from "@/fb";
export default {
  data() {
    return {
      dialog: false,
      content: "",
      heading: "",
      link: "",
      loading: false,
      email: "",
      name: ""
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const email = {
          email: this.email,
          name: this.name
        };
        db.collection("emails")
          .add(email)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            window.location.replace(`https://${this.link}`);
          });
      }
    }
  },
  created() {
    const panelData = db.collection("panels").doc("panel3");
    panelData.onSnapshot(doc => {
      const data = doc.data();
      this.heading = data.heading;
      this.link = data.link;
      this.content = data.content;
    });
  }
};
</script>
