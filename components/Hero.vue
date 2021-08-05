<template>
  <div class="relative">
    <div
      class="absolute inset-0 gradient bg-no-repeat bg-cover bg-top z-0"
    ></div>
    <Nav />
    <div class="py-36 text-white relative z-30 w-6/12 mx-auto">
      <h1 class="text-4xl font-bold leading-snug">
        The best free stock photos & videos shared by talented creators.
      </h1>
      <div class="relative w-11/12 flex items-center">
        <input
          type="text"
          class="rounded-md w-full mt-6 py-4 px-4 placeholder-gray-600 text-xl font-light bg-input-white focus:outline-none"
          placeholder="Search for free photos and videos"
        />
        <a href="#" class="absolute right-5 bottom-5">
          <img src="../assets/search.svg" alt="search" class="h-5" />
        </a>
      </div>
      <p class="mt-2 text-sm suggested">
        <span class="text-white">Suggested:</span>
        <a href="#" class="ml-2">sculpture</a>,<a href="#"> abstract painting</a
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

input::before {
  position: absolute;
  height: 3rem;
  width: 3rem;
  top: 50%;

  transform: translate(-50%, -50%);
  right: 0rem;
  background-image: url("/assets/search.svg");
  background-size: contain;
}
</style>
