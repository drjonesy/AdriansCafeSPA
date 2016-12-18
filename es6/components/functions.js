/*============== 
--- If possible modify site: so application works without new pages. 
    All content loads by on click methods. Basically, a React concept.
    I will need to create my only style of spa, using click functions.
    This would also require the footer and header be placed in their own js file.
    functions would be in their own js file
    data would be in its own js file.
=============*/

// On Click Load Page Contents
function loadPage(pageName){
  // on click id load page content
  let contents = eval('page'+pageName+'()');
  $('.content').html(contents);
}

// load category menu
function loadCatMenu(){
  let catMenuHTML = '';
  catMenuHTML += `<div class="col-xs-12"><ul class="nav nav-pills menu-nav">`;
  catMenuHTML += `<li onClick="loadPage('Menu')"><a href="#">All</a></li>`;
  for(let i in menuCategories){
    catMenuHTML += `<li onClick="loadCatPage('`+menuCategories[i]+`')"><a href="#">`+ menuCategories[i] +`</a></li>`;
  }
  catMenuHTML += `</ul></div>`;
  return catMenuHTML;
}

// sort menu by category
function loadCatPage(cat){
  let contents = eval(`pageCatMenu('`+cat+`')`);
  $('.content').html(contents);
}

//Load Cart Item Details Page Contents
function loadCartItemDetailsPage(i){
  // on click id load page content
  let contents = eval('pageItemDetails(i)');
  $('.content').html(contents);
}

// return item in cart ingredients
function getIngredients(i){
  let ingredientsHTML = '';
  for(let item in cart[i].ingredients){
    ingredientsHTML += 
    `<div class="col-xs-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <input id="ingredient`+item+`" type="checkbox" checked> `+cart[i].ingredients[item]+`
        </div>
      </div> 
     </div>`;
  }
  return ingredientsHTML;
}

// get and display custom item ingredients
// not used in current version
function updateCartItem(i){
  let customHTML = '';
  for(let item in cart[i].custom){
    $('ingredient'+item).is('checked',function(){
      console.log('h');
    });
  }
  //if all ingredients are checked => do nothing
  //if ingredients unchecked => display Custom Or
  return customHTML;
}

// Add Item to Cart Function
function addToCart(i){
  let obj = inventory[i];
  toast(obj.image+' (added to cart)');
  obj.custom = inventory[i].ingredients;
  cart.push(obj);
}

// Remove from Cart Function
function removeFromCart(i){
  // need to remove not shift
  cart.splice(i, 1);
  loadPage('Cart');
}

// get number items in cart array
function setNumberOfItemsInCart(){
  // return the items in cart array
}



//update profile data
function updateProfile(){
  profileInfo.fname = $('#fname').val();
  profileInfo.lname = $('#lname').val();
  profileInfo.email = $('#email').val();
  profileInfo.phone = $('#phone').val();
  loadPage('Profile');
}

function login(){
  $('.topNav').html(loggedInNav());
  loadPage('Cart');
}

function logout(){
  $('.topNav').html(loggedOutNav());
  loadPage('Login');
}

function setPickupTime(){
  pickupTime = $('.time-options').val();
}

function getTimeOptionsList(){
  let optionHTML = '';
  for(let i in timeOptionsArray){
    optionHTML += `<option>`+timeOptionsArray[i]+`</option>`;
  }
  return optionHTML;
}

function totalCost(){
  let sum = 0;
  for(let i in cart){
    sum += parseFloat(cart[i].price);
  }
  return sum.toFixed(2);
}

function getUserInfo(){
  let userHTML = '';
  userHTML += 
  profileInfo.fname+' '+profileInfo.lname+'<br />'+
    profileInfo.email+'<br />'+
    profileInfo.phone;
  
  return userHTML;  
}

function logoutAndClearOrder(){
  $('.topNav').html(loggedOutNav());
  cart=[];
  pickupTime = '';
  loadPage('Login');
}

//Toast notifcation
function toast(message) {
    let x = document.getElementById("snackbar")
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


/*== LOAD DIFFERENT PAGES ==*/
//home page
const pageHome = () => {
  let homeHTML = '';
  homeHTML += `<div class="row module-block">
        <!-- Row one: specials -->
        <div class="col-xs-12">
          <a href="#" onclick="loadPage('Specials')"><img src="img/homepage/specials.png" class="img-responsive border-white"></a>
        </div>
      </div>
        <!-- Row two: lunch, newsletter, snacks -->
      <div class="row module-block">
        <div class="col-xs-6">
          <a onclick="loadCatPage('sandwiches')"><img src="img/homepage/lunch.png" class="img-responsive border-white"></a>
        </div>
        <div class="col-xs-6">
        <!-- Split box into two horizontal long blocks -->
          <div class="verticle-half-6 green-back">
            <a href="#"><img src="img/homepage/newsletter.png" class="img-responsive border-white"></a>
          </div>

          <div class="verticle-half-6 orange-back">
            <a onclick="loadCatPage('snacks')" href="#"><img src="img/homepage/snacks.png" class="img-responsive border-white"></a>
          </div>
        </div>
      </div>
       

        <!-- Row three: breaksfast, drinks -->
       <div class="row module-block">
        <div class="col-xs-6">
          <a onclick="loadCatPage('breakfast')" href="#"><img src="img/homepage/breakfast.png" class="img-responsive border-white"></a>
        </div>
        <div class="col-xs-6">
          <a onclick="loadCatPage('drinks')" href="#"><img src="img/homepage/drinks.png" class="img-responsive border-white"></a>
        </div>
      </div>`;
  return homeHTML;
}
//menu page
const pageMenu = () => {
  let listHTML = '';
  listHTML += loadCatMenu();
  
  listHTML += `</ul></div>`;
  for(let i in inventory){
    listHTML += 
    `<div class="col-xs-12">
      <table class="table">
        <tbody>
          <tr>
            <td class="td-col-img"><a href="#"><img src="img/items/`+inventory[i].image+`.jpg" class="img-responsive small-thumbnail thumbnail" /></a></td>
            <td class="td-col-text">
              <h3>`+inventory[i].image+`</h3>
              <p>`+inventory[i].ingredients+`</p>
            </td>
            <td class="td-col-button">
              <button onClick="addToCart(`+i+`)" type="button" class="btn btn-default pull-right" aria-label="item price">$ `+inventory[i].price+` <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`;
  }
  return listHTML;
}
//category page
const pageCatMenu = (cat) => {
  let listHTML = '';
  listHTML += loadCatMenu();
  
  for(let i in inventory){
    if(inventory[i].category === cat){
      listHTML += 
      `<div class="col-xs-12">
        <table class="table">
          <tbody>
            <tr>
              <td class="td-col-img"><a href="#"><img src="img/items/`+inventory[i].image+`.jpg" class="img-responsive small-thumbnail thumbnail" /></a></td>
              <td class="td-col-text">
                <h3>`+inventory[i].image+`</h3>
                <p>`+inventory[i].ingredients+`</p>
              </td>
              <td class="td-col-button">
                <button onClick="addToCart(`+i+`)" type="button" class="btn btn-default pull-right" aria-label="item price">$ `+inventory[i].price+` <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
    }
  }
  return listHTML;
}

//specials page
const pageSpecials = () => {
  let specialsHTML = '';
  for(let i in inventory){
    if(inventory[i].specials == true){
      specialsHTML += `<div class="col-xs-12">
        <table class="table">
          <tbody>
            <tr>
              <td class="td-col-img"><a href="#"><img src="img/items/`+inventory[i].image+`.jpg" class="img-responsive small-thumbnail thumbnail" /></a></td>
              <td class="td-col-text">
                <h3>`+inventory[i].image+`</h3>
                <p>`+inventory[i].ingredients+`</p>
              </td>
              <td class="td-col-button">
                <button onClick="addToCart(`+i+`)" type="button" class="btn btn-default pull-right" aria-label="item price">$ `+inventory[i].price+` <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
    }
  }
  return specialsHTML;
}



//user profile page
const pageProfile = () => {
  let profileHTML = '';
  profileHTML += 
  `<div class="row module-block outside-padding">
    <div class="col-xs-12 bottom-border-blue">
      <div class="text-left cookies">Profile</div>
    </div>
  </div>
  <div class="row module-block outside-padding">
    <div class="col-xs-12">
      <div class="form-group">
        <label for="fname">First Name</label>
        <input type="text" class="form-control" id="fname" value="`+profileInfo.fname+`">
      </div>
      <div class="form-group">
        <label for="lname">Last Name</label>
        <input type="text" class="form-control" id="lname" value="`+profileInfo.lname+`">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" value="`+profileInfo.email+`">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="phone" class="form-control" id="phone" value="`+profileInfo.phone+`">
      </div>
      <button onClick="updateProfile()" type="button" class="btn btn-default pull-right" aria-label="update profile">Update <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button>
      <div
    <div>
  </div>
  `;
  return profileHTML;
}
// login page
const pageLogin = () => {
  let loginHTML = '';
  loginHTML += 
  `<p></p>
  <div class="container-fluid max-width-30em">
    <div class="row module-block outside-padding">
      <div class="col-xs-12">
         <center>
          <h3>Sign In</h3>

          <div class="payment-form">
            <div class="input-group input-group-lg">
              <div class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></div>
              <input type="text" name="email" class="form-control" placeholder='Email' />
            </div>

            <div class="input-group input-group-lg">
              <div class="input-group-addon"><i class="glyphicon glyphicon-asterisk"></i></div>
              <input type="password" name="password" class="form-control" placeholder="Password" />
            </div>
           
            <p><input type="checkbox" checked> Remember me</p>
            <p><button onClick="login()" type="button" class="btn btn-success btn-lg btn-block">Log In</button></p>
            <p>or</p>
            <h3>Create Account</h3>
          </center>

        </div>
      </div>
    </div> 
  </div>
  <p></p>`;
  return loginHTML;
}


// items in cart page
const pageCart = () => {
  
  let cartHTML = '';
  cartHTML += 
  `<div class="row module-block outside-padding">
    <div class="col-xs-12 bottom-border-blue">
      <div class="text-left cookies">Items in Cart</div>
    </div>
  </div>

  <!-- Order: Items in Cart ========================================= -->

  <div class="row module-block">
    <div class="col-xs-12">
      <table class="table">
        <thead>
          <tr class="active">
            <th>Preview</th>
            <th>Item</th>
            <th>Description / Ingredients</th>
            <!-- <th>Order Details</th> -->
            <th colspan="2">Price</th>
          </tr>
        </thead>
        <tbody class="order-items-list">`;
  //show items in cart
  for(let i in cart){
    cartHTML += 
    `<tr class="cartItem`+i+`">
      <td class="td-col-img"><img src="img/items/`+cart[i].image+`.jpg" class="img-responsive thumbnail small-thumbnail" /></td>
      <td>`+cart[i].image+`</td>
      <td>`+cart[i].custom+`</td>
      <!-- <td><a href="#" onClick="loadCartItemDetailsPage(`+i+`)" type="button" class="btn btn-warning editItemDetails" aria-label="edit details">edit</a></td> -->
      <td>$`+cart[i].price+`</td>
      <td><a href="#" onClick="removeFromCart(`+i+`)"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
    </tr>`;
  }
    cartHTML +=
        `</tbody>
        </table>
      </div>
    </div> `;
    cartHTML +=
    ` <div class="row module-block">
        <div class="col-xs-6">
           <table class="table table-hover">
              <thead>
                <tr>
                  <th colspan="2">Set Pickup Time</th>
                </tr>
              </thead>
   
              <tbody>
                <tr>
                  <td>
                    <select class="form-control time-options">
                      <option>`+pickupTime+`</option>
                      `+getTimeOptionsList()+`
                    </select></td>
                  <td><button onClick="setPickupTime()" type="button" class="btn btn-success">Set &amp; Confirm Time</button></td>
                </tr>
              </tbody>
            </table>
        </div> 
      </div>`;
      cartHTML +=
      `<hr/>
      <div class="row module-block">
        <div class="col-xs-6">Order Date: <strong>`+today+`</strong></div>
        <div class="col-xs-6">Total: <strong>$ `+totalCost()+`</strong></div>
      </div><p></p>`;
      cartHTML += 
      `<div class="row module-block">
        <div class="col-xs-12">
          <button onClick="loadPage('Menu')" type="button" class="btn btn-default pull-left" aria-label="add more items">Add More Items <span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
          <button onClick="loadPage('Payment')" type="button" class="btn btn-info pull-right" aria-label="New Item">Place Order <span class="glyphicon glyphicon-credit-card" aria-hidden="true"></span></button>
        </div> 
      </div>`;

  return cartHTML;
}



/*========================
 Need to modify custom ingredients when checked and unchecked using
 push() and shift() on cart[i].custom
 
=============*/

// cart item details page
const pageItemDetails = (i) => {
  let customIngredients = cart[i].custom;
  let itemDetailsHTML = '';
  itemDetailsHTML += 
  ` <div class="row module-block outside-padding">
      <div class="col-xs-12 bottom-border-blue">
        <div class="text-left cookies">Item Details > `+ cart[i].image +`</div>
      </div>
    </div>

    <div class="row module-block">
      <div class="col-xs-12">
        <table class="table">
          <thead>
            <tr class="active">
              <th>Image</th>
              <th>Item</th>
              <th>Description / Ingredients</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><a href="#"><img src="img/items/`+cart[i].image+`.jpg" class="img-responsive small-thumbnail thumbnail" /></a></td>
              <td>`+cart[i].image+`</td>
              <td>`+cart[i].custom+`</td>
              <td>$ `+cart[i].price+`</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Ingredients -->

    <div class="row module-block">
      <div class="col-xs-12">
        <div class="bg-section-header">Add / Remove Ingredients</div>
      </div>
    </div>
    <div class="col-xs-12">
      <a href="#" onClick="updateCartItem(`+i+`)" class="btn btn-warning btn-lg pull-right margin-1em">
        <span class="glyphicon glyphicon-share-alt flip-glyphicon" aria-hidden="true"></span> Back to Order
      </a>
    </div>

    <div class="availableIngredients">
      `+getIngredients(i)+`
    </div>`;
  return itemDetailsHTML;
}


// payment options page
const pagePayment = () => {
  let paymentHTML = '';
  paymentHTML += 
  ` <div class="row module-block outside-padding">
      <div class="col-xs-12 bottom-border-blue">
        <div class="text-left cookies">Payment</div>
      </div>
    </div>`;
  paymentHTML += 
  `<div class="container-fluid max-width-30em">
    <div class="row module-block outside-padding">
      <div class="col-xs-12 box-grey">
        <img src="img/logo-blue.svg" class="img-responsive small-thumbnail container-fluid">
        <center>
        <h3>$`+totalCost()+`</h3>

          <div class="payment-form">
            <div class="input-group input-group-lg">
              <div class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></div>
              <input type="text" name="card-number" class="form-control" placeholder='Card Number' />
            </div>

            <div class="input-group input-group-lg">
              <div class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></div>
              <input type="text" name="expire-year" class="form-control" placeholder="MM/YY" />
            </div>

            <div class="input-group input-group-lg">
              <div class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></div>
              <input type="text" name="cvc" class="form-control" placeholder="CVC" />
            </div>
            <p>Pickup Time: `+pickupTime+`</p>
            <button onClick="loadPage('Confirmation')" type="button" class="btn btn-info btn-lg">Confirm Order: $`+totalCost()+`</button></center>


      </div>
    </div> 
   </div>  
  </div>`;
  return paymentHTML;
}
// payment confirmation page
const pageConfirmation = () => {
  let confirmationHTML = '';
  confirmationHTML += 
  ` <div class="row module-block outside-padding">
      <div class="col-xs-12 bottom-border-blue">
        <div class="text-left cookies">Payment Confirmation</div>
      </div>
    </div>`;
  confirmationHTML += 
  ` <div class="row module-block">
      <div class="col-xs-12">
      <h4><strong>Order Info</strong></h4>
        <table class="table">
          <thead>
            <tr class="active">
              <th>User Info</th>
              <th>Order Date</th>
              <th>Pickup Time</th>
              <th>Total Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>`+getUserInfo()+`</td>
              <td>`+today+`</td>
              <td>`+pickupTime+`</td>
              <td>`+totalCost()+`</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`;
    confirmationHTML += 
    `<div class="row module-block">
    <div class="col-xs-12">
      <table class="table">
        <thead>
          <tr class="active">
            <th>Preview</th>
            <th>Item</th>
            <th>Description / Ingredients</th>
            <!-- <th>Order Details</th> -->
            <th>Price</th>
          </tr>
        </thead>
        <tbody class="order-items-list">`;
      //show items in cart
      for(let i in cart){
        confirmationHTML += 
        `<tr class="cartItem`+i+`">
          <td class="td-col-img"><img src="img/items/`+cart[i].image+`.jpg" class="img-responsive thumbnail small-thumbnail" /></td>
          <td>`+cart[i].image+`</td>
          <td>`+cart[i].custom+`</td>
          <!-- <td><a href="#" onClick="loadCartItemDetailsPage(`+i+`)" type="button" class="btn btn-warning editItemDetails" aria-label="edit details">edit</a></td> -->
          <td>$`+cart[i].price+`</td>
        </tr>`;
      }
      confirmationHTML +=
          `</tbody>
          </table>
        </div>
      </div> `;

      confirmationHTML +=
      `<div class="row module-block">
        <div class="col-xs-12">
          <button onClick="window.print()" type="button" class="btn btn-link pull-left printHide" aria-label="Print Order Copy">Print Order Copy <span class="glyphicon glyphicon-print" aria-hidden="true"></span></button>
          <button onClick="logoutAndClearOrder()" type="button" class="btn btn-warning pull-right btn-lg printHide" aria-label="Sign Out">Sign Out <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span></button>
        </div> 
      </div>`;

  return confirmationHTML;
}
