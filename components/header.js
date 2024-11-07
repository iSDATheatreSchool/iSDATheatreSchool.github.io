class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbarContainer">
                <div class="contentWidth">
                    <div class="navbar">
                        <a href="#">
                            <div class="navbarLogo">
                                <img src="images/Logo-Small.png" alt="Small Logo">
                            </div>
                        </a>
 

                        <div class="hideMobile">

                            <ul class="nav-links">
                                
            
                                <li><a href="#">Home</a></li>
                                
                                <li class="dropdown">
                                    <a href="#Classes">Classes</a>
            
                                <ul class="dropdown-menu">
                                        <li>&nbsp;</li>
                                        <li><a href="#TheatreSchool">Theatre School</a></li>
                                        <li><a href="#brackley"><span>&#8226;</span>&nbsp;Brackley</a></li>
                                        <li><a href="#warwick"><span>&#8226;</span>&nbsp;Warwick and Leamington Spa</a></li>
                                        <li><a href="#HolidayCamps">Holiday Camps & Workshops</a></li>
                                        <li><a href="#AfterSchool">After School & LunchClubs</a></li>
                                        <li><a href="#PrivateLessons">Private Lessons</a></li>
                                        <li><a href="#Parties">Parties</a></li>
                                       </ul> 
                                </li>
            
                                <li><a href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a></li>
                                <li><a href="#Testimony">Testimony</a></li>
                                <li><a href="#Staff">Staff</a></li>
                                <li><div class="svgLink"><a href="https://www.facebook.com/iSDATheatreSchool/"> <img src="images/square-facebook-brands-solid-white.svg" /> </a></div></li>
                                <li><div class="svgLink"><a  href="https://www.instagram.com/isingidanceiacttheatreschool/"><img src="images/square-instagram-brands-solid-white.svg" /> </a></div></li>

                            </ul>

                        </div>

                        <div class="hideDesktop">

                            <div class="svgLink"><a href="https://www.facebook.com/iSDATheatreSchool/"> <img src="images/square-facebook-brands-solid-white.svg" /> </a></div>
                            <div class="svgLink"><a  href="https://www.instagram.com/isingidanceiacttheatreschool/"><img src="images/square-instagram-brands-solid-white.svg" /> </a></div>
                            <div class="hamburger">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div id="sidenav" class="sidenav">
            <div class="sidebaveTop">
                <div class="sidenavTitle headlineFont headingFont1">iSDA</div>
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            </div>
            
            <a class="sidenavLink" href="#">Home</a>

            <a class="sidenavLink" href="#TheatreSchool">Theatre School</a>
            <a class="sidenavLink" href="#brackley"><span>&#8226;</span>&nbsp;Brackley</a>
            <a class="sidenavLink" href="#warwick"><span>&#8226;</span>&nbsp;Warwick and Leamington Spa</a>
            <a class="sidenavLink" href="#HolidayCamps">Holiday Camps & Workshops</a>
            <a class="sidenavLink" href="#AfterSchool">After School & LunchClubs</a>
            <a class="sidenavLink" href="#PrivateLessons">Private Lessons</a>
            <a class="sidenavLink" href="#Parties">Parties</a>
            <a class="sidenavLink" href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a>
            <a class="sidenavLink" href="#Testimony">Testimony</a>
            <a class="sidenavLink" href="#Staff">Staff</a>

        </div>
      `;

    }
  
    

}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidenav = document.querySelector('.sidenav');

    hamburger.addEventListener('click', () => {
        openNav();
    });

    sidenav.addEventListener('click', () => {
        closeNav();
    });

});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.querySelector('.sidenav').style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelector('.sidenav').style.width = "0px";
}
    
customElements.define('header-component', Header);