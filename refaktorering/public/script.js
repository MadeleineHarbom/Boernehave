let currentAction;
let id_blaeksprutte;
let initialer_blaeksprutte = "";
let blaeksprutteFeltClicked = false;
let selectedPaedagog;


let selectionButtons = document.getElementById("grid-knapper").children;
let timeslots = document.getElementsByClassName("felter");
// "felter" skal aendres ved integration til blaekspriuttefelter eller ngoet
let paedagogbuttons = document.getElementsByClassName("blaeksprutteVindue");
console.log("Antal paedagogelementer " + paedagogbuttons.length);


let workers = new Array(10);

class Paedagog {
    constructor(name, initials) {
        this.name = name;
        this.initials = initials;
    }

    getName() {
        return this.name;
    }
    getInitials() {
        return this.initials
    }
}
//tilfoej paedagog
function addPaedagog(paedagog) {
    for (var q = 0; q < workers.length; q++) {

        if(workers[q]== null) {//grid-paedagog3
            let fieldname = "grid-paedagog" + (q+1);
            let field = document.getElementById(fieldname);
            workers[q] = paedagog;
            field.getElementsByClassName('navn')[0].innerText = paedagog.getInitials();
            field.getElementsByClassName('initialer')[0].innerText = paedagog.getName();
            let classname = "paedagogFarve" + (q+1);
            field.classList.add(classname);
            return paedagog;
        }
    }
    console.log("No room for " + paedagog.getName() +"! Go home and have a nap :)");
}

//!!!!!
//!!!!!!
//DUMMY DATA
//!!!!!!
//!!!!!

function dummyData() {
    let p;
    p = new Paedagog("Madeleine", "MEKHR");
    addPaedagog(p);
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);
    p = new Paedagog("Steffen", "SHR");
    p = new Paedagog("Bertil", "BNA");
    addPaedagog(p);
    p = new Paedagog("Thomas", "TR");
    addPaedagog(p);
    p = new Paedagog("Maja", "MJ");
    p = new Paedagog("Camilla", "CFU");
    addPaedagog(p);
    p = new Paedagog("Ann", "ABM");
    addPaedagog(p);
    p = new Paedagog("Nancy", "NS");
    p = new Paedagog("Fry", "PJF");
    addPaedagog(p);
    p = new Paedagog("Leela", "TR");
    addPaedagog(p);
}

dummyData();


//!!!!!!!
//!!!!!!!
//PLACERING AF PAEDAGOGER

// vaelger en paedagog
//bruges kun af blaeksprutte
function placerPaedagog(element) {

    let number = /\d+/.exec(element.id);
    let newselect = workers[number-1];

    if (selectedPaedagog == newselect) {
        element.classList.remove("paedagogSelected");
        selectedPaedagog = null;
    }
    else if (selectedPaedagog != null) {
        removeSelection(selectedPaedagog);
        selectedPaedagog = workers[number - 1];
        element.classList.add("paedagogSelected");
    }
    else {
        selectedPaedagog = workers[number - 1];
        element.classList.add("paedagogSelected");
    }
    for (let i = 0; i < timeslots.length; i++) {
        console.log("Changing funtion on room");
        timeslots[i].onclick = function() {
            timeFieldPlaceFunction(timeslots[i]);
        }
    }
    //selectedPaedagog = workers[number - 1];
    //element.style.opacity = "1";
    //element.classList.add(("paedagogFarve" + number));
}
function timeFieldPlaceFunction(element) {
    console.log("timefieldplacefunction");
    if (!element.classList.contains('lukketRum')  && selectedPaedagog != null) {
        //skal nok laves i handlebars
        let fjernKnap = document.createElement("button");
        fjernKnap.innerHTML = "Fjern";

        // denne div-element bruges til at undgå float problemerne
        let divClear = fixFloat(fjernKnap);
        // gemmer klassen som har baggrundfarven for den spedicfikke pædagog til feltet som er valgt

        let number = getIndex(selectedPaedagog) +1;

        //let number = /\d+/.exec(element.id); // denne regex-expression gemmer tallet fra id'et (er id'et fx paedagog7 - gemmer den 7-tallet)

        let className = "paedagogFarve" + (number); // i CSS-filen har pædagogernes felt-farver hver især en klasse (fx paedagogFarve7)

        // de 3 pædagoger-pladser som er i hvert felt
        let paedagog1 = element.children[0];
        let paedagog2 = element.children[1];
        let paedagog3 = element.children[2];


        // hvis pædagogen ikke allerede er tilføjet til denne felt i kalenderen - tjekker den om en af de 3 pædagogpladser i feltet er tomt
        if (!paedagog1.textContent.includes(selectedPaedagog.getInitials()) && !paedagog2.textContent.includes(selectedPaedagog.getInitials()) && !paedagog3.textContent.includes(selectedPaedagog.getInitials())) {

            // hvis første pædagog-plads er tomt og en pædagog er valgt - tilføjes pædagogen til feltet
            if (paedagog1.innerHTML == "" && selectedPaedagog!= null) {
                paedagog1.innerHTML = "&nbsp;&nbsp;" + selectedPaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;"; // initialerne for den valgte pædagog tilføjes til feltet
                paedagog1.appendChild(fjernKnap);
                paedagog1.appendChild(divClear);

                paedagog1.classList.add(className); // tilføjer klassen som har baggrundfarven for den spedicfikke pædagog til feltet som er valgt

            } else if (paedagog2.innerHTML == "" && selectedPaedagog!= null) {
                paedagog2.innerHTML = "&nbsp;&nbsp;" + selectedPaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
                paedagog2.appendChild(fjernKnap);
                paedagog2.appendChild(divClear);
                paedagog2.classList.add(className);

            } else if (paedagog3.innerHTML == "" && selectedPaedagog!= null) {
                paedagog3.innerHTML = "&nbsp;&nbsp;" + selectedPaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
                paedagog3.appendChild(fjernKnap);
                paedagog3.classList.add(className);
            }
        }

    }
    //Hvis åben/luk ikke er valgt

}





// placerer pædagogen på et felt


//!!!!!!!!
//!!!!!!!
//SPECIAL RUM
//!!!!!!!
//!!!!!!

// placerer pædagogen på et felt - denne funktion virker kun på morgensamling-felterne (køkken & badeværelse)
function paedagogPlaceret_morgensamling(element) {
    //Handlebars
    let fjernKnap = document.createElement("button");
    fjernKnap.innerHTML = "Fjern";
    let divClear = fixFloat(fjernKnap);
    fjernKnap.onclick = function () {
        fjernPaedagog(this);
    };

    // tilføjer klassen som har baggrundfarven for den spedicfikke pædagog
    let number = /\d+/.exec(paedagogValgt.id);
    let className = "paedagogFarve" + (number);

    // i køkken samt badeværelse under morgensamling er der kun plads til én pædagog
    let paedagog1 = element.children[0];

    // hvis pædagogen ikke allerede er tilføjet til denne felt i kalenderen
    if(!paedagog1.textContent.includes(selectedPaedagog.getInitials())) {
        if (paedagog1.innerHTML == "" && selectedPaedagog.getInitials()) {
            paedagog1.innerHTML = "&nbsp;&nbsp;" + selectedPaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
            paedagog1.appendChild(fjernKnap);
            paedagog1.appendChild(divClear);
            paedagog1.classList.add(className);
        }
    }
}


// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!
//AABEN RUM FUNKTIONER
// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!
function aabenKnappen(element) {
    if (selectedPaedagog != null) {
        selectedPaedagog = null;
        //paedagogValgt.style.opacity = '0.5';
        paedagogValgt.classList.remove("paedagogSelected");
        //paedagogValgt = "";
    }
    let paedagogButton = document.getElementsByClassName('felter');
    if (element.classList.contains("selectionButtonsSelected")) {
        element.classList.remove("selectionButtonsSelected");

        paedagogButton.forEach((field) => {
            field.onclick = timeFieldPlaceFunction;
        })
    }
    else {
        element.classList.add("selectionButtonsSelected");
        paedagogButton.forEach((field) => {
            // field.onclick = luk.Rum;
        })
    }
}


// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!
//LUK RUM FUNKTIONER
// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!
function lukRumButton(element) {

    if (element.classList.contains("selectionButtonsSelected")) {
        element.classList.remove("selectionButtonsSelected");
        for (let i = 0; i < timeslots.length; i++) {
            console.log("Removing funtion on room");
            timeslots[i].onclick = null;

        }
    } else {
        currentAction = "luk-rum"; //remove
        element.classList.add("selectionButtonsSelected");
        for (let i = 0; i < timeslots.length; i++) {
            console.log("Changing funtion on room");
            timeslots[i].onclick = function() {
                lukRum(timeslots[i])
            }
        }
    }
}

function lukRum(element) {

    // Hvis der er pædagog i feltet
    console.log(element);
    if (!(element.children[0].innerHTML == "" && element.children[1].innerHTML == "" && element.children[2].innerHTML == "")) {

    } else {
        element.classList.add('lukketRum');
    }
}



// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!
//HJAELPEFUNCTIONER!
// !!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!

// fjerner en pædagog fra et felt
function fjernPaedagog(element) {
    // hvis der allerede er valgt en pædagog - skal den deSelectes
    //fjernparent fra funktionen
    console.log("I fjernPaedagog funtiok");

    let span = element.parentElement;
    span.innerHTML = null;
    for (let i = 1; i <= 10; i++) {
        let classname = "paedagogFarve" + i;
        span.classList.remove(classname);
    }
}



function removeSelection(paeda) {
    //handlebars
    let index =getIndex(paeda);

    let fieldname = "grid-paedagog" + (index+1);
    document.getElementById(fieldname).classList.remove('paedagogSelected');
    let classname = "paedagogFarve" + (index+1);
    document.getElementById(fieldname).classList.add(classname);
    //set initialer til ""
    selectedpaedagog = null;
}

function getIndex(paedagog) {
    let index = workers.findIndex((elem) => {

        return elem === paedagog
    });
    return index;
}

function fixFloat(button) {
    let divClear = document.createElement("div"); //
    divClear.style.clear = "both"; //skal i en css-class
    divClear.style.height = "0 px"; //skal i en css-class
    button.style.float = "right";
    button.onclick = function (e) {
        // Uden den her bliver timeFieldPlaceFunction(timeslots[i]) også kaldt
        e.stopPropagation();
        fjernPaedagog(this);
    };
    return divClear;
}

function fjernFokusSelection() {
    for (let i = 0; i < paedagogbuttons.length; i++) {
        paedagogbuttons[i].classList.remove("paedagogSelected");
    }
    console.log(selectionButtons.length);
    for (let i = 0; i < selectionButtons.length; i++) {
        selectionButtons[i].classList.remove('selectionButtonsSelected');
    }


}