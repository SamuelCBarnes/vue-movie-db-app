<template>
  <div>
    <router-link to="/movie/11">
      <img
        :src="posterPath"
        alt=""
        class="hover:opacity-75 transition easy-in-out duration-150"
      />
    </router-link>
    <h3>{{ movie.title }}</h3>
    <div class="flex">
      <svg width="20" height="20" viewBox="0 0 512 512" id="IconChangeColor">
        <path
          d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
      </svg>

      <span class="ml-2"
        >{{ movie.vote_average * 10 }}% | {{ movie.release_date }}</span
      >
      <br />
    </div>
    <span class="text-sm text-gray-500">
      <span :key="genre" v-for="genre in movie.genre_ids">
        {{ genreTypeName(genre) }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
    genres: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    genreTypeName(genreId) {
      return genreId;
    },
  },
};
</script>

<style></style>
