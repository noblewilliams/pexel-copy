<template>
  <div>
    <Hero />
    <div class="shadow-tab">
      <div
        class="sm:w-9/12 lg:w-8/12 xl:w-5/12 mx-auto flex justify-between pt-5 tab font-semibold text-lg overflow-x-auto sm:overflow-x-hidden"
      >
        <a href="#" class="active border-b-4 border-tab-active pb-4">Home</a>
        <a href="#">Discover</a>
        <a href="#">Videos</a>
        <a href="#">Leaderboard</a>
        <a href="#">Challenges</a>
      </div>
    </div>

    <div class="py-10 text-center">
      <div v-if="errored">sorry, something went wrong. try again.</div>
      <div v-else-if="loading">loading</div>
      <div v-else>
        <div class="photos px-6 lg:px-20">
          <div
            v-for="(photo, id) in catalogue"
            :key="id"
            class="w-6/12 lg:w-4/12 px-1 lg:px-3 py-4"
          >
            <img :src="photo.src.original" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createClient } from "pexels";

export default {
  data() {
    return {
      catalogue: null,
      loading: false,
      errored: false
    };
  },

  mounted() {
    const client = createClient(
      "563492ad6f9170000100000179b3bb5bd9e645299ff2696ddcac22e9"
    );
    const query = "art";

    client.photos
      .search({ query, per_page: 10 })
      .then(photos => {
        this.loading = true;
        console.log(photos);
        this.catalogue = photos.photos;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo {
  width: 30%;
}
</style>
