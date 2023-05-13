<script>
   let filters = [
      "Всі",
      "М'ясна",
      "Вегетеріанська",
      "Гриль",
      "Гостра",
      "Закрита",
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
         }}
      >
         {item}
      </button>
   {/each}
</div>
