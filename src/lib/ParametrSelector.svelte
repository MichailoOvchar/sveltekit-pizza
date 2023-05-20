<script>
   import { createEventDispatcher } from "svelte";

   export let parametrs = [];

   let dispatcher = createEventDispatcher();

   let selectParam = 0;
</script>

<div class="block">
   {#each parametrs as parametr, index}
      <div
         class="parametr"
         class:select={selectParam == index}
         class:disabled={parametr.disabled}
         on:click={function () {
            selectParam = index;

            dispatcher("select", {
               name: parametr.name,
               value: parametr.value,
            });
         }}
      >
         {parametr.name}
      </div>
   {/each}
</div>
