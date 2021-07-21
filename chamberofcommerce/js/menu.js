consttoggle=document.querySelector(".toggle");
constmenu=document.querySelector(".menu");
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
    const items = document.querySelectorAll(".item");
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");

for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
           }else{
        functiontoggleMenu()
            if(menu.classList.contains("active")){
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML="<iclass=’fasfa-bars’></i>";
        }else{
            this.classList.add("submenu-active");
menu.classList.add("active");


toggle.querySelector("a").innerHTML="<iclass=’fasfa-times’></i>";

toggle.addEventListener("click",toggleMenu,false);
  
  document.addEventListener("click", closeSubmenu, false);}}}}}}
