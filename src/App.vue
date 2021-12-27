<template>
  <v-app>
    <v-app-bar app color="#233447" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.consensys.net/uploads/metamask-1.svg"
          transition="scale-transition"
          width="40"
        />

        <h1>MetaVueEthers</h1>
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-btn v-if="!currentAccount" @click="connectWallet()" text>
          <span class="mr-2">Connect Wallet</span>
          <v-icon>mdi-wallet</v-icon>
        </v-btn>
        <v-btn disabled v-if="currentAccount" text>
          <span style="color: white" class="mr-2">Wallet Connected</span>
          <v-icon style="color: white !important">mdi-check</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),

  methods: {
    async connectWallet() {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log("Connected", accounts[0]);
        this.$store.state.currentAccount = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    currentAccount() {
      return this.$store.state.currentAccount;
    },
  },
};
</script>
