function iniciarContagem() {
    var num = parseInt(document.getElementById('numInput').value);
    var result = document.getElementById('result');
    result.innerHTML = '';

    for (var cont = 1; cont <= num; cont++) {
        result.innerHTML += cont + '<br>';
    }
}
