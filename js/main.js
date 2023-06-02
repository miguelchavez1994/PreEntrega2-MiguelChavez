//______________ENTRADA DE DATOS_______________//




let notaMate = parseInt(prompt("Ingrese su nota del curso Matemáticas: "));
while ((notaMate <0) || (notaMate >20)) {
    alert ("Error! Ingrese un valor del 0 al 20")
    notaMate = parseInt(prompt("Ingrese su nota del curso Matemáticas: "));
}


let notaQuimica = parseInt(prompt("Ingrese su nota del curso Química: "));
while ((notaQuimica <0) || (notaQuimica >20)) {
    alert ("Error! Ingrese un valor del 0 al 20")
    notaQuimica = parseInt(prompt("Ingrese su nota del curso Química: "));
}

let notaFisica = parseInt(prompt("Ingrese su nota del curso Física: "));
while ((notaFisica <0) || (notaFisica >20)) {
    alert ("Error! Ingrese un valor del 0 al 20")
    notaFisica = parseInt(prompt("Ingrese su nota del curso Fisica: "));
}

let notaArte = parseInt(prompt("Ingrese Nota del curso Arte"));
while ((notaArte <0) || (notaArte >20)) {
    alert ("Error! Ingrese un valor del 0 al 20")
    notaArte = parseInt(prompt("Ingrese su nota del curso Arte: "));
}

let notaHistoria = parseInt(prompt("Ingrese su nota del curso Historia"));
while ((notaHistoria <0) || (notaHistoria >20)) {
    alert ("Error! Ingrese un valor del 0 al 20")
    notaHistoria = parseInt(prompt("Ingrese su nota del curso Historia: "));
}


const cursos = [
    cursoMate = {nombreCurso: "Matemática", nota: notaMate},
    cursoQuímica = {nombreCurso: "Química", nota: notaQuimica},
    cursoFisica = {nombreCurso: "Física", nota: notaFisica},
    cursoArte = {nombreCurso: "Arte", nota: notaArte },
    cursoHistoria = {nombreCurso: "Historia", nota: notaHistoria}
];
console.log(cursos);



//_________PROCESAMIENTO DE DATOS__________//


//Calculando Nota Final
function calcularNotaPromedio (n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4+ n5) / 5;
}

let notaFinal = calcularNotaPromedio(nota1, nota2, nota3, nota4, nota5).toFixed(2)





//________________SALIDA_________________//


if (notaFinal >= 11 && notaFinal <= 13) {
    alert("Tu nota final es " + notaFinal + ". Pasaste por poco!")
} else if (notaFinal >= 14 && notaFinal <= 16){
    alert("Tu nota final es " + notaFinal + ". Pasaste pero puedes hacerlo mejor")
} else if (notaFinal >= 17) {
    alert("Tu nota final es " + notaFinal + ". Eres un crack!")
} else {
    alert("Tu nota final es " + notaFinal + ". Reprobaste.")
};

