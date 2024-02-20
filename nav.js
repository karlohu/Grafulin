const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");

menu.addEventListener('click', () => {
    const visibility = navList.getAttribute("data-visible");

   

    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        menu.setAttribute("aria-expanded", true);
      
    }
    else if (visibility === "true") {
        navList.setAttribute("data-visible", false);
        menu.setAttribute("aria-expanded", false);
       
    }
    console.log(navList.getAttribute("data-visible")) 
});
