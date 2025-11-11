const lampada = document.getElementById('lampada');
const botaoAcender = document.getElementById('btAcender');
const botaoApagar = document.getElementById('btApagar');

btAcender.addEventListener('click', function() {
    if (lampada.src.includes('img/lampada-quebrada.png')) {

        alert("A lâmpada está quebrada, não pode acender!"); 
    } else {
        
        lampada.src = 'img/lampada-acesa.png';
    }
});

btApagar.addEventListener('click', function apagarLampada() {

    if (lampada.src.includes('img/lampada-quebrada.png')) {

        alert("A lâmpada está quebrada, não pode apagar!"); 
    }

    lampada.src = 'img/lampada-apagada.png';
});

lampada.addEventListener('click', function quebrarLampada() {
    lampada.src = 'img/lampada-quebrada.png';
});
lampada.addEventListener('dblclick', function restaurarLampada() {
    lampada.src = 'img/lampada-apagada.png';
});