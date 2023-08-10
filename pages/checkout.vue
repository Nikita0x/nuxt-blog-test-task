<template>
  <div>
    <nuxt-link to="/">
      <NButton Nuxt class="p-5">Back to the products!</NButton>
    </nuxt-link>
  </div>

  <div>Thank you for your purchase!</div>

</template>


<script setup>
import { useProductStore } from '../store';
const store = useProductStore();
const order = store.order;

console.log(order)
</script>