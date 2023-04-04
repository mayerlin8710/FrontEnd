// crearemos nuestro primer hola mundo desde el scroipt
//console.log ("hola mundo desde js");

//var numero1=5; // js entiende que un numero es de tipo number
//var numero2=10;
//var nombre= "Jose";
//var resultado= numero1 =numero2;
function compara(numero1, numero2) {
    let mensaje;
    if (numero1 > numero2) {
        mensaje="En Primer número es mayor ";
    } else if (numero1 === numero2) {
        mensaje="Los números son iguales";
    }
    else {
        mensaje="En segundo número es mayor ";
    }
    return mensaje;
}

function suma(numero1, numero2) {
    let suma = numero1 + numero2;
    return suma

}


function resta(numero1, numero2) {
    let resta = numero1 - numero2
    return resta


}

function div(numero1, numero2) {
    let div = numero1 / numero2;
    return div

}

function mult(numero1, numero2) {
    let mult = numero1 * numero2
    return mult


}
// console.log(nombre =" dice que el resultado de la suma es: :"=resultado);
var numero1, numero2, resultado;// estamos creando 3 variables nulas a la vez
let opcion = 0;// el salto de linea se hace con la tecla \n
opcion = parseInt(prompt("seleccione que desea hacer:\n1.Calcular cuál número es mayor \n2.Sumar \n3.Restar\n4.Multiplicar\n5.Dividir\n6. Mostrar los números ingresados\n7 Salir"));
console.log(opcion);
if (opcion < 1 || opcion >7|| isNaN(opcion))  {
    alert("Eleccion Incorrecta. Adiós ");
}
else if (opcion===7){
    alert("Adiós");
}
else {
    numero1 = prompt("ingrese el primer número");
    numero2 = prompt("ingrese el segundo número");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    switch (opcion) {
        case 1:
            alert(compara(numero1, numero2));
            break;
        case 2:
            resultado = suma(numero1, numero2);
            alert("El resultado de la suma es " + resultado);
            break;
        case 3:
            resultado = resta(numero1, numero2);
            alert("El resultado de la resta es " + resultado);
            break;
        case 4:
            resultado = mult(numero1, numero2);
            alert("El resultado de la Multiplicación es " + resultado);
            break;
        case 5:
            resultado = div(numero1, numero2);
            alert("El resultado de la división es " + resultado);
            break;
        case 6:
            alert("Usted ha ingresado  " + numero1 + "  y " + numero2)
            break;
    }



    //resultado=numero1+numero2;
    //alert("la suma de "+ numero1+ "+" + numero2 + "es" + resultado)
    //console.log("el resultado es"+resultado);


    alert("Programa Finalizado");

    //alert("la suma de " + numero1 + "+" + numero2 + "es" + resultado);
}