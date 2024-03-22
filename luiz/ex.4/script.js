function calcularPeso() {
    var peso = parseFloat(document.getElementById('pesoInput').value);

    var respMais15 = peso * 0.15 + peso;
    var respMenos20 = peso - peso * 0.20;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Seu peso mais 15 por cento: ${respMais15.toFixed(2)} kilos.</p>
        <p>Seu peso menos 20 por cento: ${respMenos20.toFixed(2)} kilos.</p>
    `;
}
