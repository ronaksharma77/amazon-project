let cartHTML = '';

products.forEach((product) => {
  cartHTML += `
      <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${(product.name)}
                </div>
                <div class="product-price">
                ₹${product.Price}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">2</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-speeds">
                <div class="delivery-speeds-title">
                  Choose a delivery-speed:
                </div>
                <div class="delivery-speed">
                  <input type="radio" checked
                    class="delivery-speed-input"
                    name="delivery-speed-1">
                  <div>
                    <div class="delivery-speed-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-speed-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-speed">
                  <input type="radio"
                    class="delivery-speed-input"
                    name="delivery-speed-1">
                  <div>
                    <div class="delivery-speed-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-speed-price">
                      ₹49 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-speed">
                  <input type="radio"
                    class="delivery-speed-input"
                    name="delivery-speed-1">
                  <div>
                    <div class="delivery-speed-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-speed-price">
                      ₹99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
  `;
});
let finalMoney=0;
products.forEach((product) => {
        finalMoney+=product.Price;
});

document.querySelector('.order-summary').innerHTML = cartHTML;

document.querySelector('.js-middle-section').innerHTML = `Checkout (<a class="return-to-home-link"
href="amazon.html">${carts.length} items</a>)`;

document.querySelector('.item-count').innerHTML = `Items (${carts.length}) :`;
document.querySelector('.js-item-cost').innerHTML = ` ₹${finalMoney}`;
document.querySelector('.js-total-before-tax').innerHTML = ` ₹${59+finalMoney}`;
document.querySelector('.js-tax').innerHTML = ` ₹${(0.1*finalMoney).toFixed(2)}`
document.querySelector('.js-order-total').innerHTML = ` ₹${(1.1*finalMoney+59).toFixed(2)}`

