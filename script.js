





// Cart working JS
if(document.readyState== "loading") {
    document.addEventListener("DOMContentLoaded", ready);

} else {
    ready();
}

 // Add To Cart
 var addCart = document.getElementsByClassName("add-cart");
 for (var i =0; i <addCart.length; i++) {
     var button = addCart[i];
     button.addEventListener("click", addCartClicked);
 }

//CartIcon work

document 
.getElementsByClassName('add-cart')[0]
.addEventListener("click", CarticonClicked);

  
// CartIcon Button
function CarticonClicked() {
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("add-cart")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//


