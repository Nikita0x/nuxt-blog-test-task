<template>
    <div class="pb-10">
        <div v-if="products === ''" class="flex flex-col justify-center items-center h-screen cursor-default">
            <button class="animate animate-spin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 cursor-default">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
        </div>
        <!-- grid products -->
        <div v-else>
        <header class="flex flex-col justify-center items-center space-y-5 py-10">
            <h1 class="text-base sm:text-xl md:text-3xl lg:text-6xl font-mono  text-slate-300">Ethereal Elegance Couture</h1>
            <h2 class="px-2 text-sm sm:text-base md:text-xl lg:text-2xl font-mono max-w-[70rem]  text-slate-300 text-center">Welcome to Ethereal Elegance Couture, where fashion meets fantasy! Explore a realm of exquisite attire that transcends the ordinary. Our enchanting collection of clothing and accessories is designed to transform your everyday wardrobe into a mesmerizing tapestry of style.</h2>
            </header>

            <div class="max-w-[1200px] mx-auto px-5 grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-5">
                <product-card class=" max-w-[20rem] w-[240px] min-h-[20rem] sm:w-96 flex flex-col justify-evenly" v-for="product in products">

                <div class="px-8 flex flex-col pt-5 space-y-2">
                    <p>{{ product.title }}</p>
                    <p>Category: {{ product.category }}</p>
                    <p>{{ product.descripion }}</p>
                    <p>Price: {{ product.price }} $</p>
                    <p>Orders: {{ product.rating.count }}</p>
                    <p>Rating: {{ product.rating.rate }}</p>

                    <!-- rating -->
                    <div class="flex" v-if="product.rating.rate <= 2">
                        <Star/>
                    </div>
                    <div class="flex" v-else-if="product.rating.rate <= 3">
                        <Star/>
                        <Star/>
                    </div>
                    <div class="flex" v-else-if="product.rating.rate <= 4">
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <div class="flex" v-else-if="product.rating.rate <= 5">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <div class="flex" v-else-if="product.rating.rate <= 6">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <!-- <p>ID: {{ product.id }}</p> -->

                </div>


                <div class="flex justify-center">
                    <img class="max-w-[15rem] px-5 sm:px-0 max-h-[15rem] rounded-md pt-5" :src="product.image">
                </div>

                <div class="flex justify-center py-5">
                    <nuxt-link to="/form">
                        <NButton @click="handleBuyNow(product)"  class="p-5">Buy Now!</NButton>
                    </nuxt-link>
                </div>
                
                </product-card>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import Star from "../components/star"

import { useProductStore } from '../store';
const store = useProductStore();

const products = ref('');


onBeforeMount(() => {
    fetchAllProducts();
})

const product = ref(null);
function handleBuyNow(product) {
  store.setProduct(product);
}

async function fetchAllProducts(){
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    products.value = data;
    console.log(products.value)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

</script>