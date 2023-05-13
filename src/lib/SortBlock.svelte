<script>
   import { fade } from "svelte/transition";
   import { clickOutside } from "./directive/clickOutside.js";

   let popup = false;
   let listOfSort = ["Популярні", "По ціні", "По алфавіту"];

   let selectSort = 0;

   function selectTypeOfSort(index) {
      selectSort = index;
      popup = false;
   }
</script>

<div
   class="sort-block"
   use:clickOutside
   on:click-outside={function () {
      popup = false;
   }}
>
   <div class="title"><i class="fa-solid fa-caret-down" /> Сортувати за:</div>
   <div
      class="selected"
      on:click={function () {
         popup = !popup;
      }}
   >
      {listOfSort[selectSort]}
   </div>

   {#if popup}
      <div class="pop-up" transition:fade={{ duration: 200 }}>
         <ul>
            {#each listOfSort as item, index}
               <li
                  on:click={function () {
                     selectTypeOfSort(index);
                  }}
               >
                  {item}
               </li>
            {/each}
         </ul>
      </div>
   {/if}
</div>
