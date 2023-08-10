// store/products.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
  state: () => ({
    product: null,
    order: null,
  }),
  actions: {
    setProduct(product) {
      this.product = product;
    },
    setOrder(order) {
        this.order = order;
    }
  },
});