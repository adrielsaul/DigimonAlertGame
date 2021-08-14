function escolha() {
    while (true) {
        var caminho = prompt(' 1 - Pede ajuda a Tailmon ou 2 - Usa o Digiovo?');

        if (caminho == 1) {
            return location = ('../HTML/pagina7.html');

        } else if (caminho == 2) {
            return location = ('../HTML/pagina8.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}