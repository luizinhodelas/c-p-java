document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém os valores dos campos de entrada
    var matricula1 = parseInt(document.getElementById('matricula1').value);
    var idade1 = parseInt(document.getElementById('idade1').value);
    var matricula2 = parseInt(document.getElementById('matricula2').value);
    var idade2 = parseInt(document.getElementById('idade2').value);

    // Compara as idades
    var resultado = (idade1 > idade2) ? idade1 : idade2;

    // Exibe o resultado na página
    document.getElementById('resultado').textContent = "A maior idade informada foi " + resultado + " anos.";
});
