export function clickOutside(node) {

   let handleClick = function (e) {
      if (node && !node.contains(e.target) && !e.defaultPrevented) {
         node.dispatchEvent(new CustomEvent('click-outside'));
      }
   }

   document.addEventListener('click', handleClick);

   return {
      destroy() {
         document.removeEventListener('click', handleClick)
      }
   };

}