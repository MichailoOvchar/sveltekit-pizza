<script>
   import CartPizzaBlock from "../../lib/CartPizzaBlock.svelte";
   import { cart } from "../../lib/store/store";

   let cartPrice = 0;
   let cartLength = 0;

   $: cartPrice = calculateCartPrice($cart);
   $: cartLength = calculateCartLength($cart);

   function calculateCartPrice(ourCart) {
      let price = 0;

      ourCart.forEach((element) => {
         price += element.price * element.count;
      });

      return price;
   }

   function calculateCartLength(ourCart) {
      let count = 0;

      ourCart.forEach((element) => {
         count += element.count;
      });

      return count;
   }

   function deleteAll() {
      cart.set([]);
   }
</script>

<section id="cart">
   {#if $cart.length == 0}
      <div class="container empty">
         <div class="title">Корзина пустая 😕</div>
         <div class="text">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
         </div>
         <div class="img">
            <img src="/empty.png" alt="X" />
         </div>
         <a href="/" class="btn gray">Повернутися назад</a>
      </div>
   {:else}
      <div class="container header">
         <div class="title">
            <i class="fa-solid fa-cart-shopping" /> Ваша корзина
         </div>

         <div class="delete-all" on:click={deleteAll}>
            <i class="fa-solid fa-trash" /> Видалити все
         </div>
      </div>

      <div class="container list">
         {#each $cart ?? [] as item}
            <CartPizzaBlock
               id={item.id}
               image={item.image}
               name={item.name}
               price={item.price}
               count={item.count}
               parametrs={item.parametrs}
            />
         {/each}
      </div>

      <div class="container result">
         <div class="total-count">
            Кількість піц: <span>{cartLength}</span>
         </div>
         <div class="total-price">Сума заказу: <span>${cartPrice} </span></div>
      </div>

      <div class="container buttons">
         <a href="/" class="btn gray-outline">
            <i class="fa-solid fa-chevron-left" /> Повернутися назад
         </a>

         <button class="btn orange">Оформити замовлення</button>
      </div>
   {/if}
</section>
