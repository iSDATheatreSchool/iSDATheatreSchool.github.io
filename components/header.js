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
                                        <li><a href="#WeekleyClasses">Weekly Classes</a></li>
                                        <li><a href="#HolidayCamps">Holiday Camps & Workshops</a></li>
                                        <li><a href="#AfterSchool">After School & LunchClubs</a></li>
                                        <li><a href="#Parties">Parties</a></li>
                                        <li><a href="#PrivateSinging">Private Singing Lessons</a></li>

                                    </ul> 
                                </li>
            
                                <li><a href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a></li>
                                <li><a href="#Testimony">Testimony</a></li>
                                <li><a href="#Staff">Staff</a></li>
                            </ul>

                        </div>
                        <div class="hideDesktop">
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
                <div class="sidenavTitle">iSDA</div>
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            </div>
            
            <a class="sidenavLink" href="#">Home</a>

            <a class="sidenavLink" href="#WeekleyClasses">Weekly Classes</a>
            <a class="sidenavLink" href="#HolidayCamps">Holiday Camps & Workshops</a>
            <a class="sidenavLink" href="#AfterSchool">After School & LunchClubs</a>
            <a class="sidenavLink" href="#Parties">Parties</a>
            <a class="sidenavLink" href="#PrivateSinging">Private Singing Lessons</a>
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