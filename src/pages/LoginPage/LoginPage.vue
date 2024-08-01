<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-toolbar-title>Login</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center">
        <q-card>
          <q-card-section>
            <q-input v-model="username" label="Username" />
            <q-input v-model="password" type="password" label="Password" />
          </q-card-section>
          <q-card-actions>
            <q-btn label="Login" @click="login" color="primary" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Redirecionar para a página principal após o login
      this.$router.push("/main");
    },
  },
};
</script>
