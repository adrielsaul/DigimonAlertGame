function escolha() {
    while (true) {
        var caminho = prompt('Qual Digimon irá te acompanhar nessa aventura: 1 - Patamon, 2 - Palmon ou 3 - V-Mon ? Digite o número');

        if (caminho == 1) {
            return location = ('../HTML/pagina2.html');
        }
        else if (caminho == 2) {
            return location = ('../HTML/palmon1.html');
        }
        else if (caminho == 3) {
            return location = ('../HTML/vmon1.html');
        }
        else {
            alert('Digite uma opção válida');
        }

    }
}