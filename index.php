<?php
include 'includes/head.php';
?>

<body id="page-top" style="background-color: var(--bs-cyan)">
    <?php
    include 'includes/navbar.php';
    ?>
    <!-- Masthead-->
    <header style="background-color: var(--bs-cyan)" class="masthead text-white text-center" style="padding-top: 120px;padding-bottom: 10px;">
        <div class="container d-flex align-items-center flex-column">
            <!-- Masthead Avatar Image-->
            <img class="masthead-avatar mb-0" src="assets/img/avataaars.svg" alt="..." />
            <!-- Masthead Heading-->
            <h1 class="h1 text-uppercase mb-0">FelpsTI - Soluções em Informática</h1>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Masthead Subheading-->
            <p class="h2 font-weight-light mb-0">Desenvolvimento - Suporte técnico - Conhecimento</p>
        </div>
    </header>
    <!-- About Section-->
    <section class="mt-2 page-section text-black mb-0" id="regra3" style="background-color: var(--bs-gray-100); padding-top: 50px;padding-bottom: 0px;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-4 ">
                    <div class="shadow container border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 class="fs-4 text-center text-uppercase pt-3 mb-2">
                            Desenvolvimento
                        </h2>
                        <p class="text-center fw-bolder text-uppercase text-break">Criação de aplicações,
                            das mais simples as mais complexas!</p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fa-solid fa-laptop-code"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->

                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-4 ">
                    <div class="shadow container border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 class="fs-4 text-center text-uppercase pt-3 mb-2">
                            Suporte técnico</h2>
                        <p class="text-center fw-bolder text-uppercase text-break">
                            Suporte técnico, prestando manutenção em PC's, consultoria e montagem!
                        </p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fa-solid fa-microchip"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->

                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-4 ">
                    <div class="shadow container border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 class="text-center text-uppercase pt-3 mb-2">Conhecimento</h2>
                        <p class="text-center fw-bolder text-uppercase text-break">
                            Aulas práticas e teóricas, particulares ou sob demanda!
                        </p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fa-solid fa-glasses"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- OUTROS PROJETOS SECTION-->
    <section class="page-section portfolio" id="consumo" style="padding-top: 100px;padding-bottom: 0px;">
        <h1 class="page-section-heading text-center text-uppercase mb-5">
            Veja abaixo alguns projetos simples já solicitados!
        </h1>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                    <div class="shadow container bg-light border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 id="consumo" class="fs-3 text-center text-uppercase pt-3 mb-2">CALCULAR CONSUMO
                        </h2>
                        <p class="fs-6 text-center fw-bolder text-uppercase text-break">Use esta seção para saber quanto de
                            gasolina
                            abastecer para uma determinada viagem</p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->
                            <div class="col mb-5">
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Quantos KM seu carro faz por
                                        litro?</label>
                                    <input type="number" class="form-control" id="kmLitro" min="0" value="0" step=".05">
                                </div>
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Qual valor da gasolina?</label>
                                    <input type="number" class="form-control" id="gasolina" min="0" value="0" step=".10">
                                </div>
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Qual KM percorrido?</label>
                                    <input type="number" class="form-control" id="distancia" min="0" value="0" step="10">
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" id="calculate" class="btn btn-primary btn-lg mt-2">Calcular</button>
                                    <p id="result" class="mt-1 text-center fw-bolder text-uppercase"></p>
                                </div>
                                <script>
                                    var calculate = document.getElementById("calculate");
                                    var result = document.getElementById("result");

                                    function calculatePercentage() {

                                        var kmLitro = parseFloat(document.getElementById("kmLitro").value);
                                        var gasolina = parseFloat(document.getElementById("gasolina").value);
                                        var distancia = parseFloat(document.getElementById("distancia").value);
                                        var litrosGasto = (distancia * 1) / kmLitro;
                                        var valorAbastecer = litrosGasto * gasolina;

                                        result.innerHTML = "Abasteça cerca de R$" + valorAbastecer.toFixed(2) + ".";
                                    }

                                    calculate.addEventListener('click', calculatePercentage);
                                </script>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                    <div class="shadow container bg-light border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 id="ganhos" class="fs-3 text-center text-uppercase pt-3 mb-2">Ganhos na uber
                        </h2>
                        <p class="fs-5 text-center fw-bolder text-uppercase text-break">Use esta seção para saber qual seu
                            lucro na
                            uber
                        </p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->
                            <div class="col mb-5">
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Quantos KM seu carro faz por
                                        litro?
                                        (decida
                                        entre álcool e gasolina</label>
                                    <input type="number" class="form-control" id="kmLitroGan" min="0" value="0" step=".05">
                                </div>
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Qual valor do combustível
                                        escolhido?</label>
                                    <input type="number" class="form-control" id="gasolinaGan" min="0" value="0" step=".10">
                                </div>
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label">Qual KM percorrido?</label>
                                    <input type="number" class="form-control" id="distanciaGan" min="0" value="0" step="10">
                                </div>
                                <div class="portfolio-item mx-auto" data-bs-target="#portfolioModal1">
                                    <label for="exampleInputEmail1" class="form-label mt-2">Qual valor ganho nos
                                        App's?</label>
                                    <br>
                                    <small for="exampleInputEmail1" class="form-label">- faça a soma dos ganhos de todos
                                        os apps
                                        caso trabalhe em mais de um.</small>
                                    <br>
                                    <small for="exampleInputEmail1" class="form-label">- este calculo leva em conta uma
                                        porcentagem
                                        para poupança para futuras manutenções.</small>
                                    <input type="number" class="form-control" id="ganhosGan" min="0" value="0" step="10">
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" id="calcularGan" class="btn btn-primary btn-lg mt-2">Calcular</button>
                                    <p id="resultGanhos" class="mt-1 text-center fw-bolder text-uppercase"></p>
                                </div>
                                <script>
                                    var calcularGan = document.getElementById("calcularGan");
                                    var resultGanhos = document.getElementById("resultGanhos");

                                    function calculateGanhos() {

                                        var ganhosGan = parseFloat(document.getElementById("ganhosGan").value);
                                        var kmLitroGan = parseFloat(document.getElementById("kmLitroGan").value);
                                        var gasolinaGan = parseFloat(document.getElementById("gasolinaGan").value);
                                        var distanciaGan = parseFloat(document.getElementById("distanciaGan").value);
                                        var litrosGastoGan = (distanciaGan * 1) / kmLitroGan;
                                        var valorAbastecerGan = litrosGastoGan * gasolinaGan;
                                        var lucroApps = ganhosGan - valorAbastecerGan;
                                        var revisao = lucroApps * 0.10;
                                        var lucrofinal = lucroApps - revisao;

                                        resultGanhos.innerHTML = "Você deverá separar R$" + valorAbastecerGan.toFixed(2) + " para abastecer.<br>Levamos em conta o valor de R$" + revisao.toFixed(2) + " a ser guardado para futuras revisões.<br>Considere um lucro líquido de R$" + lucrofinal.toFixed(2);
                                    }

                                    calcularGan.addEventListener('click', calculateGanhos);
                                </script>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                    <div class="shadow container bg-light border border-info">
                        <!-- Portfolio Section Heading-->
                        <h2 id="regra3" class="fs-3 text-center text-uppercase pt-3 mb-2">Regra de 3</h2>
                        <p class="fs-5 text-center fw-bolder text-uppercase text-break">Use esta seção para calcular uma
                            regra de 3
                            simples</p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>

                        </div>

                        <!-- Portfolio Grid Items-->
                        <div class="row justify-content-center">
                            <!-- Portfolio Item 1-->
                            <div class="col mb-5">
                                <div class="row mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text">Valor A</span>
                                        <input type="number" required id="a" class="form-control me-1">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text">Valor B</span>
                                        <input type="number" required id="b" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text">Valor C</span>
                                        <input type="number" required id="c" class="form-control me-1" onchange="calculater3()">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text">Valor X</span>
                                        <input type="text" id="resultador3" class="form-control">
                                    </div>
                                </div>
                                <script>
                                    function calculater3() {
                                        var result = document.getElementById("resultador3");
                                        var a = parseFloat(document.getElementById("a").value);
                                        var b = parseFloat(document.getElementById("b").value);
                                        var c = parseFloat(document.getElementById("c").value);
                                        var resultado = (c * b) / a;
                                        if (document.getElementById("a").value == "") {
                                            result.value = "preencha o valor A";
                                        } else if (document.getElementById("b").value == "") {
                                            result.value = "preencha o valor B";
                                        } else if (document.getElementById("c").value == "") {
                                            result.value = "preencha o valor C";
                                        } else {
                                            //alert("resultado " + a + " " + b + " " + c + " " + resultado);
                                            result.value = resultado;
                                        }
                                    }
                                </script>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Downloads Section-->
    <section class="mt-2 page-section text-black mb-0" id="regra3" style="background-color: var(--bs-gray-100); padding-top: 50px;padding-bottom: 0px;">
        <div class="container">
            <div class="accordion" id="accordionExample">
                <!-- accordion Section-->
                <div class="accordion-item border-info">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button bg-white text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Programas
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <h2 id="downloads" class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        Office
                                    </h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">Pacote office completo. NÃO somos responsáveis, sequer donos, dos softwares disponibilizados. Apenas compartilhamos para seu uso. Arquivos contém senha: felpsgk</p>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a href="https://drive.google.com/file/d/1A3njex27BXIcMrPcjjfaKZpWzdecnlyy/view?usp=drive_link" class="btn btn-primary" role="button">versão windows 10</a>
                                        <a href="https://drive.google.com/file/d/1IpiQy-_8YtSuor_VSb8vQMYO_sipt99M/view?usp=drive_link" class="btn btn-primary" role="button">versão windows 11</a>
                                    </div>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-laptop-code"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <h2 id="downloads" class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        Ativador
                                    </h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">Ativador para windows 7 em diante, até windows 10. Não testado no 11, mas pode funcionar. NÃO somos responsáveis, sequer donos, dos softwares disponibilizados. Apenas compartilhamos para seu uso. Arquivos contém senha: felpsgk</p>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a href="https://drive.google.com/file/d/1DTYvLs7IFjt0ylG2G4398xJEIZQbEek5/view?usp=drive_link" class="btn btn-primary" role="button">BAIXAR</a>
                                    </div>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-laptop-code"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <h2 id="downloads" class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        Utilidades
                                    </h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">Utilidades para sua recém formatação. Com este combo, você irá instalar o navegador Chrome, o KLite Codecs, o TeamViewer 15 e o WinRAR Installer!</p>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a href="https://drive.google.com/file/d/1MFaxExUbZqaGEDwRCdbMndq0NJlx6--E/view?usp=drive_link" class="btn btn-primary" role="button">BAIXAR</a>
                                    </div>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-laptop-code"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordion Section-->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button bg-white text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Jogos
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <h2 id="downloads" class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        BitLife BR
                                    </h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">Jogo BitLife com mod de dinheiro</p>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a href="https://drive.google.com/file/d/1VfVfVcmIgtlX3R50f5MntRC2dBdgPg1Q/view?usp=drive_link" class="btn btn-primary" role="button">BAIXAR</a>
                                    </div>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-people-roof"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <h2 id="downloads" class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        Score Hero! 2
                                    </h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">Jogo Score Hero! 2 com mod de dinheiro</p>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a href="https://drive.google.com/file/d/16XmbEh9disP5uMl8tq117DVSBJZA7tGE/view?usp=drive_link" class="btn btn-primary" role="button">BAIXAR</a>
                                    </div>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-futbol"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordion Section-->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button bg-white text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Sobre
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="col mb-4">
                                <div class="shadow container border border-info">
                                    <!-- Portfolio Section Heading-->
                                    <h2 class="fs-4 text-center text-uppercase pt-3 mb-2">
                                        Suporte técnico</h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">
                                        Suporte técnico, prestando manutenção em PC's, consultoria e montagem!
                                    </p>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-microchip"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Grid Items-->
                                    <div class="row justify-content-center">
                                        <!-- Portfolio Item 1-->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-4 ">
                                <div class="shadow container border border-info">
                                    <!-- Portfolio Section Heading-->
                                    <h2 class="text-center text-uppercase pt-3 mb-2">Conhecimento</h2>
                                    <p class="text-center fw-bolder text-uppercase text-break">
                                        Aulas práticas e teóricas, particulares ou sob demanda!
                                    </p>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fa-solid fa-glasses"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Grid Items-->
                                    <div class="row justify-content-center">
                                        <!-- Portfolio Item 1-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
    include 'includes/foot.php';
    ?>
</body>

</html>