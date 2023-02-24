    let cart = [];
  
    function addToCart(id, name, price) {
      
      let itemInCart = false;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          cart[i].quantity++;
          itemInCart = true;
          break;
        }
      }
      
      if (!itemInCart) {
        cart.push({ id: id, name: name, price: price, quantity: 1 });
      }
      updateCart();
    }
  
    function updateCart() {
      
      let cartTable = document.getElementById("cart");
      cartTable.innerHTML = "";
  
      
      let headerRow = document.createElement("tr");

      let headerName = document.createElement("th");
      headerName.innerHTML = "Item";
      headerRow.appendChild(headerName);
      let headerQuantity = document.createElement("th");
      headerQuantity.innerHTML;
      headerQuantity.innerHTML = "Quantity";
      headerRow.appendChild(headerQuantity);
      let headerPrice = document.createElement("th");
      headerPrice.innerHTML = "Price";
      headerRow.appendChild(headerPrice);
      
      cartTable.appendChild(headerRow);
  

      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let itemRow = document.createElement("tr");
        
        let itemName = document.createElement("td");
        itemName.innerHTML = cart[i].name;
        itemRow.appendChild(itemName);
        
        let itemQuantity = document.createElement("td");
        itemQuantity.innerHTML = cart[i].quantity;
        itemRow.appendChild(itemQuantity);
        
        let itemPrice = document.createElement("td");
        itemPrice.innerHTML = "$" + (cart[i].price * cart[i].quantity).toFixed(2);
        itemRow.appendChild(itemPrice);

        cartTable.appendChild(itemRow);
        total += cart[i].price * cart[i].quantity;
      }
  
      
      let totalRow = document.createElement("tr");

      let totalCol = document.createElement("td");
      totalCol.setAttribute("colspan", "2");
      totalCol.innerHTML = "Total:";
      totalRow.appendChild(totalCol);
      
      let totalPrice = document.createElement("td");
      totalPrice.innerHTML = "$" + total.toFixed(2);
      totalRow.appendChild(totalPrice);
      
      cartTable.appendChild(totalRow);
    }