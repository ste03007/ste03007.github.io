const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);

datefield.textContent = fulldate;