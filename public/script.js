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
    console.log(element);
    let paedagog1 = element.children[0];
    let paedagog2 = element.children[2];
    let paedagog3 = element.children[4];
    console.log(paedagog1);
    console.log(paedagog2);
    console.log(paedagog3);

    if(paedagog1.innerHTML == "") {
        paedagog1.innerHTML = initialer;

    } else if(paedagog2.innerHTML == "") {
        paedagog2.innerHTML = initialer;

    } else if(paedagog3.innerHTML == "") {
        paedagog3.innerHTML = initialer;
    }

    initialer = "";

}

function removeSelection(paeda) {
    let index = workers.findIndex((elem) => { return elem === paeda});
    let fieldname = "grid-paedagog" + (index+1);
    document.getElementById(fieldname).classList.remove('paedaclicked');
    let classname = "peda" + (index+1)
    document.getElementById(fieldname).classList.add(classname);
    selectedpaedagog = null;

}