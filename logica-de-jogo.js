let ultimaJogada = 'O';

function marcarJogada(identificador) {
    const quadradoPequeno = document.getElementById(identificador);

    const jogada = quadradoPequeno.innerHTML;

    if (jogada != "") {
        return;
    }

    if (ultimaJogada == 'O') {
        quadradoPequeno.innerHTML = 'X';
        ultimaJogada = 'X';
        return;
    }

    quadradoPequeno.innerHTML = 'O';
    ultimaJogada = 'O';
}