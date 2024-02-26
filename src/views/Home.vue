<template>
    <!--Header-->
    <div class="my-12 relative">
        <section class="mb-32 text-center lg:text-left">
            <div class="relative px-6 py-12 md:px-12">
                <!-- Pseudo-element untuk background image -->
                <div class="absolute inset-0 bg-cover bg-center filter blur-lg"
                    :style="'background-image: url(https://www.smadwiwarna.sch.id/wp-content/uploads/2021/10/Cara-Belajar-Efektif.jpg);'">
                </div>
                <!-- Konten -->
                <div class="z-10 relative grid items-center lg:grid-cols-2 lg:gap-x-12">
                    <div class="mb-12 lg:mb-0 text-white">
                        <h2 class="my-12 text-5xl font-bold leading-tight tracking-tight">
                            Apakah Anda Siap<br />
                            <span class="text-success dark:text-success-400">Untuk Belajar Hari Ini?</span>
                        </h2>
                        <a class="mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black"
                            data-te-ripple-init data-te-ripple-color="dark" href="/produk" role="button"
                            style="background-color: white;">Get started</a>
                    </div>
                    <div class="mb-12 lg:mb-0">
                        <img src="https://www.smadwiwarna.sch.id/wp-content/uploads/2021/10/Cara-Belajar-Efektif.jpg"
                            class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- End Header-->

    <!--Jenjang-->
    <div style="background-color: whitesmoke;" class="h-full">
        <div class="container mx-auto lg:px-20">
            <div class='grid grid-cols-3 h-full pb-40'>
                <div class="border-r border-gray-300 mx-3 lg:pl-20">
                    <div
                        class="py-10 pb-3 mt-72 h-4/6 relative bg-gray-200 group hover:bg-gray-300 cursor-pointer transition ease-out duration-300">
                        <div>
                            <div class="w-4 h-1/5 bg-gray-300 absolute right-0 -top-48 bg-gray-200 group-hover:bg-gray-100">
                            </div>
                            <img src="https://i.ibb.co/FzkhpcD/pngegg.png"
                                alt="https://www.pngegg.com/en/png-nllal/download">
                        </div>
                        <div class="px-7 mt-20">
                            <h1 class="text-3xl font-bold group-hover:text-gray-500 transition ease-out duration-300">01.
                            </h1>
                            <h2 class="text-1xl mt-4 font-bold">PEMULA</h2>
                            <p class="mt-2 opacity-60 group-hover:opacity-70">Lebih mulai dari yang kecil dari pada mulai
                                dari yang besar
                            </p>
                            <!-- Tombol menuju halaman pemula -->
                            <router-link to="/pemula" class="text-blue-500 mt-4 block">Lihat Lebih Lanjut</router-link>
                        </div>
                    </div>
                </div>
                <div class="border-r border-gray-300 mx-3 lg:pl-20">
                    <div
                        class="py-10 pb-3 mt-32 h-4/6 relative bg-gray-200 group hover:bg-gray-300 cursor-pointer transition ease-out duration-300">
                        <div>
                            <div
                                class="w-4 h-1/5 bg-gray-300 absolute right-0 -top-48 bg-gray-200  group-hover:bg-gray-100">
                            </div>
                            <img src="https://i.ibb.co/JB4GWMJ/pngegg-1.png"
                                alt="https://www.pngegg.com/en/png-zquqj/download">
                        </div>
                        <div class="px-7 mt-20">
                            <h1 class="text-3xl font-bold group-hover:text-gray-500 transition ease-out duration-300">02.
                            </h1>
                            <h2 class="text-1xl mt-4 font-bold">SUHU</h2>
                            <p class="mt-2 opacity-60 group-hover:opacity-70">Tingkatkan kemampuan dengan melewati rintangan
                                chairs</p>
                            <!-- Tombol menuju halaman suhu -->
                            <router-link to="/suhu" class="text-blue-500 mt-4 block">Lihat Lebih Lanjut</router-link>
                        </div>
                    </div>
                </div>
                <div class="border-r border-gray-300 mx-3 lg:pl-20">
                    <div
                        class="py-10 pb-3 mt-5 h-4/6 relative bg-gray-200 group hover:bg-gray-300 cursor-pointer transition ease-out duration-300">
                        <div>
                            <div
                                class="w-4 h-1/5 bg-gray-300 absolute right-0 -bottom-44 bg-gray-200 group-hover:bg-gray-100">
                            </div>
                            <img src="https://i.ibb.co/MgnH44p/pngegg-2.png"
                                alt="https://www.pngegg.com/en/png-epwii/download">
                        </div>
                        <div class="px-7 mt-5">
                            <h1 class="text-3xl font-bold group-hover:text-gray-500 transition ease-out duration-300">03.
                            </h1>
                            <h2 class="text-1xl mt-4 font-bold">SEPUH</h2>
                            <p class="mt-2 opacity-60 group-hover:opacity-70">Pertahankan Talent dengan segenap rintangan
                                home</p>
                            <!-- Tombol menuju halaman sepuh -->
                            <router-link to="/sepuh" class="text-blue-500 mt-4 block">Lihat Lebih Lanjut</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--End Jenjang-->

    <!--Testimoni-->
    <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
            <h2 class="mb-12 text-3xl font-bold">Testimoni</h2>

            <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div class="mb-12 md:mb-0">
                    <div class="mb-6 flex justify-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                    </div>
                    <h5 class="mb-2 text-lg font-bold">Maria Smantha</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                        Pembelajar Bahasa
                    </h6>
                    <p class="mb-4">
                        "Saya telah menggunakan aplikasi pembelajaran bahasa ini selama beberapa minggu, dan saya sangat
                        menyukainya!
                        "
                    </p>
                    <ul class="mb-0 flex justify-center">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                            </svg>
                        </li>
                        <!-- Tambahkan lebih banyak bintang jika diperlukan -->
                    </ul>
                </div>
                <div class="mb-12 md:mb-0">
                    <div class="mb-6 flex justify-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                    </div>
                    <h5 class="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                        Pembelajar Bahasa
                    </h6>
                    <p class="mb-4">
                        "Aplikasi pembelajaran bahasa ini sangat membantu saya dalam meningkatkan kemampuan berbahasa saya.
                        Saya suka bagaimana materi disajikan dengan jelas dan latihan-latihannya sangat berguna."
                    </p>
                    <ul class="mb-0 flex justify-center">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                            </svg>
                        </li>
                        <!-- Tambahkan lebih banyak bintang jika diperlukan -->
                    </ul>
                </div>
                <div class="mb-0">
                    <div class="mb-6 flex justify-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                    </div>
                    <h5 class="mb-2 text-lg font-bold">John Smith</h5>
                    <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                        Pembelajar Bahasa
                    </h6>
                    <p class="mb-4">
                        "Saya senang menggunakan aplikasi pembelajaran bahasa ini. Materinya mudah dipahami
                        dan sangat membantu saya dalam meningkatkan kemampuan berbahasa saya."
                    </p>
                    <ul class="mb-0 flex justify-center">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                            </svg>
                        </li>
                        <!-- Tambahkan lebih banyak bintang jika diperlukan -->
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <!--End Testimoni-->
</template>
