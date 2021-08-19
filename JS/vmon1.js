function escolha() {
    while (true) {
        var caminho = prompt(' O que você vai fazer? 1 - Treinar mais ou 2 - Procurar um digiovo? Digite o número');

        if (caminho == 1) {
            return location = ('../HTML/vmon3.html');

        } else if (caminho == 2) {
            return location = ('../HTML/vmon2.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}