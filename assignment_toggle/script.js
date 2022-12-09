/* Hoi! 
Wat heb ik lopen stoeien met deze opdracht. Ik heb echt te veel onderbrekingen gehad tijdens het blok javascript, en dat was te merken bij deze eindopdracht.
Ik heb misschien niet de bedoelde manier gebruikt, maar uiteindelijk blijkt het te werken. */

/* make toggle visible */
let toggleBtn = document.querySelector(".btn-hamburger");
let getToggle = document.querySelector(".color-toggle");

toggleBtn.addEventListener('mouseover', function()
{getToggle.style.visibility = "visible";
getToggle.style.marginLeft = "0px";
getToggle.style.transition = "margin 0.5s ease-in" });


toggleBtn.addEventListener('click', function()
{getToggle.style.marginLeft = "-500px";
getToggle.style.transition = "margin 0.5s ease-out";});

/* Het lukt me niet om de toggle te sluiten als de muis van het menu af is. 
Wel als de muis van de het hamburger icoon af is, maar dan is de toggle al weg voordat je ook maar een kleur kan kiezen.
Ik dacht, misschien als ik de hamburgerbutton en het togglemenu in 1 div zet en daar de mouseout op zet, dat het zou lukken.*/
/*
let toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener('mouseout', function()
{getToggle.style.visibility = "visible";
getToggle.style.marginLeft = "-500px";
getToggle.style.transition = "margin 0.5s ease-out" });
*/

/* change background */
let body = document.querySelector("body");
let pageText = document.getElementById("pagetext");

/* change to default/home */
let toggleHome = document.querySelector(".white");
let changeHome = function (event)
{
body.style.backgroundColor = "antiquewhite"
pagetext.innerHTML = "Welkom!";
getToggle.style.marginLeft = "-500px";
getToggle.style.transition = "margin 0.5s ease-out";
document.getElementById('radiored').checked = false;
document.getElementById('radioyellow').checked = false;
document.getElementById('radiogreen').checked = false;
document.getElementById('radioblue').checked = false;
document.getElementById('radiopurple').checked = false;
};
toggleHome.addEventListener('click', changeHome, false);

/* change to red */
let toggleRed = document.querySelector(".red");
let changeRed = function (event)
{
    body.style.backgroundColor = "red";
    pagetext.innerHTML = "The selected background is: Red";
    getToggle.style.marginLeft = "-500px";
    getToggle.style.transition = "margin 0.5s ease-out";
    document.getElementById('radiored').checked = true;
};
toggleRed.addEventListener('click', changeRed, false)

/* change to yellow */
let toggleYellow = document.querySelector(".yellow");
let changeYellow = function (event)
{
    body.style.backgroundColor = "yellow";
    pagetext.innerHTML = "The selected background is: Yellow";
    getToggle.style.marginLeft = "-500px";
    getToggle.style.transition = "margin 0.5s ease-out";
    document.getElementById('radioyellow').checked = true;

};
toggleYellow.addEventListener('click', changeYellow, false);

/* change to green*/
let toggleGreen = document.querySelector(".green");
let changeGreen = function (event)
{
    body.style.backgroundColor = "green";
    pagetext.innerHTML = "The selected background is: Green";
    getToggle.style.marginLeft = "-500px";
    getToggle.style.transition = "margin 0.5s ease-out";
    document.getElementById('radiogreen').checked = true;

};
toggleGreen.addEventListener('click', changeGreen, false);

/* change to blue */
let toggleBlue = document.querySelector(".blue");
let changeBlue = function (event)
{
    body.style.backgroundColor = "blue";
    pagetext.innerHTML = "The selected background is: Blue";
    getToggle.style.marginLeft = "-500px";
    getToggle.style.transition = "margin 0.5s ease-out";
    document.getElementById('radioblue').checked = true;

};
toggleBlue.addEventListener('click', changeBlue, false);

/* change to purple */
let togglePurple = document.querySelector(".purple");
let changePurple = function (event)
{
    body.style.backgroundColor = "purple";
    pagetext.innerHTML = "The selected background is: Purple";
    getToggle.style.marginLeft = "-500px";
    getToggle.style.transition = "margin 0.5s ease-out";
    document.getElementById('radiopurple').checked = true;

};
togglePurple.addEventListener('click', changePurple, false);

/*change backround with key*/
document.addEventListener("keydown", function(event) {
    if (event.key === "1") { 
        changeRed();
    }
    else if (event.key === "2") { 
        changeYellow();
    }
    else if (event.key === "3") { 
        changeGreen();
    }
    else if (event.key === "4") { 
        changeBlue();
    }
    else if (event.key === "5") { 
        changePurple();
    }
    else {
        changeHome();
    };
    });

