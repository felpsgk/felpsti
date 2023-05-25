letra = "";
playTime = "";
var jogada = 0;
function escolheAmigo(escolha) {
    escolhido = document.getElementById(escolha).id;
    if (escolhido == "XX") {
        document.getElementById("vez").innerHTML = "X";
        letra = "X";
    } else if (escolhido == "OO") {
        document.getElementById("vez").innerHTML = "O";
        letra = "O"
    }
    document.getElementById("ttt").style.background = "#ffffff";
    document.getElementById("X").style.background = "#ffffff";
    document.getElementById("O").style.background = "#ffffff";
}

function jogaAmigo(celula) {
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "X" || celulaclicada == "O") {
        alert("Opa, este quadrado já foi escolhido!");
    } else if (letra == "") {
        alert("Escolha uma letra primeiro!");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X") {
            letra = "O";

            playTime = "Xis";

        } else {
            letra = "X";
            playTime = "Bola";
        }
        verifAmigo();
    }
}
function verifAmigo() {
    jogada++;
    document.getElementById('vez').innerHTML = letra;
    c11 = document.getElementById('cel11').innerHTML;
    c12 = document.getElementById('cel12').innerHTML;
    c13 = document.getElementById('cel13').innerHTML;
    c21 = document.getElementById('cel21').innerHTML;
    c22 = document.getElementById('cel22').innerHTML;
    c23 = document.getElementById('cel23').innerHTML;
    c31 = document.getElementById('cel31').innerHTML;
    c32 = document.getElementById('cel32').innerHTML;
    c33 = document.getElementById('cel33').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) || ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))) {
        alert("O ganhador foi: '" + playTime + "'");
        novo();
    } else if (jogada >= 9) {
        alert("Empate!");
        novo();
    }
}




function novoAmigo() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';

        }
    }
    document.getElementById("ttt").style.background = "#00d4ff";
    document.getElementById("X").style.background = "#5b5b5b";
    document.getElementById("O").style.background = "#5b5b5b";
    document.getElementById('vez').innerHTML = "";
    jogada = 0;
}

