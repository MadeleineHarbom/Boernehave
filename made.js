let colors = ['#4d4dff', '#ff3333', '#33cc33', '#ffff00', '#ff80ff', '#ad33ff', '#4dffdb'];
let cnames = ['blue', 'red', 'green', 'yellow', ' pink', 'purle', 'turkiqiuowper']; //just notes

//vaelge tidspunkt
let lokale = "lokale2";
let tidspunkt = "tidspunkt1";
//lokale2-tidspunkt1

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

function clicktidspunkt(element) {
    let paedagog1 = element.children[0];
    let paedagog2 = element.children[2];
    let paedagog3 = element.children[4];

    if(paedagog1.innerHTML == "") {
        paedagog1.innerHTML = initialer;

    } else if(paedagog2.innerHTML == "") {
        paedagog2.innerHTML = initialer;

    } else if(paedagog3.innerHTML == "") {
        paedagog3.innerHTML = initialer;
    }

    initialer = "";
}



function highlightLokale(lokal, tidspunkt) {
    let fieldname = "grid-" + lokal + "-" + tidspunkt;
    console.log(fieldname);
    console.log("lokale2-tidspunkt1");
    let field = document.getElementById(fieldname);
    console.log(field);
    console.log(field);
    field.classList.add("clicked");
}
highlightLokale(lokale, tidspunkt);

let paeda;

function highlightPaeda(paedaNummer) {
    let fieldname = "grid-paedagog" + paedaNummer;
    console.log(fieldname);
    let field = document.getElementById(fieldname);
    console.log(field);
    field.classList.add("clicked");
}

highlightPaeda(1);

function highligtSaveTidPade() {
    
}




function addPaedagog(paedagog) {
    for (var q = 0; q < workers.length; q++) {
        if(workers[q]== null) {//behoever jeg citationstegn
            console.log(paedagog.name + "added");
            workers[q] = paedagog;
            return paedagog;
        }
    }
    console.log("Never added")
}

function dummyData() {
    let p;
    p = new Paedagog("Madeleine", "MEKHR");
    addPaedagog(p);
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);
    p = new Paedagog("Madeleine", "MEKHR");
    console.log(addPaedagog(p));
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);
    p = new Paedagog("Madeleine", "MEKHR");
    console.log(addPaedagog(p));
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);
    p = new Paedagog("Madeleine", "MEKHR");
    console.log(addPaedagog(p));
    p = new Paedagog("Douglas", "DHR");
    addPaedagog(p);
    p = new Paedagog("Patrick", "PHR");
    addPaedagog(p);


}
dummyData();


//classes
let availabletimes = [9, 10, 11, 12, 13, 14, 15, 16];

class Lokale{
    constructor(name) {
        this.name = name;
        this.number = counter;
        counter++;
    }
    getName() {
        return this.name;
    }

    getNumber() {
        return this.number;
    }


}

