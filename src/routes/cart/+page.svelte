<script>
   import CartPizzaBlock from "../../lib/CartPizzaBlock.svelte";

   let cartList = [];
</script>

<section id="cart">
   {#if cartList.length == 0}
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

         <div class="delete-all">
            <i class="fa-solid fa-trash" /> Видалити все
         </div>
      </div>

      <div class="container list">
         {#each cartList as item}
            <CartPizzaBlock />
         {/each}
      </div>

      <div class="container result">
         <div class="total-count">Кількість піц: <span>0</span></div>
         <div class="total-price">Сума заказу: <span>0$</span></div>
      </div>

      <div class="container buttons">
         <a href="/" class="btn gray-outline">
            <i class="fa-solid fa-chevron-left" /> Повернутися назад
         </a>

         <button class="btn orange">Оформити замовлення</button>
      </div>
   {/if}
</section>
