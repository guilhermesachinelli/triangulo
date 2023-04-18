//Àrea do triangulo
function triangulo(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);
    let soma = (a + b + c) / 2;
    let x = Math.sqrt(soma*((soma-a)* (soma-b) * (soma-c)));
    let r = x % 2;
    let y = (b*a) / 2;
    let j = parseInt(y % 2);
    
    if (r == 0) {
        console.log("Entrou aqui if")
        document.getElementById("resultado").innerHTML = `A área do triângulo é: ${x} par`;
        
    } else {
        console.log("Entrou auqi no else")
        document.getElementById("resultado").innerHTML = `A área do triângulo é: ${x} impar`;
    
    }
//perimetro do triangulo
    if (j == 0){ 
    document.getElementById("resultado1").innerHTML = `O perimetro do triângulo é: ${y} Par`;
    }
    else {
        document.getElementById("resultado1").innerHTML = `O perimetro do triângulo é: ${y} Impar`;   
    }
//O tipo dos triangulos
if (a==b){
    document.getElementById("resultado2").innerHTML = `O triangulo é Isósceles`;
}
else if (a==c){
    document.getElementById("resultado2").innerHTML = `O triangulo é Isósceles`;
}
else if(b==c){
    document.getElementById("resultado2").innerHTML = `O triangulo é Isósceles`;
}
if (a==b && a==c){
    document.getElementById("resultado2").innerHTML = `O triangulo é Equilátero`;
}
else{
    document.getElementById("resultado2").innerHTML = `O triangulo é Escaleno`;
}

//Par ou Impar
}
