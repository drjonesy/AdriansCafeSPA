function footer(divClass){
  let footerHTML = '<div id="snackbar"></div>';
  footerHTML += 
  ` <div class="row module-block printHide">
      <!-- Row one: specials -->
      <div class="col-xs-12">
        <footer class="outside-padding">
          <ul class="list-inline">
            <li><a href="#">contact</a></li>
            <li>|</li>
            <li><a href="#">terms &amp; conditions</a></li>
          </ul>
        </footer>
      </div>
    </div>`;

  $('.'+divClass).html(footerHTML);
}
