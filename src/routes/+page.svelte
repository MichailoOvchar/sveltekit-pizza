<script>
    import { onMount } from "svelte";
    import MenuFilter from "../lib/MenuFilter.svelte";
    import PizzaBlock from "../lib/PizzaBlock.svelte";
    import SortBlock from "../lib/SortBlock.svelte";
    import axios from "axios";

    let pizzas = [];

    let filterValue = null;

    function getPizzas() {
        let url = "http://localhost:3000/pizzas?";

        if (filterValue != null) {
            url += "category=" + filterValue + "&";
        }

        axios({
            method: "get",
            url: url,
        })
            .then(function (data) {
                console.log(data.data);
                pizzas = data.data;
            })
            .catch(function (error) {
                console.warn(error);
            });
    }

    onMount(function () {
        getPizzas();
    });
</script>

<section id="filter">
    <div class="container">
        <MenuFilter
            on:select-filter={function (e) {
                filterValue = e.detail.value;
                getPizzas();
            }}
        />
        <SortBlock />
    </div>
</section>

<section id="menu">
    <div class="container">
        {#each pizzas as pizza}
            <PizzaBlock
                id={pizza.id}
                image={pizza.imageUrl}
                name={pizza.name}
                price={pizza.price}
                size={pizza.sizes}
                type={pizza.types}
            />
        {/each}
    </div>
</section>
