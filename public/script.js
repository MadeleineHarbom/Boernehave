let initialer = "";

let selectedpaedagog;

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
function addPaedagog(paedagog) {
    for (var q = 0; q < workers.length; q++) {

        if(workers[q]== null) {//grid-paedagog3
            let fieldname = "grid-paedagog" + (q+1);
            console.log(fieldname);
            let field = document.getElementById(fieldname);
            console.log(field);
            workers[q] = paedagog;
            console.log(paedagog.getName() + " added");
            field.getElementsByClassName('navn')[0].innerText = paedagog.getInitials();
            field.getElementsByClassName('initialer')[0].innerText = paedagog.getName();
            let classname = "peda" + (q+1);
            field.classList.add(classname);
            return paedagog;
        }
    }
    console.log("No room for " + paedagog.getName() +"! Go home and have a nap :)");

}

function dummyData() {
    let p;
    p = new Paedagog("Madeleine", "MEKHR");
    addPaedagog(p);
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);
    p = new Paedagog("Steffen", "SHR");
    console.log(addPaedagog(p));
    p = new Paedagog("Bertil", "BNA");
    addPaedagog(p);
    p = new Paedagog("Thomas", "TR");
    addPaedagog(p);
    p = new Paedagog("Maja", "MJ");
    console.log(addPaedagog(p));
    p = new Paedagog("Camilla", "CFU");
    addPaedagog(p);
    p = new Paedagog("Ann", "ABM");
    addPaedagog(p);
    p = new Paedagog("Nancy", "NS");
    console.log(addPaedagog(p));
    p = new Paedagog("Fry", "PJF");
    addPaedagog(p);
    p = new Paedagog("Leela", "TR");
    addPaedagog(p);
}

dummyData();

//onclick for paedagoger
function placerepaedagog(element) {
    let number = /\d+/.exec(element.id);
    let index = number - 1;
    if (selectedpaedagog == workers[index]) {
        console.log("Already selected");
        removeSelection(selectedpaedagog);
        console.log("KLASS REMOVED");
    }
    else if (selectedpaedagog != null) {
        removeSelection(selectedpaedagog);
        selectedpaedagog = workers[index];
        let classname = "peda"+(number);
        element.classList.add('paedaclicked');
        element.classList.remove(classname);
    }
    else {
        selectedpaedagog = workers[index];
        let classname = "peda"+(number);
        element.classList.add('paedaclicked');
        element.classList.remove(classname);
    }
    //TODO slippery when wet



    //REGEX
    initialer = element.children[2].innerHTML; //TODO delete



}

function clicktidspunkt(element) {
    if (selectedpaedagog == null) {
        console.log("Select a dude");
        return;
    }
    //insert start
    let fjernKnap = document.createElement("button");
    fjernKnap.innerHTML = "Fjern";
    let divClear = document.createElement("div");
    divClear.style.clear = "both";
    divClear.style.height = "0 px";
    fjernKnap.style.float = "right";
    fjernKnap.onclick = function() {fjernPaedagog(this.parentElement, this)};
    //insert end

    let paedagog1 = element.children[0];
    let paedagog2 = element.children[2];
    let paedagog3 = element.children[4];

    let classname =findclassname(selectedpaedagog);

    if(paedagog1.innerHTML == "") {
        paedagog1.innerHTML = "&nbsp;&nbsp;" + selectedpaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog1.appendChild(fjernKnap);
        paedagog1.appendChild(divClear);
        paedagog1.classList.add(classname);




    } else if(paedagog2.innerHTML == "") {
        paedagog2.innerHTML = "&nbsp;&nbsp;" + selectedpaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog2.appendChild(fjernKnap);
        paedagog2.appendChild(divClear);
        paedagog2.classList.add(classname);

    } else if(paedagog3.innerHTML == "") {
        paedagog3.innerHTML = "&nbsp;&nbsp;" + selectedpaedagog.getInitials() + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog3.appendChild(fjernKnap);
        paedagog3.classList.add(classname);
    }

    initialer = "";
    removeSelection(selectedpaedagog);
    selectedpaedagog = null;

}

function removeSelection(paeda) {
    let index = workers.findIndex((elem) => { return elem === paeda});
    let fieldname = "grid-paedagog" + (index+1);
    document.getElementById(fieldname).classList.remove('paedaclicked');
    let classname = "peda" + (index+1);
    document.getElementById(fieldname).classList.add(classname);
    selectedpaedagog = null;

}
function fjernPaedagog(parent, element) {
    console.log("Deleting button");
    parent.parentElement.removeChild(parent);
}

function findclassname(paeda) {
    let index = workers.findIndex((elem) => { return elem === paeda});
    let fieldname = "grid-paedagog" + (index+1);
    document.getElementById(fieldname).classList.remove('paedaclicked');
    let classname = "peda" + (index+1);
    return classname;
}