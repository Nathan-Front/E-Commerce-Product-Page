const openMenu = document.getElementById("open_menu");
const closeMenu = document.getElementById("close_menu");
const menu = document.getElementById("menu_links");

function menuOpen(){
    menu.classList.add("menu-links");
    openMenu.classList.add("open-button");
    closeMenu.classList.add("close-button")
}
function menuClose(){
    menu.classList.remove("menu-links");
    openMenu.classList.remove("open-button");
    closeMenu.classList.remove("close-button");
}