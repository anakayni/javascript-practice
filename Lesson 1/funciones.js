//Solicitud de ingreso importe
var importe = parseInt(prompt ("Ingrese el importe de préstamo"));
//Muestro en el log
console.log("Importe: ", importe);
//Muetro en el HTML
document.getElementById("importe").value = "$" + importe;

//Solicitud de ingreso interés
var interes =parseInt(prompt("Ingrese interés del préstamo %"));
//Muestro en el log
console.log("El interés del préstamo es: ", interes);
//Muestro en el HTML
document.getElementById("interes").value = interes + " %";

//Solicitud de ingreso plazo o cuotas   
var cuotas = parseInt(prompt("Ingrese plazo o cuotas"));
//Muestro en el log
console.log("El plazo o cuotas es: ", cuotas);
//Muestro en el HTML
document.getElementById("cuotas").value = cuotas;

//Calculo del importe total
var importeTotal = importe + ((importe * interes) / 100);
//Muestro en el log
console.log("El importe total es: ", importeTotal); 
//Muestro en el HTML
document.getElementById("importeTotal").value = "$" + importeTotal;

//Calculo del monto mensual
var importeCuotas = importeTotal / cuotas;
//Muestro en el log
console.log("El monto mensual es: ", importeCuotas);
//Muestro en el HTML
document.getElementById("importeCuotas").value = "Cuotas de $" + importeCuotas;