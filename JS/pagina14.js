function escolha() {
    while (true) {
        var caminho = prompt(' 1 - Ir para a praia enfrentar logo Argomon. 2 - Retornar para a floresta e encontrar Tailmon?');

        if (caminho == 1) {
            return location = ('../HTML/pagina17.html');

        } else if (caminho == 2) {
            return location = ('../HTML/pagina16.html');

        } else {
            alert('Escolha uma opção válida');
        }
    }
}