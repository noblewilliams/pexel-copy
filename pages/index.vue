<template>
  <div>
    <Hero />
    <div class="shadow-tab">
      <div
        class="w-5/12 mx-auto flex justify-between pt-5 tab font-semibold text-lg"
      >
        <a href="#" class="active border-b-4 border-tab-active pb-4">Home</a>
        <a href="#">Discover</a>
        <a href="#">Videos</a>
        <a href="#">Leaderboard</a>
        <a href="#">Challenges</a>
      </div>
    </div>

    <div class="py-10 text-center">
      <div v-if="errored">Sorry, something went wrong, try again.</div>
      <div v-else-if="loading">loading</div>
      <div v-else>
        <div class="photos">
          <div v-for="(photo, id) in catalogue" :key="id">
            <img :src="photo.src.small" alt="" />
            <div class="photo-data">
              <div class="photo-name">{{ photo.photographer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createClient } from "pexels";

const client = createClient(
  "563492ad6f9170000100000179b3bb5bd9e645299ff2696ddcac22e9"
);

export default {
  data() {
    return {
      catalogue: null,
      loading: false,
      errored: false
    };
  },
  mounted() {
    axios
      .get("https://api.pexels.com/v1/?client")
      .then(response => {
        this.catalogue = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
.active,
.tab a:hover {
  color: #0064f9 !important;
}

.tab a {
  color: #5e5e5e;
  padding: 0 1rem 1rem 1rem;
}

.photos {
  width: 100vw;
  display: grid;
  padding: 0 5rem;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
