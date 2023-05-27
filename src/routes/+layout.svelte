<script>
    import "../style/app.scss";
    import { cart } from "../lib/store/store.js";
    import { onMount } from "svelte";

    let cartPrice = 0;
    let readedFromStorage = false;

    $: cartPrice = calculateCartPrice($cart);

    function calculateCartPrice(ourCart) {
        if (readedFromStorage) {
            try {
                let string = JSON.stringify(ourCart);
                localStorage.setItem("cart", string);
            } catch (e) {}
        }

        let price = 0;

        ourCart.forEach((element) => {
            price += element.price * element.count;
        });

        return price;
    }

    onMount(function () {
        try {
            let string = localStorage.getItem("cart");
            let obj = JSON.parse(string);

            cart.set(obj);
        } catch (e) {}

        readedFromStorage = true;
    });
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
