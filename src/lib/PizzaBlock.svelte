<script>
    import ParametrSelector from "./ParametrSelector.svelte";

    let tistoType = ["Тонкий", "Товстий"];
    let pizzaSyze = ["26см", "34см", "42см"];
</script>

<div class="pizza-block">
    <img src="/pizza.jpg" class="image" alt="X" />
    <div class="name">Чізбургер піца</div>
    <div class="parametrs">
        <ParametrSelector parametrs={tistoType} />
        <ParametrSelector parametrs={pizzaSyze} />
    </div>
    <div class="price">
        <div class="amount">от $326</div>
        <button class="btn orange"><i class="fa-solid fa-plus" /> Додати</button
        >
    </div>
</div>
