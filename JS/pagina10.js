function escolha() {
    while (true) {
        var caminho = prompt('qual a qualidade que você se identifica. 1 - Coragem,  2 - Esperança ou 3 - Conhecimento.');

        if (caminho == 1) {
            alert("Culumon reiniciou a linha do tempo. Você deve escolher um Digimon novamente");
            return location = ('../index.html');
        }
        else if (caminho == 2) {
            return location = ('./pagina11.html');
        }
        else if (caminho == 3) {
            alert("Culumon reiniciou a linha do tempo. Você deve escolher um Digimon novamente");
            return location = ('../index.html');
        }
        else {
            alert('Digite uma opção válida');
        }

    }
}