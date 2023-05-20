<script>
   import { createEventDispatcher } from "svelte";

   let dispatcher = createEventDispatcher();

   let filters = [
      { name: "Всі", value: null },
      { name: "М'ясна", value: 0 },
      { name: "Вегетеріанська", value: 1 },
      { name: "Гриль", value: 2 },
      { name: "Гостра", value: 3 },
      { name: "Закрита", value: 4 },
   ];

   let selectFilter = 0;
</script>

<div class="menu-filter">
   {#each filters as item, index}
      <button
         class="btn gray"
         class:select={index == selectFilter}
         on:click={function () {
            selectFilter = index;

            dispatcher("select-filter", { value: item.value });
         }}
      >
         {item.name}
      </button>
   {/each}
</div>
