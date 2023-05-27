<script>
   import { cart } from "./store/store.js";

   export let id = 0;
   export let image = "";
   export let name = "";
   export let price = 0;
   export let count = 0;
   export let parametrs = "";

   function addPizza() {
      count++;

      let oldCart = $cart;

      let newCart = oldCart.map(function (elem) {
         if (elem.id == id && elem.parametrs == parametrs) {
            elem.count = count;
         }

         return elem;
      });

      cart.set(newCart);
   }
   function minusPizza() {
      count--;

      if (count < 1) {
         deletePizza();
         return false;
      }

      let oldCart = $cart;

      let newCart = oldCart.map(function (elem) {
         if (elem.id == id && elem.parametrs == parametrs) {
            elem.count = count;
         }

         return elem;
      });

      cart.set(newCart);
   }

   function deletePizza() {
      let oldCart = $cart;

      let newCart = oldCart.filter(function (elem) {
         return elem.id != id || elem.parametrs != parametrs;
      });

      cart.set(newCart);
   }
</script>

<div class="cart-pizza-block">
   <div class="image">
      <img src={image} alt="X" />
   </div>
   <div class="info">
      <div class="name">{name}</div>
      <div class="parametrs">{parametrs}</div>
   </div>
   <div class="count">
      <div class="minus btn orange-outline" on:click={minusPizza}>-</div>
      <div class="value">{count}</div>
      <div class="plus btn orange-outline" on:click={addPizza}>+</div>
   </div>
   <div class="price">{price}$</div>
   <div class="delete btn gray-outline" on:click={deletePizza}>
      <i class="fa-solid fa-xmark" />
   </div>
</div>
