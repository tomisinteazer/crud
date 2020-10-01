<template>
  <v-simple-table class="container">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left blue--text">Emails</th>
          <th class="text-left blue--text">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in emails" :key="item.id">
          <td>{{ item.email }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import db from "@/fb";
export default {
  data() {
    return {
      emails: []
    };
  },
  created() {
    db.collection("emails").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        this.emails.push({
          ...change.doc.data(),
          id: change.doc.id
        });
      });
    });
  }
};
</script>
