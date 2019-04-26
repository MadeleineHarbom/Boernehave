let initialer = "";

function placerepaedagog(element) {
    initialer = document.querySelector("#initialer").innerHTML;
}

function paedagogplaceret(element) {
    let paedagog1 = document.querySelector(".paedagog1");
    let paedagog2 = document.querySelector(".paedagog2");
    let paedagog3 = document.querySelector(".paedagog3");

    paedagog1.innerHTML = initialer;
}