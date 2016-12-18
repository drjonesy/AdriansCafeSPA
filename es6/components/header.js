function header(className, boolean) {
  let menuHTML = 
  `<!-- Navigation: Logged Out ========================================= -->
        <nav class="navbar navbar-default row navbar-inverse outside-padding printHide">
          <div class="container-fluid nav-padding">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="#"><img src="img/logo-white.svg" class="logo" /></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse topNav" id="bs-example-navbar-collapse-1">
              
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>`;

  $('.'+className).html(menuHTML);
}

const loggedInNav = () => {
  let navHTML = '';
  navHTML += 
  ` <ul class="nav navbar-nav top-menu">
      <li onClick="loadPage('Home')"><a href="#">Home</a></li>
      <li onClick="loadPage('Menu')"><a href="#">Menu</a></li>
      <li onClick="loadPage('Specials')"><a href="#">Specials</a></li>
      <li onClick="loadPage('Profile')"><a href="#">Profile</a></li>
      <li onClick="logout()"><a href="#">Log Out</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li onClick="loadPage('Cart')"><a href="#"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a></li>
    </ul>`;
  return navHTML;
}

const loggedOutNav = () => {
  let navHTML = '';
  navHTML += 
  ` <ul class="nav navbar-nav top-menu">
      <li onClick="loadPage('Home')"><a href="#">Home</a></li>
      <li onClick="loadPage('Menu')"><a href="#">Menu</a></li>
      <li onClick="loadPage('Specials')"><a href="#">Specials</a></li>
      <li onClick="loadPage('Login')"><a href="#">Log In</a></li>
    </ul>`;
  return navHTML;
}

