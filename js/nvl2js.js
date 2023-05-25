var jogo = [];
var tabuleiro = [];
var quemJoga = 0;
var jogando = true;
var jogadaCpu = 1;
var quemComeca = 1;
var letraPlayer = "";
var pcLetra = "";
var jogadaPC = 0;
var nivel = 2;

function escolhe(escolha) {
    escolhido = document.getElementById(escolha).id;
    if (escolhido == "X") {
        document.getElementById("vezpc").innerHTML = "X";
        letraPlayer = "X";
        pcLetra = "O";
    } else if (escolhido == "O") {
        document.getElementById("vezpc").innerHTML = "O";
        letraPlayer = "O"
        pcLetra = "X";
    }
}

function cpuJoga() {
    if (jogando) {
        var l, c;
        if (nivel == 1) {
            do {

            } while (true);
        } else if (nivel == 2) {
            //linha1
            if ((jogo[0][0] == pcLetra) && (jogo[0][1] == pcLetra) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[0][2] == pcLetra) && (jogo[0][1] == "")) {
                jogo[0][1] = pcLetra;
            }
            else if ((jogo[0][1] == pcLetra) && (jogo[0][2] == pcLetra) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[1][0] == pcLetra) && (jogo[1][1] == pcLetra) && (jogo[1][2] == "")) {
                jogo[1][2] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[1][2] == pcLetra) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == pcLetra) && (jogo[1][2] == pcLetra) && (jogo[1][0] == "")) {
                jogo[1][0] = pcLetra;
            }
            else if ((jogo[2][0] == pcLetra) && (jogo[2][1] == pcLetra) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[2][0] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[2][1] == "")) {
                jogo[2][1] = pcLetra;
            }
            else if ((jogo[2][1] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[1][0] == pcLetra) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[2][0] == pcLetra) && (jogo[1][0] == "")) {
                jogo[1][0] = pcLetra;
            }
            else if ((jogo[1][0] == pcLetra) && (jogo[2][0] == pcLetra) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[0][1] == pcLetra) && (jogo[1][1] == pcLetra) && (jogo[2][1] == "")) {
                jogo[2][1] = pcLetra;
            }
            else if ((jogo[0][1] == pcLetra) && (jogo[2][1] == pcLetra) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == pcLetra) && (jogo[2][1] == pcLetra) && (jogo[0][1] == "")) {
                jogo[0][1] = pcLetra;
            }
            else if ((jogo[0][2] == pcLetra) && (jogo[1][2] == pcLetra) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[0][2] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[1][2] == "")) {
                jogo[1][2] = pcLetra;
            }
            else if ((jogo[1][2] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[1][1] == pcLetra) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[0][0] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == pcLetra) && (jogo[2][2] == pcLetra) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[0][2] == pcLetra) && (jogo[1][1] == pcLetra) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][2] == pcLetra) && (jogo[2][0] == pcLetra) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == pcLetra) && (jogo[2][0] == pcLetra) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[0][1] == letraPlayer) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[0][2] == letraPlayer) && (jogo[0][1] == "")) {
                jogo[0][1] = pcLetra;
            }
            else if ((jogo[0][1] == letraPlayer) && (jogo[0][2] == letraPlayer) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[1][0] == letraPlayer) && (jogo[1][1] == letraPlayer) && (jogo[1][2] == "")) {
                jogo[1][2] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[1][2] == letraPlayer) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == letraPlayer) && (jogo[1][2] == letraPlayer) && (jogo[1][0] == "")) {
                jogo[1][0] = pcLetra;
            }
            else if ((jogo[2][0] == letraPlayer) && (jogo[2][1] == letraPlayer) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[2][0] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[2][1] == "")) {
                jogo[2][1] = pcLetra;
            }
            else if ((jogo[2][1] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[1][0] == letraPlayer) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[2][0] == letraPlayer) && (jogo[1][0] == "")) {
                jogo[1][0] = pcLetra;
            }
            else if ((jogo[1][0] == letraPlayer) && (jogo[2][0] == letraPlayer) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[0][1] == letraPlayer) && (jogo[1][1] == letraPlayer) && (jogo[2][1] == "")) {
                jogo[2][1] = pcLetra;
            }
            else if ((jogo[0][1] == letraPlayer) && (jogo[2][1] == letraPlayer) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == letraPlayer) && (jogo[2][1] == letraPlayer) && (jogo[0][1] == "")) {
                jogo[0][1] = pcLetra;
            }
            else if ((jogo[0][2] == letraPlayer) && (jogo[1][2] == letraPlayer) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[0][2] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[1][2] == "")) {
                jogo[1][2] = pcLetra;
            }
            else if ((jogo[1][2] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[1][1] == letraPlayer) && (jogo[2][2] == "")) {
                jogo[2][2] = pcLetra;
            }
            else if ((jogo[0][0] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == letraPlayer) && (jogo[2][2] == letraPlayer) && (jogo[0][0] == "")) {
                jogo[0][0] = pcLetra;
            }
            else if ((jogo[0][2] == letraPlayer) && (jogo[1][1] == letraPlayer) && (jogo[2][0] == "")) {
                jogo[2][0] = pcLetra;
            }
            else if ((jogo[0][2] == letraPlayer) && (jogo[2][0] == letraPlayer) && (jogo[1][1] == "")) {
                jogo[1][1] = pcLetra;
            }
            else if ((jogo[1][1] == letraPlayer) && (jogo[2][0] == letraPlayer) && (jogo[0][2] == "")) {
                jogo[0][2] = pcLetra;
            } else {
                if (jogadaPC < 8) {
                    do {
                        l = Math.round(Math.random() * 2);
                        c = Math.round(Math.random() * 2);
                    } while (jogo[l][c] != "");
                    jogo[l][c] = pcLetra;
                } else {
                    for (var l = 0; l < 3; l++) {
                        for (var c = 0; c < 3; c++) {
                            if (jogo[l][c] == "") {
                                jogo[l][c] = pcLetra;
                            }
                        }
                    }
                }
            }
        }
        verifica = vitoria();
        if (verifica != "") {
            alert("CPU venceu o jogo!");
            jogando = false;
        }
        atualizaTabuleiro();
        quemJoga = 0;
    }
}

function joga(celula) {
    if (letraPlayer == "") {
        alert("Escolha uma letra primeiro!");
    } else if ((jogando) && (quemJoga == 0)) {
        switch (celula) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = letraPlayer;
                    quemJoga = 1;
                }
                break;
            default:
                if (jogo[2][2] == "") {
                    jogo[2][2] = letraPlayer;
                    quemJoga = 1;
                }
                break;
        }
        if (quemJoga == 1) {
            verifica = vitoria();
            if (verifica != "") {
                alert("Você venceu o jogo!");
                jogando = false;
            }
            atualizaTabuleiro();
            cpuJoga();
        }
    }
}
function atualizaTabuleiro() {
    for (var linha = 0; linha < 3; linha++) {
        for (var coluna = 0; coluna < 3; coluna++) {
            if (jogo[linha][coluna] == "X") {
                tabuleiro[linha][coluna].innerHTML = "X";
            } else if (jogo[linha][coluna] == "O") {
                tabuleiro[linha][coluna].innerHTML = "O";
            } else {
                tabuleiro[linha][coluna].innerHTML = "";
            }
        }
    }
}


function vitoria() {
    var l, c;
    jogadaPC++;
    for (l = 0; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
            return jogo[l][0];
        }
    }
    for (c = 0; c < 3; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
            return jogo[0][c];
        }
    }
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0];
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
        return jogo[0][2];
    }
    if (jogadaPC >= 9) {
        alert("Empate!");
        jogando = false;
    }
    return "";
}


function inicia() {
    jogando = true;
    jogadaCpu = 1;
    jogadaPC = 0;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("pc11"), document.getElementById("pc12"), document.getElementById("pc13")],
        [document.getElementById("pc21"), document.getElementById("pc22"), document.getElementById("pc23")],
        [document.getElementById("pc31"), document.getElementById("pc32"), document.getElementById("pc33")],
    ];
    atualizaTabuleiro();
    if (quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("qmJoga").innerHTML = "Vez do jogador: Player";
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("qmJoga").innerHTML = "Vez do jogador: CPU";
        cpuJoga();
    }
}
window.addEventListener("load", inicia);