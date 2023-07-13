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
  
  
    const footer=document.querySelector('.js-footer')
    .innerHTML=
    `<a style="text-decoration: none;" href="#">
  <div class="back-to-top">
  Back to Top
</div>
</a>
<div class="amazon-details">
<div>
<div class="amazon-details-header">Get to know us</div>
<div class="amazon-details-list">
    <div class="amazon-links"><a class="amazon-link" href="https://www.aboutamazon.in/">About us</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://amazon.jobs/en/">Careers</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://press.aboutamazon.in/">Press releases</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.science/">Amazon science</a></div>
</div>
</div>
<div>
<div class="amazon-details-header">Connect with us</div>
<div class="amazon-details-list">
  <div class="amazon-links"><a class="amazon-link" href="https://www.facebook.com/AmazonIN">Facebook</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://twitter.com/AmazonIN">Twitter</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://www.instagram.com/amazondotin/">Instagram</a></div>
</div>
</div>
<div>
<div class="amazon-details-header">Make money with us</div>
<div class="amazon-details-list">
  <div class="amazon-links"><a class="amazon-link" href="https://sell.amazon.in/">Sell on Amazon</a></div>
  <div class="amazon-links"><a class="amazon-link" href="amazon.html">Sell under Amazon Accelerator</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://brandservices.amazon.in/">Protect and Build Your Brand</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://sell.amazon.in/grow-your-business/amazon-global-selling">Amazon Global Selling</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://affiliate-program.amazon.in/">Become an Affiliate</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://sell.amazon.in/sell-online/fulfillment-by-amazon">Fulfilment by Amazon</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://advertising.amazon.com/">Advertise Your Products</a></div>
  <div class="amazon-links"><a class="amazon-link" href="https://www.amazonpay.in/merchant">Amazon Pay on Merchants</a></div>
</div>
</div>
<div>
<div class="amazon-details-header">Let us help you</div>
<div class="amazon-details-list">
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/help/customer/display.html?ref_=cs_hlp_gtwy_ss_covid&nodeId=GDFU3JS5AL6SYHRD">COVID-19 and Amazon</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/css/homepage.html">Your Account</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/css/returns/homepage.html">Returns centre</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/help/customer/display.html">100% purchase protection</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp">Amazon App Download</a></div>
    <div class="amazon-links"><a class="amazon-link" href="https://www.amazon.in/gp/help/customer/display.html">Help</a></div>
</div>
</div>


</div>
<hr>
<div class="disclaimer">
<div class="footer-logo"> <a href="amazon.html"><img class="amazon-logo" src="images/amazon-logo-white1.png"></a>
</div> 
<div class="copyright-details">
© 1996-2023, Amazon.com, Inc. or its affiliates
</div>
</div>`

