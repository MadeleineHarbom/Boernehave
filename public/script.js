let initialer = "";

function placerepaedagog(element) {
    initialer = element.children[2].innerHTML;
}

function paedagogplaceret(element) {
    let fjernKnap = document.createElement("button");
    fjernKnap.innerHTML = "Fjern";
    let divClear = document.createElement("div");
    divClear.style.clear = "both";
    divClear.style.height = "0 px";
    fjernKnap.style.float = "right";
    fjernKnap.onclick = function() {fjernPaedagog(this.parentElement, this)};

    let paedagog1 = element.children[0];
    let paedagog2 = element.children[1];
    let paedagog3 = element.children[2];

    if(paedagog1.innerHTML == "" && initialer != "") {
        paedagog1.innerHTML = "&nbsp;&nbsp;" + initialer + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog1.appendChild(fjernKnap);
        paedagog1.appendChild(divClear);

    } else if(paedagog2.innerHTML == "" && initialer != "") {
        paedagog2.innerHTML = "&nbsp;&nbsp;" + initialer + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog2.appendChild(fjernKnap);
        paedagog2.appendChild(divClear);

    } else if(paedagog3.innerHTML == "" && initialer != "") {
        paedagog3.innerHTML = "&nbsp;&nbsp;" + initialer + "&nbsp;&nbsp;&nbsp;&nbsp;";
        paedagog3.appendChild(fjernKnap);
    }

    initialer = "";
}

function fjernPaedagog(parent, element) {
    parent.removeChild(element);
    parent.innerHTML = "";
    console.log(element);
}