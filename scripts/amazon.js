var imageSources = [
  "https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png",
  "https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg"
]

var index = 0;
setInterval (function(){
if (index === imageSources.length) {
index = 0;
}
document.getElementById("image").src = imageSources[index];
index++;
} , 2000);

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ₹${(product.Price)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
    });
    
  });
  
  
    

