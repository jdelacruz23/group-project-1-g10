document.addEventListener("DOMContentLoaded", function () {
    function setupMobileNavigation() {

            // Navigation menu toggle
            const navToggle = document.querySelector(".nav-toggle");
            const menu = document.querySelector(".menu");

            if (navToggle && menu) {
                navToggle.style.display = "block"; 
                menu.style.display = "none"; 

                navToggle.addEventListener("click", function () {
                    menu.style.display = menu.style.display === "block" ? "none" : "block";
                });
            }

            // Search functionality for mobile
            const searchIcon = document.querySelector(".search-icon");
            const searchBar = document.querySelector(".search-bar");

            if (searchIcon && searchBar) {
                searchIcon.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    searchBar.classList.toggle("active");
                });
            }

            //Close menu and search bar when clicking outside
            document.addEventListener("click", function (event) {
                if (menu && !menu.contains(event.target) && event.target !== navToggle) {
                    menu.style.display = "none";
                }

                if (searchBar && !searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
                    searchBar.classList.remove("active");
                }
            });
        
    }




    //Desktop JavaSript
    function setupDesktopNavigation() {

            //variable to select the class of hamburger button and the navigation menu 
            const hamburger = document.querySelector(".hamburger-btn");
            const navMenu = document.querySelector(".nav-menu");

            //if the hamburger button is clicked toggles the "active" class on both the element with the ID "hamburger" and the element with the class "navMenu"
            // when the element with the ID "hamburger" is clicked, the appearance of both the hamburger icon and the navigation menu will be toggled, which typically allows the user to show and hide the navigation menu by clicking the hamburger icon.

            hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            })

            //This code selects all elements on the page that have a class of "nav-link"
            //This code removes the "active" class from both the element with the ID "hamburger" and the element with the class "navMenu". 
            //This ensures that if a user clicks on one of the navigation links within the menu, 
            //the menu will be hidden again, as the "active" class will be removed from both the hamburger icon and the navigation menu.
            document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            }))



        
    }

    //Screen Size check
    if (window.innerWidth <= 600) {
        setupMobileNavigation();
    } else {
        setupDesktopNavigation();
    }

    //Update if the window changes
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 600) {
            setupMobileNavigation();
        } else {
            setupDesktopNavigation();
        }
    });
});
