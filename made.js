

//vaelge tidspunkt
let lokale = "lokale2";
let tidspunkt = "tidspunkt1";
//lokale2-tidspunkt1

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
