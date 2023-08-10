<template>
    <div>
       <nuxt-link to="/">
         <NButton Nuxt class="p-5">Back to the products!</NButton>
       </nuxt-link>
    </div>

    <div class="flex justify-center">
      <product-card class=" max-w-[20rem] w-[240px] min-h-[20rem] sm:w-96 flex flex-col justify-evenly">
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

        <NButton @click="showDialog = !showDialog" class="p-5">Make an order</NButton>

</div>

    </product-card>
    </div>

    <NDialog v-model="showDialog" class="w-86 px-5 sm:min-w-[30rem] flex flex-col gap-4 p4">
      <p class="italic text-slate-300">If your oder will be more than 500$, the shipping will be completely <span class=" text-yellow-300">free</span></p>
      <h1 text-4xl>
        Total price: {{ store.product.price }} $ 
      </h1>
      <label for="name"><span class=" text-teal-300">Name: </span>{{ name }}</label>
      <NTextInput id="name" required n="lime6 dark:lime5" placeholder="Name" v-model="name" />
      <label for="surname"><span class=" text-teal-300">Surname: </span>{{ surname }}</label>
      <NTextInput id="surname" v-model="surname" required n="lime6 dark:lime5" placeholder="Surname" />
      <label for="name"><span class=" text-teal-300">Address: </span>{{ address }}</label>
      <NTextInput v-model="address" required n="lime6 dark:lime5" placeholder="Address" />
      <label for="name"><span class=" text-teal-300">Phone number: </span>{{ phoneNumber }}</label>
      <NTextInput v-model="phoneNumber" required type="phone" n="lime6 dark:lime5" placeholder="Phone number" />
      <label for="name"><span class=" text-teal-300">Email: </span>{{ email }}</label>
      <NTextInput v-model="email" required type="email" n="lime6 dark:lime5" placeholder="Email" />
      <div>
        <nuxt-link to="/checkout">
          <NButton @click="addNewProduct()" @click.stop="handleCredentials()">
            Continue
          </NButton>
        </nuxt-link>

      </div>
    </NDialog>

</template>

<script setup>
import { useProductStore } from '../store';
const store = useProductStore();
const product = store.product;

const showDialog = ref(false)
const name = ref('')
const surname = ref('')
const address = ref('')
const phoneNumber = ref('')
const email = ref('')


function handleCredentials() {
  store.setOrder({
    name: name.value,
    surname: surname.value,
    address: address.value,
    phoneNumber: phoneNumber.value,
    email: email.value
  });
}

 async function addNewProduct() {
  fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            console.log('remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.')

 }

</script>

<!-- @click="showDialog = false" -->