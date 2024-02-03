
let result = document.getElementById('result');
let calctulateur = document.getElementById('calculateur');
let boutons = document.querySelectorAll("#calculateur button");
let nombreDonne = "";
let opperationActuelle = "";


boutons.forEach(function(bouton) {
  bouton.addEventListener("mouseover", colorChange);
  bouton.addEventListener("mouseout", colorBase);
  bouton.addEventListener("mousedown", colorClick);
  bouton.addEventListener("mouseup", colorBase);
  bouton.addEventListener("click", onClick);
});

function colorChange(event) {
    event.target.style.backgroundColor = "#B7FFE2";
}
function colorBase(event) {
    event.target.style.backgroundColor = "";
}
function colorClick(event) {
    event.target.style.backgroundColor = "#DBFF90";
}

function onClick(event){
    let boutonClick = event.target.textContent;
    if(boutonClick <= 9  )NombreClicker(boutonClick);
    if(boutonClick == "AC"  )acClick(boutonClick);
    if(boutonClick == "-" || boutonClick == "+" || boutonClick == "/" || boutonClick == "*" || boutonClick == "%" ) opperateurClick(boutonClick);
    if(boutonClick == "="  )egalClick(boutonClick);
}


function NombreClicker(number) {
    nombreDonne += number;
    ResultFinal();
}

function acClick() {
    nombreDonne = '';
    opperationActuelle = '';
    ResultFinal();
}

function opperateurClick(operator){
    if (nombreDonne !== '') {
        opperationActuelle = nombreDonne + operator;
        nombreDonne = '';
        ResultFinal();
    }
}

function egalClick() {
    if (nombreDonne !== '') {
        try {
            nombreDonne = eval(opperationActuelle + nombreDonne).toString();
        } catch (error) {
            nombreDonne = 'Erreur';
        }
        opperationActuelle = '';
        ResultFinal();
    }
}



function ResultFinal() {
    result.textContent = nombreDonne !== '' ? nombreDonne : '0';
};

