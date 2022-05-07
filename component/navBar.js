function navBar(){
    return `<nav class="nav">
    <div class="container flex">
      <!--menus like- women,men & kids(nav-bar)-->
      <ul class="leftmenu flex">
        <li><a href="women.html">Women</a></li>
        <li><a href="mens.html">Men</a></li>
        <li><a href="#">Kids</a></li>
      </ul>

      <!--website name / home button (nav-bar)-->
      <h1 class="logo"><a href="index.html">FARFETCH</a></h1>

      <!--icons button like- country,profile,wishlist and cart (nav-bar)-->
      <ul class="rightmenu flex">
        <li>
          <a href="#"><i class="fas fa-flag"></i></a>
        </li>
        <li>
          <a href="/signUp/signup.html"><i class="far fa-user"></i></a>
        </li>
        <div id="star">
                <a href="./cart.html"><img src="./images/heart.svg" alt=""></a>
            </div>
            <div id="bag">
               <a href="./cart.html"><img src="./images/cart.svg" alt=""></a>
      </ul>
    </div>

    <!-- search-bar option  -->
    <section class="flex search-bar">
      <p>Please select a gender to shop</p>
      <div class="search-bar-section">
        <input type="text" placeholder="     Search" id="search"/><span class="icon"><i class="fas fa-search"></i></span>
      </div>
    </section>
  </nav>`
}
export {navBar};