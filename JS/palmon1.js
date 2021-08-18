function escolha() {
    while (true) {
        var caminho = prompt(' O que você vai fazer? 1 - Tomar a poção ou 2 - Treinar mais ? Digite o número');

        if (caminho == 1) {
            return location = ('../HTML/palmon2.html');

        } else if (caminho == 2) {
            return location = ('../HTML/palmon3.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}