document.getElementById('matriculaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém os valores das matrículas
    var matriculas = [];
    for (var i = 1; i <= 5; i++) {
        matriculas.push(parseInt(document.getElementById('matricula' + i).value));
    }

    // Obtém a matrícula para consulta
    var busca = parseInt(prompt("Informe a matrícula para consulta:"));

    // Realiza a busca
    var encontrada = false;
    for (var i = 0; i < matriculas.length; i++) {
        if (busca === matriculas[i]) {
            encontrada = true;
            break;
        }
    }

    // Exibe o resultado na página
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = encontrada ? "Matrícula encontrada!" : "Matrícula não encontrada!";
});
