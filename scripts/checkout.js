let cartHTML = '<div class="page-title">Review your order</div><div class="checkout-grid"></div>';

products.forEach((product) => {
  cartHTML += `
  <div class="order-summary">
      <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
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
  `;
});
let finalMoney=0;
products.forEach((product) => {
        finalMoney+=product.Price;
});
cartHTML+=`<div class="payment-summary">
  <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${products.length}):</div>
    <div class="payment-summary-money">₹${finalMoney}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">₹59</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">₹${59+finalMoney}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">₹${(0.1*finalMoney).toFixed(2)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">₹${(59+1.1*finalMoney).toFixed(2)}</div>
  </div>

  <a href="orders.html"><button class="place-order-button button-primary">
    Place your order
  </button></a>
</div>`;
document.querySelector('.main').innerHTML = cartHTML;
