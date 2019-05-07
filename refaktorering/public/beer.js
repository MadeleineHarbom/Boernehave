let currentAction;

let selectionButtons = document.getElementById("grid-knapper").getElementsByClassName("div");

console.log(selectionButtons);

function pickFunction(field) {
    if (currentAction == "placerPaedagog") {
        placerPaedagog(field); //TODO
    }
    else if (currentAction == "lukRum") {
        lukRum(field);
    }
    else if (currentAction == "aabenRum") {
        aabenRum(field);
    }
}

function placerPaedagog(field) {
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
}



function aabenLukRum(button) {
    fjernFokusSelection();

    if (button.id == "aaben-rum") {
       if (currentAction == "aabenRum") {
           currentAction = "";
       } else {
           currentAction = "aabenRum";
           button.classList.add("selectionButtonSelected");
       }
   } else {
        if (currentAction == "luk-rum") {
            currentAction = "";
        } else {
            currentAction = "luk-rum";
            button.classList.add("selectionButtonSelected");
        }
   }
}

function åbenLukKnapper(id) {
    fjernFokusSelection();

    //Hvis åben eller luk ikke er valgt
    if (currentAction == "lukRum") {
        currentAction = "";
    }
    if (currentAction != "lukRum") {
        document.getElementById(id).classList.add("selectionButtonSelected");

        åbenLuk = id;

        //Hvis åben eller luk er valgt
    } else {
        if (åbenLuk === id) {
            document.getElementById(id).style.border = '1px black solid';
            åbenLuk = false;
        } else {
            document.getElementById(id).style.border = '2px red solid';
            åbenLuk = id;
            if (id === "aaben-rum") {
                document.getElementById('luk-rum').style.border = '1px black solid';
            } else {
                document.getElementById('aaben-rum').style.border = '1px black solid';
            }
        }
    }

}


function fjernFokusSelection() {

    console.log(selectionButtons.length);
    for (let i = 0; i < selectionButtons.length; i++) {
        selectionButtons[i].classList.remove('selectionButtonsSelected');
    }


}