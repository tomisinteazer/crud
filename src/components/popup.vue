<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">manage links</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Link Editor</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Panel link*"
                    required
                    hint="the link of the panel"
                    :rules="[v => !!v || 'Link is required']"
                    v-model="link"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Panel title*"
                    hint="the title of the panel"
                    :rules="[v => !!v || 'title is required']"
                    v-model="heading"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Panel content*"
                    hint="the content of the panel"
                    v-model="content"
                    :rules="[v => !!v || 'Content is required']"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    :items="['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6']"
                    label="panel number*"
                    required
                    v-model="panelNumber"
                    :rules="[v => !!v || 'panel number is required']"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="updatePanel">Save</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false" :loading="loading">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import db from "@/fb";
export default {
  data: () => ({
    dialog: false,
    link: "",
    heading: "",
    content: "",
    panelNumber: "",
    loading: true
  }),
  methods: {
    updatePanel() {
      if (this.$refs.form.validate()) {
        this.loading = false;
        let postid = this.panelNumber;
        const panelData = db.collection("panels").doc(postid);
        panelData.update({
          heading: this.heading,
          link: this.link,
          content: this.content
        });
      }
    }
  }
};
</script>
