<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-3">
      <img src="@/assets/images/joker.jpg" alt="" class="w-64" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">Joker</h1>
        <svg
          class="w-4 mr-2"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          id="IconChangeColor"
        >
          <path
            d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7Z"
            id="mainIconPathAttribute"
            fill="yellow"
          ></path>
        </svg>
        <span class="text-gray-500 text-sm flex"
          >82% | 2019-10-02 Crime, Thriller, Drama</span
        >

        <p class="mt-5">
          During the 1980s, a failed stand-up comedian is driven insane and
          turns to a life of crime and chaos in Gotham City while becoming an
          infamous psychopathic crime figure.
        </p>

        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>

          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span>Scott Silver</span>
              <span class="text-gray-500">Writer</span>
            </div>
            <div class="flex flex-col mt-5">
              <span>Bruce Berman</span>
              <span class="text-gray-500">Executive Producer</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-play-circle"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                id="mainIconPathAttribute"
                fill="#000000"
              ></path>
              <path
                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                id="mainIconPathAttribute"
                fill="#000000"
              ></path>
            </svg>

            <span class="ml-3">Play Trailer</span>
          </a>

          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                id="mainIconPathAttribute"
                fill="#fc0335"
              ></path>
            </svg>
            <span class="ml-3">Favorite</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex mt-10">
      <CastSection />
    </div>
    <div>      <ImageSection /></div>
  </div>
</template>

<script>
import CastSection from "./CastSection";
import ImageSection from "./ImageSection";

export default {
  components: {
    CastSection,
    ImageSection,
  },
};
</script>

<style></style>
