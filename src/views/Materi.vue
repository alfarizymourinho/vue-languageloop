<template>
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
</template>
