function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(4));


function pi(){
    return 3.14;
}
var total = 5 * pi()
console.log(total);

function imc(peso, altura){
    var imc = peso / (altura* altura);
    return imc;
}
console.log("IMC: ", imc(67, 1.73));

addEventListener('click', function(){
    console.log('Oi');
});