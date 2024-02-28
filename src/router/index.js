import { createWebHistory, createRouter } from "vue-router";
// import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue"
import Home from "../views/Home.vue"
import Materi from "../views/Materi.vue"
import Pemula from "../views/Pemula.vue"
import Suhu from "../views/Suhu.vue"
import Sepuh from "../views/Sepuh.vue"
import Quiz from "../views/Quiz.vue"
import Komentar from "../views/Komentar.vue"
// import Register from "../views/Register.vue";
// import Produk from "../views/Produk.vue";
// import singleproduk from "../views/SingleProduk.vue"
// import keranjang from "../views/Keranjang.vue"
// import category from "../views/Category.vue"
// import brands from "../views/Brands.vue"
// import profil from "../views/Profil.vue"
// import checkout from "../views/Checkout.vue"
// import order from "../views/Order-confirmed.vue"

const routes = [
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/materi",
        name: "Materi",
        component: Materi,
    },
    {
        path: "/pemula",
        name: "Pemula",
        component: Pemula,
    },
    {
        path: "/suhu",
        name: "Suhu",
        component: Suhu,
    },
    {
        path: "/sepuh",
        name: "Sepuh",
        component: Sepuh,
    },
    {
        path: "/quiz",
        name: "Quiz",
        component: Quiz,
    },
    {
        path: "/komentar",
        name: "Komentar",
        component: Komentar,
    },
    // {
    //     path: "/register",
    //     name: "Register",
    //     component: Register,
    // },
    // {
    //     path: '/produk',
    //     name: 'Produk',
    //     component: Produk
    // },

    // {
    //     path: '/produk/:slug',
    //     name: 'SingleProduk',
    //     component: singleproduk
    // },
    // {
    //     path: '/keranjang',
    //     name: 'keranjang',
    //     component: keranjang
    // },
    // {
    //     path: '/category',
    //     name: 'Category',
    //     component: category
    // },
    // {
    //     path: '/checkout',
    //     name: 'Checkout',
    //     component: checkout
    // },
    // {
    //     path: '/brands',
    //     name: 'Brands',
    //     component: brands
    // },
    // {
    //     path: '/profil',
    //     name: 'Profil',
    //     beforeEnter: cekToken,
    //     component: profil
    // },
    // {
    //     path: '/order/:orderCode',
    //     name: 'Order',
    //     component: order,
    //     props: true
    // },

]
// function cekToken(to, from, next) {
//     var isAuthenticated = false;
//     if (localStorage.getItem('token')) {
//         isAuthenticated = true;
//         next();
//     }
//     else {
//         isAuthenticated = false;
//         next('/login')
//     }


// }

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;