<template>
  <div class="relative">
    <div
      class="absolute inset-0 gradient bg-no-repeat bg-cover bg-top z-0"
    ></div>
    <Nav />
    <div
      class="py-24 sm:py-36 text-white relative z-30 w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
    >
      <h1 class="text-4xl font-bold leading-tight lg:leading-snug">
        The best free stock photos & videos shared by talented creators.
      </h1>
      <div class="relative lg:w-11/12 flex items-center">
        <input
          type="text"
          class="rounded-md w-full mt-6 py-3 lg:py-4 px-4 placeholder-gray-600 text-lg lg:text-xl font-light bg-input-white focus:outline-none"
          placeholder="Search for free photos and videos"
        />
        <a href="#" class="absolute right-5 bottom-4 lg:bottom-5">
          <img src="../assets/search.svg" alt="search" class="h-5" />
        </a>
      </div>
      <p class="mt-2 text-sm suggested">
        <span class="text-white hidden lg:inline">Suggested:</span>
        <a href="#" class="lg:ml-2">sculpture</a>,<a href="#">
          abstract painting</a
        >, <a href="#"> artist</a>, <a href="#"> background</a>,
        <a href="#"> wall painting</a>, <a href="#"> watercolor</a>,
        <a href="#"> more</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gradient {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.2)),
      to(rgba(0, 0, 0, 0.2))
    ),
    -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%),
    url("../assets/hero-bg.jpeg");
}

.suggested,
.suggested a {
  color: #d3d3d3;
}
.suggested a:hover {
  color: white;
}
</style>
