// pædagogerne hentes fra databasen
function hentPaedagoger(){

    let url = "/paedagog/paedagoger";

    fetch(url)
        .then(response => {
            if (response.status >= 400)
                throw new Error(response.status);
            else
                return response.json();
        })
        .then(resultat => {

            // henter pædagogernes navne & initialer fra databasen, opretter dem som objekter, tilføjer dem til paedagoger arrayet -
            // samt tilføjer dem til pædagog-felterne
            for(let i = 0; i < resultat.length; i++){
                let element = document.querySelector("#grid-paedagog" +(i+1));
                element.children[0].innerHTML = resultat[i].navn;
                element.children[2].innerHTML = resultat[i].initialer;
            }
        })
        .catch(fejl => console.log('Fejl: ' + fejl));
}

function visForside() {
    window.location = "/";
}

function visBlaeksprutteVindue() {
    window.location = "/blaeksprutte";
}

function vaelgeBlaeksprutte() {
    let paedagoger = document.querySelectorAll(".paedagoger");
    for(let i = 0; i < paedagoger.length; i++) {
        //paedagoger[i].style.opacity = "0.5";
    }
    blaeksprutteFeltClicked = true;
}

function blaeksprutteValgt(element) {
    if(blaeksprutteFeltClicked == true) {
        let paedagoger = document.querySelectorAll(".paedagoger");
        for(let i = 0; i < paedagoger.length; i++) {
            //paedagoger[i].style.opacity = "1";
        }
        let navn_blaeksprutte = element.children[0].innerHTML;
        initialer_blaeksprutte = element.children[2].innerHTML;

        let blaeksprutte = document.querySelector("#blaeksprutte-felt");
        blaeksprutte.innerHTML = initialer_blaeksprutte;

        // hvis der ingen blæksprutte er i databasen - så oprettes en blæksprutte i databasen
        if(id_blaeksprutte == "" || id_blaeksprutte == undefined) {
            postBlaeksprutte(navn_blaeksprutte, initialer_blaeksprutte);

            // ellers så opdateres blæksprutten i databasen
        } else {
            putBlaeksprutte(id_blaeksprutte, navn_blaeksprutte, initialer_blaeksprutte);
        }

        blaeksprutteFeltClicked = false;

        initialer_blaeksprutte = "";
    }
}

function blaeksprutteId() {
    let usersUrl = "/blaeksprutte/valgt-blaeksprutte";

    fetch(usersUrl)
        .then(response => {
            if (response.status >= 400)
                throw new Error(response.status);
            else
                return response.json();
        })
        .then(resultat => {
            if(resultat.length != 0) {
                id_blaeksprutte = resultat[0]._id;
            }
        })
        .catch(fejl => console.log('Fejl: ' + fejl));
}

function hentBlaeksprutte() {
    let blaeksprutte = document.querySelector("#blaeksprutte-felt");
    let url = "/blaeksprutte/valgt-blaeksprutte";
    fetch(url)
        .then(response => {
            if (response.status >= 400)
                throw new Error(response.status);
            else
                return response.json();
        })
        .then(resultat => {
            if(resultat.length != 0) {
                if(blaeksprutte != null) {
                    blaeksprutte.innerHTML = resultat[0].initialer;
                }
            }
        })
        .catch(fejl => console.log('Fejl: ' + fejl));
}

function postBlaeksprutte(navn, initialer) {

    let url = "/blaeksprutte";
    let data = {navn: navn, initialer: initialer};

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
        .then(resultat => {
            if (resultat.status >= 400)
                throw new Error(resultat.status);
            else
                return resultat.json();
        })
        .then(resultat => console.log(`Resultat: %o`, resultat))
        .catch(fejl => console.log('Fejl: ' + fejl));
}

function putBlaeksprutte(id, navn, initialer) {
    let url = '/blaeksprutte/valgt-blaeksprutte';
    let data = {id: id, navn: navn, initialer: initialer };

    fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (response.status >= 400)
                throw new Error(response.status);
            else
                return response.json();
        })
        .then(resultat => console.log(`Resultat: %o`, resultat))
        .catch(fejl => console.log('Fejl: ' + fejl));
}

function postRum(paedagogInitArray, index, dato) {
    let url = "/blaeksprutte/rum";
    let data = { paedagogInitialer: paedagogInitArray, index: index, dato: dato };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(resultat => {
            if (resultat.status >= 400)
                throw new Error(resultat.status);
            else
                return resultat.json();
        })
        .then(resultat => {
            console.log(`Resultat: %o`, resultat)
        })
        .catch(fejl => console.log('Fejl: ' + fejl));
}

hentPaedagoger();
blaeksprutteId();
hentBlaeksprutte();

// function myFunction() {
//     let url = "/blaeksprutte/rum";
//
//     fetch(url)
//         .then(response => {
//             if (response.status >= 400)
//                 throw new Error(response.status);
//             else
//                 return response.json();
//         })
//         .then(resultat => {
//             console.log(resultat[1].paedagoger[0]);
//         })
//         .catch(fejl => console.log('Fejl: ' + fejl));
// }
//
// myFunction();