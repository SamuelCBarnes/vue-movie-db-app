<template>
  <div class="flex mt-12 relative">
    <input
      type="text"
      class="rounded-full bg-gray-600 w-50 h-10 mr-3 px-7 focus:outline-shadow"
      placeholder="Search..."
    />

    <img
      src="@/assets/images/avatar.jpg"
      alt="User Profile Image"
      class="rounded-full h-10 mr-4"
    />
    <div class="absolute top-0 mr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-search mt-4 ml-3 mr-4"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          id="mainIconPathAttribute"
          fill="#03989e"
        ></path>
      </svg>
    </div>

    <div v-if="false" class="absolute mt-12 ml-2 rounded bg-gray-600 w-60 mt-5">
      <ul class="mt-3">
        <li class="flex items-center border-b border-gray-500 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10 p-1" />
          <span class="ml-3">Joker</span>
        </li>
        <li class="flex items-center border-b border-gray-500 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10 p-1" />
          <span class="ml-3">Joker</span>
        </li>
        <li class="flex items-center border-b border-gray-500 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10 p-1" />
          <span class="ml-3">Joker</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
