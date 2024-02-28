<template>
  <div>
    <nav :class="{ 'navbar-fixed': isNavbarFixed, 'navbar-hidden': isNavbarHidden }"
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src="https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/06/1687925770-1080x607.webp"
            class="h-10 mr-3 rounded-full" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Language Education</span>
        </a>
        <!-- Tombol Login -->
        <div class="flex md:order-2">
          <div v-if="isAuthenticated">
            <!-- Jika Pengguna Terotentikasi -->
            <Keranjang />
            <div>
              <a @click="logout"
                class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</a>
            </div>
          </div>
          <div v-else>
            <!-- Jika Pengguna Tidak Terotentikasi -->
            <a href="/login"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a>
          </div>
          <!-- Tombol toggle untuk menu responsif -->
          <button @click="toggleMenu"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <!-- Menu utama -->
        <div :class="{ 'hidden': !isMenuOpen }" class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Beranda</a>
            </li>
            <li>
              <a href="/materi"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Materi</a>
            </li>
            <li>
              <a href="/quiz"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quiz</a>
            </li>
            <li>
              <a href="/komentar"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak & Saran</a>
            </li>
            <li>
              <a href="/profil"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profil</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Tambahkan padding-top sesuai dengan tinggi navbar -->
    <div class="pt-20">
      <!-- Content Quiz -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isAuthenticated: false, // Ganti ini dengan logika autentikasi sesuai aplikasi Anda
      isNavbarFixed: false,
      lastScrollPosition: 0
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        this.isNavbarFixed = true;
      } else {
        // Scrolling up
        this.isNavbarFixed = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  computed: {
    isNavbarHidden() {
      return !this.isNavbarFixed && this.lastScrollPosition > 100; // Adjust the threshold as needed
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.navbar-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  /* Atur z-index sesuai kebutuhan */
  transition: top 0.3s;
  /* Animasi saat navbar bergerak */
}

.navbar-hidden {
  top: -100px;
  /* Atur jarak sesuai ketinggian navbar */
}</style>
