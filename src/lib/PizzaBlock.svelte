<script>
    import { onMount } from "svelte";
    import ParametrSelector from "./ParametrSelector.svelte";
    import { cart } from "./store/store.js";

    export let id = 0;
    export let image = "/pizza.jpg";
    export let name = "";
    export let price = 0;

    export let type = [];
    export let size = [];

    let tistoType = [
        {
            name: "Тонкий",
            value: 0,
        },
        {
            name: "Товстий",
            value: 1,
        },
    ];
    let pizzaSyze = [
        {
            name: "26см",
            value: 26,
        },
        {
            name: "30см",
            value: 30,
        },
        {
            name: "40см",
            value: 40,
        },
    ];

    let selectType = tistoType[0].name;
    let selectSize = pizzaSyze[0].name;

    function addToCart() {
        let cartObject = {
            id: id,
            image: image,
            name: name,
            price: price,
            count: 1,
            parametrs: selectType + ", " + selectSize,
        };

        let cartOld = $cart;

        let finded = cartOld.findIndex(function (elem) {
            return (
                elem.id == cartObject.id &&
                elem.parametrs == cartObject.parametrs
            );
        });

        let newCart = null;

        if (finded > -1) {
            newCart = cartOld;
            newCart[finded].count++;
        } else {
            newCart = [...cartOld, cartObject];
        }

        cart.set(newCart);
    }

    onMount(function () {
        tistoType = tistoType.map(function (elem) {
            let checkIsAble = type.includes(elem.value);

            elem.disabled = !checkIsAble;

            return elem;
        });

        pizzaSyze = pizzaSyze.map(function (elem) {
            let checkIsAble = size.includes(elem.value);

            elem.disabled = !checkIsAble;

            return elem;
        });
    });
</script>

<div class="pizza-block">
    <img src={image} class="image" alt="X" />

    <div class="name">{name}</div>
    <div class="parametrs">
        <ParametrSelector
            parametrs={tistoType}
            on:select={function (e) {
                selectType = e.detail.name;
            }}
        />
        <ParametrSelector
            parametrs={pizzaSyze}
            on:select={function (e) {
                selectSize = e.detail.name;
            }}
        />
    </div>
    <div class="price">
        <div class="amount">от ${price}</div>
        <button class="btn orange" on:click={addToCart}>
            <i class="fa-solid fa-plus" /> Додати
        </button>
    </div>
</div>
