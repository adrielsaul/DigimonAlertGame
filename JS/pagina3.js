function escolha() {
    while (true) {
        var caminho = prompt('O que Angemon deve fazer? 1 - Matar Ogremon ou 2 - Purificar ? Digite o número');

        if (caminho == 1) {
            return location = ('../HTML/pagina6.html');

        } else if (caminho == 2) {
            return location = ('../HTML/pagina4.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}