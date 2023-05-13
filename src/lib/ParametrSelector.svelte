<script>
   export let parametrs = [];

   let selectParam = 0;
</script>

<div class="block">
   {#each parametrs as parametr, index}
      <div
         class="parametr"
         class:select={selectParam == index}
         on:click={function () {
            selectParam = index;
         }}
      >
         {parametr}
      </div>
   {/each}
</div>
