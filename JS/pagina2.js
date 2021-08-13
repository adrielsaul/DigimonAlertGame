function escolha() {
    while (true) {
        var caminho = prompt(' O que você vai fazer? 1 - Treinar ou 2 - Explorar ? Digite o número');

        if (caminho == 1) {
            return location = ('../HTML/pagina3.html');

        } else if (caminho == 2) {
            return location = ('../HTML/pagina5.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}