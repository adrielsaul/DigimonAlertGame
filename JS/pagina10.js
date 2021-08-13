function escolha() {
    while (true) {
        var caminho = prompt('qual a qualidade que você se identifica. 1 - Coragem,  2 - Esperança ou 3 - Conhecimento.');

        if (caminho == 1) {
            return location = ('./pagina12.html');
        }
        else if (caminho == 2) {
            return location = ('./pagina11.html');
        }
        else if (caminho == 3) {
            return location = ('./pagina12.html');
        }
        else {
            alert('Digite uma opção válida');
        }

    }
}