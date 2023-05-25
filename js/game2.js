		    
        var tabuleiro = new Array( "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"); 
        var tabuleiroBool = new Array( "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ); 
        var tabuleiroBoolAux = new Array( 36 );
        var numCliques = 0;
        var j1 = 0;
        var j1cliques = 0;
        var j2 = 0;
        var j2cliques = 0;
        var solo = false;
        var vez = "";
        var acertos = 0;
        var indiceCartaAnterior = -1;
        var cartaAtual = -1;
        var timer;
        var counter;


        embaralhar();

        function trocaNivel1(){
          window.location.assign("index.html");
        }
        function trocaNivel2(){
          window.location.assign("nvl2.html");
        }
        function trocaNivel3(){
          window.location.assign("nvl3.html");
        }

        function sozinho(){

          solo=true;
          counter = 1;
          timer = setInterval(function() {
          if( counter >= 240 ) {
            clearInterval( timer );
            alert("Voce perdeu, que triste! Tente novamente!");
            novoJogo();
          }
          
          document.getElementById( "contador" ).value = ( counter++ );
          }, 1000);

          novoJogo();
          document.getElementById( "msg" ).value = "Jogando!";
        }
        function amigo(){
          solo=false;
          novoJogo();
          vez="j1";
          document.getElementById( "msg" ).value = "Vez do j1!";
        }

        function embaralhar() {
            r = -1;
            for ( i = 0; i < 36; i++ ) {
              r = Math.round( Math.random() * ( tabuleiro.length - 1 ) );
              aux = tabuleiro[ r ];
              tabuleiro[ r ] = tabuleiro[ i ];
              tabuleiro[ i ] = aux;
            }
        }

        function verificar( indice ) {
          if (solo==true) {
            if ( tabuleiroBool[ indice ] == 0 ) {
              tabuleiroBool[ indice ] = 1;
              numCliques++;

              carta = parseInt( tabuleiro[ parseInt( indice ) ] );
              visualizarCarta( carta, indice );

              if ( numCliques % 2 != 0 ) { // Primeiro botão da jogada clicado.
                  indiceCartaAnterior = indice;
              } else if ( ( tabuleiro[ indice ] % 18 ) == ( tabuleiro[ indiceCartaAnterior] % 18 ) ) { 
                  acertos++;
                  if ( acertos == tabuleiro.length / 2 ) {
                    clearInterval( timer );
                    document.getElementById( "msg" ).value = "*** Fim de Jogo! *** Você errou " + ( ( numCliques / 2 ) - acertos ) + " vez(es).";
                  }
              } else { 
                  cartaAtual = indice; 
                  document.getElementById( "msg" ).value = "ERROU!";

                  
                  trava( 1 );
                  setTimeout( "trava( 0 );", 700 );

                  setTimeout( "esconderCarta( indiceCartaAnterior );", 700 );
                  setTimeout( "esconderCarta( cartaAtual );", 700 );
                  setTimeout( "document.getElementById( \"msg\" ).value = \"\";", 700 );
              }
            }
            return;
          } else if (solo==false) {
            if (vez=="j1") {
              if ( tabuleiroBool[ indice ] == 0 ) {

              tabuleiroBool[ indice ] = 1;
              numCliques++;
              carta = parseInt( tabuleiro[ parseInt( indice ) ] );
              visualizarCarta( carta, indice );

              if ( numCliques % 2 != 0 ) { // Primeiro botão da jogada clicado.
                  indiceCartaAnterior = indice;
              } else if ( ( tabuleiro[ indice ] % 18 ) == ( tabuleiro[ indiceCartaAnterior] % 18 ) ) {
                acertos++;
                j1++;
                document.getElementById( "msg" ).value = "Acertos "+j1;
                if ( acertos == tabuleiro.length / 2 ) {
                    document.getElementById( "msg" ).value = "Fim de Jogo! *** Jogador 1 acertou " + j1 + " e Jogador 2 acertou "+ j2;
                }
              } else { 
                  cartaAtual = indice; 
                  document.getElementById( "msg" ).value = "ERROU!";                  
                  trava( 1 );
                  setTimeout( "trava( 0 );", 700 );
                  setTimeout( "esconderCarta( indiceCartaAnterior );", 700 );
                  setTimeout( "esconderCarta( cartaAtual );", 700 );
                  setTimeout( "document.getElementById( \"msg\" ).value = \"\";", 700 );
                  vez="j2";
                  document.getElementById( "msg" ).value = "Vez do "+vez;
              }
            }
            return;
            } else if (vez=="j2") {
              if ( tabuleiroBool[ indice ] == 0 ) {

              tabuleiroBool[ indice ] = 1;
              numCliques++;
              carta = parseInt( tabuleiro[ parseInt( indice ) ] );
              visualizarCarta( carta, indice );

              if ( numCliques % 2 != 0 ) { // Primeiro botão da jogada clicado.
                  indiceCartaAnterior = indice;
              } else if ( ( tabuleiro[ indice ] % 18 ) == ( tabuleiro[ indiceCartaAnterior] % 18 ) ) {
                acertos++;
                j2++;
                document.getElementById( "msg" ).value = "Acertos "+j2;
                if ( acertos == tabuleiro.length / 2 ) {
                    document.getElementById( "msg" ).value = "Fim de Jogo! *** Jogador 1 acertou " + j1 + " e Jogador 2 acertou "+ j2;
                }
              } else { 
                  cartaAtual = indice; 
                  document.getElementById( "msg" ).value = "ERROU!";                  
                  trava( 1 );
                  setTimeout( "trava( 0 );", 700 );
                  setTimeout( "esconderCarta( indiceCartaAnterior );", 700 );
                  setTimeout( "esconderCarta( cartaAtual );", 700 );
                  setTimeout( "document.getElementById( \"msg\" ).value = \"\";", 700 );
                  vez="j1";
                  document.getElementById( "msg" ).value = "Vez do "+vez;
              }
            }
            return;
            }
            
          }
            
        }

        function visualizarCarta( carta, indice ) {
            endereco = "img/" + ( carta % 18 ) + ".jpg";
            document.campo[ indice ].src = endereco;
        }

        function esconderCarta( indice ) {
            document.campo[ indice ].src = "img/costas.jpg";
            tabuleiroBool[ indice ] = 0;
        }

        function novoJogo() {
            acertos = 0;
            j1=0;
            j2=0;
            numCliques = 0;
            indiceBotaoClicado = -1;

            for ( i = 0; i < tabuleiro.length; i++ ) {
              esconderCarta( i );
            }

            embaralhar();
            document.getElementById( "msg" ).value = "Novo jogo iniciado!";

            return;
        }

        function trava( flag ) {
            if ( flag == 1 ) { 
              for ( i = 0; i < tabuleiroBool.length; i++ ) {
                  tabuleiroBoolAux[ i ] = tabuleiroBool[ i ];
                  tabuleiroBool[ i ] = 1;
              }
            } else if ( flag == 0 ) { 
              for ( i = 0; i < tabuleiroBool.length; i++ ) {
                  tabuleiroBool[ i ] = tabuleiroBoolAux[ i ];
              }
            }

            return;
        }