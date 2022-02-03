<template>
  <h1>Hello world</h1>
  <h2>{{ joke }}</h2>
  <button @click="newJoke">New Joke</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { fetchApi } from "./utils/fetchApi";

@Options({
  data() {
    return {
      joke: "",
    };
  },
  async beforeMount(): Promise<void> {
    this.newJoke();
  },
  methods: {
    async newJoke(): Promise<void> {
      const joke = await fetchApi();
      this.joke = joke;
    },
 
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131313;
  margin-top: 60px;
}
</style>
