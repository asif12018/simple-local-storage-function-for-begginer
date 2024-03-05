
const addProduct = () =>{
    //getting data from product input
    const productField = document.getElementById('product-name');
    //getting data from product quantity
    const quantityField = document.getElementById('product-quantity');
    const quantity = quantityField.value;
    const product = productField.value;
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
    productField.value = '';
    quantityField.value = '';
}

const displayProduct = (product, quantity) =>{

    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.className = "text-2xl font-bold"
    li.innerHTML = `${product}: ${quantity}`;
    ul.appendChild(li);
}

//checking is data avaliable in localstorage
const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

//saving data in localstorage
const saveProductToLocalStorage = (product,quantity) =>{
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified);
  const data = localStorage.getItem('cart');
  const dataParsed = JSON.parse(data);
  for(let item in dataParsed){
    
    displayProduct(item,dataParsed[item]);
  }

}
addProduct();
