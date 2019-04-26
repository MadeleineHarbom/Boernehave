let initialer = "";

function placerepaedagog(element) {
    initialer = element.children[2].innerHTML;
}

function paedagogplaceret(element) {
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