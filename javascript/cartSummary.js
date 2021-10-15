/*Opening the cart*/
const displaySummary = document.querySelector('#display_summary');
const cartEmpty = document.getElementById('item_total_count');
const displaySummaryEmpty = document.querySelector('#display_summary_empty');
function OpenCart(){
    if(cartEmpty.innerText ==  ""){
        if(displaySummaryEmpty.classList.contains("cartEmpty")){
            displaySummaryEmpty.classList.remove("cartEmpty");
            displaySummaryEmpty.style.display = "none";
        }else{
            displaySummaryEmpty.classList.add("cartEmpty");
            displaySummaryEmpty.style.display = "block";
        }
    }else{
        if(displaySummary.classList.contains("cart")){
            displaySummary.classList.remove("cart");
            displaySummary.style.display = "none";
        }else{
            displaySummary.classList.add("cart");
            displaySummary.style.display = "block";
        }
    }
    
}

/*Adding and reducing item total count/pcs*/
let count = 0;
var displayTotal = document.getElementById("count_total");
var cartTotalValueCount = document.getElementById("total_item_value");
function increaseItem(){
  count++;
    for(var i=0; i<count; i++){
        displayTotal.innerHTML = count;
        addToTotal(count);
        displaySummary.classList.remove("cart");
        displaySummary.style.display = "none";
        displaySummaryEmpty.classList.remove("cartEmpty");
        displaySummaryEmpty.style.display = "none";
    }
}
function decreaseItem(){
    if(count > 0)
    {
        count--;
        displayTotal.innerHTML = count;
        displaySummary.classList.remove("cart");
        displaySummary.style.display = "none";
        displaySummaryEmpty.classList.remove("cartEmpty");
        displaySummaryEmpty.style.display = "none";
    }else{
        displayTotal.innerHTML = count;
    }addToTotal(count);
}

/*Adding the item inside the cart*/
var addToCart = document.getElementById("add_to_cart");
var cartItemCount = document.getElementById("item_total_count");
var itemTotal = document.getElementById("count_total");
var temporary =0;
var localStorageCounter;
function addToTotal(n){
    addToCart.onclick = function(){
        var totalBasket = parseInt(n);
        if(itemTotal.innerHTML != 0)
        {
           temporary=JSON.parse(localStorage.getItem("totalCounter"));
           cartItemCount.innerText = totalBasket + temporary;
           cartItemCount.classList.add("addToCart");
           cartTotalValueCount.innerHTML = count + temporary;
           displayTotal.innerText = 0;
           count = 0;
           localStorageCounter = totalBasket + temporary;
        }else{
            return;
        }ComputeTotalPrice(localStorageCounter);
        localStorage.setItem("totalCounter", localStorageCounter);
    }
}
/*to keep the total item in the cart when reloading the page*/
function onLoadCartFunction(){
    var  temporary=JSON.parse(localStorage.getItem("totalCounter"));
    if(temporary){
       cartItemCount.innerText = temporary;
       cartItemCount.classList.add("addToCart");
       cartTotalValueCount.innerText = temporary;
       var totalItem = temporary * 125;
       autoCompute.innerText = "$" + parseFloat(totalItem).toFixed(2);
    }
}
/*Cart summary total price*/
var autoCompute = document.getElementById("total_payment");
function ComputeTotalPrice(n){
    var totalItem = n * 125;
    autoCompute.innerText = "$" + parseFloat(totalItem).toFixed(2);
}

/*Deleting cart item*/
let deleteCartItem = document.getElementById("delete_cart_item");
function DeleteItem(){
    if(displayTotal != 0){
        cartItemCount.innerText = "";
        cartTotalValueCount.innerText = "";
        displayTotal.innerText = 0;
        autoCompute.innerText = "";
        count = 0;
        displaySummary.classList.remove("cart");
        displaySummary.style.display = "none";
        displaySummaryEmpty.classList.add("cartEmpty");
        displaySummaryEmpty.style.display = "block";
        cartItemCount.classList.remove("addToCart");
        localStorage.setItem("totalCounter", 0);
    }else{
        return;
    }
}

/*to get the total item saved from the 
local storage when page was reloaded*/
onLoadCartFunction();
