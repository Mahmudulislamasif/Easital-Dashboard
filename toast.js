//Quantity Counter
function QuantatiyPlusMinus() {
    document.addEventListener('click', function(e) {
      if (e.target.matches('.qtyplus, .qtyminus')) {
        handleQuantityChange(e.target, e.target.classList.contains('qtyplus') ? 1 : -1);
      }
    });
  
    function handleQuantityChange(target, value) {
      const input = document.querySelector('input[name="quantity"]');
      if (input) {
        let currentVal = parseInt(input.value) || 0;
        input.value = Math.max(1, currentVal + value);
      }
    }
  }
  
  QuantatiyPlusMinus()