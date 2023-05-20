<script>
   export let image = "";
   export let name = "";
   export let price = 0;
   export let count = 0;
   export let parametrs = "";
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
      <div class="minus btn orange-outline">-</div>
      <div class="value">{count}</div>
      <div class="plus btn orange-outline">+</div>
   </div>
   <div class="price">{price}$</div>
   <div class="delete btn gray-outline">
      <i class="fa-solid fa-xmark" />
   </div>
</div>
