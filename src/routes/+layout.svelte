<script>
    import "../style/app.scss";
    import { cart } from "../lib/store/store.js";

    let cartPrice = 0;

    $: cartPrice = calculateCartPrice($cart);

    function calculateCartPrice(ourCart) {
        let price = 0;

        ourCart.forEach((element) => {
            price += element.price * element.count;
        });

        return price;
    }
</script>

<header>
    <div class="container">
        <div class="logo">
            <img src="/logo.png" alt="X" />
            <div class="info">
                <h1>Svelte pizza</h1>
                <div class="description">Сама смачна піца</div>
            </div>
        </div>
        <div class="button">
            <a href="/cart" class="btn orange">
                ${cartPrice} | <i class="fa-solid fa-cart-shopping" />
                {$cart.length}
            </a>
        </div>
    </div>
</header>

<slot />

<footer>
    <div class="container">Made by ItSchool</div>
</footer>
