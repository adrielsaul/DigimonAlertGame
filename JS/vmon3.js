function escolha() {
    while (true) {
        var caminho = prompt('1 - vai para a praia, ou 2 - Falar com Wormmon?');

        if (caminho == 1) {
            return location = ('../HTML/vmon4.html');

        } else if (caminho == 2) {
            return location = ('../HTML/vmon5.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}