<template>
  <div
    class="fixed z-40 top-0 w-full bg-transparent text-white flex justify-between px-4 py-3"
    :class="{ 'bg-nav-bg': scrollPosition > 150 }"
  >
    <div
      class="w-full lg:w-9/12 flex justify-between lg:justify-start items-center space-x-3 relative z-40"
    >
      <img src="../assets/logo.png" alt="logo" class="h-7" />
      <p class="text-xl font-semibold hidden lg:block">Pexels</p>
      <div
        :class="{
          hidden: !isopen,
          'block lg:hidden': isopen,
          'lg:block': scrollPosition > 150
        }"
        class="w-8/12"
      >
        <div class="relative flex items-center">
          <input
            type="text"
            class="rounded-md w-full py-2 px-4 placeholder-gray-600 text-lg lg:text-lg font-normal truncate bg-input-white focus:outline-none"
            placeholder="Search for free photos"
          />
          <a href="#" class="absolute right-5 bottom-3">
            <img src="../assets/search.svg" alt="search" class="h-5" />
          </a>
        </div>
      </div>
      <div class="flex space-x-4 items-center lg:hidden">
        <a href="#">
          <img src="../assets/bell.svg" alt="bell" class="h-5 mb-2"
        /></a>
        <button class="focus:outline-none " @click="toggle">
          <img src="../assets/menu.svg" alt="logo" class="h-8 p-1" />
        </button>
      </div>
    </div>
    <div
      class="w-full lg:w-4/12 flex flex-col lg:flex-row bg-nav-bg bg-cover lg:bg-transparent pt-24 pb-8 lg:p-0 px-3 text-xl lg:text-base absolute lg:static top-0 inset-x-0 z-30 lg:z-40"
      :class="{ hidden: !isopen, flex: isopen, 'lg:flex': !isopen }"
    >
      <div class="hidden w-full lg:flex flex-row justify-between items-center">
        <a href="#">Explore</a>
        <a href="#">License</a>
        <a href="#"> <img src="../assets/bell.svg" alt="bell" class="h-5"/></a>
        <a href="#">...</a>
        <button
          class="px-7 py-2 bg-pexel-green rounded-md font-semibold hover:opacity-80 transform hover:-translate-y-px"
        >
          Upload
        </button>
      </div>
      <div class="">
        <div
          class="lg:hidden flex flex-col text-white opacity-70 space-y-3 overflow-y-visible overscroll-contain"
        >
          <a href="#">Home</a>
          <hr class="border-b border-gray-600" />
          <a href="#">Discover Photos</a>
          <a href="#">Popular Searches</a>
          <a href="#">Free Videos</a>
          <a href="#">Challenges</a>
          <a href="#">Leaderboard</a>
          <a href="#">Pexels Blog</a>
          <hr class="border-b border-gray-600" />
          <a href="#">Your Profile</a>
          <a href="#" class="flex items-center"
            >Change Language
            <img src="../assets/flag.png" alt="flag" class="ml-3 h-4"
          /></a>
          <a href="#">Upload</a>
          <a href="#">License</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
          <hr class="border-b border-gray-600" />
          <a href="#">Apps And Ps Plugin</a>
          <a href="#">FAQ</a>
          <a href="#">About Us</a>
          <a href="#">Imprint & Terms</a>
          <hr class="border-b border-gray-600" />
          <div class="flex opacity-100 w-10/12 justify-between mx-auto pt-4">
            <a href="#"
              ><img src="../assets/facebook.svg" class="h-5" alt="facebook"
            /></a>
            <a href="#"
              ><img src="../assets/twitter.svg" class="h-5" alt="twitter"
            /></a>
            <a href="#"
              ><img src="../assets/instagram.svg" class="h-5" alt="instagram"
            /></a>
            <a href="#"
              ><img src="../assets/pinterest.svg" class="h-5" alt="pinterest"
            /></a>
            <a href="#"
              ><img src="../assets/youtube.svg" class="h-5" alt="yt"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
      scrollPosition: null
    };
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style scoped>
input[type="text"]::-webkit-input-placeholder {
  width: 60%;
}
</style>
