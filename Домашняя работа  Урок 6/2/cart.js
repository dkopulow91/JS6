var $cart = document.getElementById('cart');

    	function buildTotal(cart) {
    		var sum = 0; // считаем сумму товаров в корзине
    		for(i = 0; i < cart.length; i++) {
    			sum = sum + cart[i].price * cart[i].quantity;
    		}


      function init() {
        var $button = document.getElementById('button');     
        $button.addEventListener('click', handleButtonClick);
      }

      function handleButtonClick(event) { // функция для обработчика событий
        console.log(event);
      }

      window.addEventListener('load', init);
    			