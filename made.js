
let lokale = "lokale2";
let tidspunkt = "tidspunkt1";
//lokale2-tidspunkt1

alert("Hej");


function highlight(lokal, tidspunkt) {
    let fieldname = "grid-" + lokal + "-" + tidspunkt;
    console.log(fieldname);
    console.log("lokale2-tidspunkt1");
    let field = document.getElementById(fieldname);
    console.log(field);
    if (field != undefined) {
        alert("I have a field");
    }
    console.log(field);
    field.classList.add("clicked");
}

highlight(lokale, tidspunkt);