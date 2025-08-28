function sumaElementos(arreglo) {
  return arreglo.reduce((acum, num) => acum + num, 0);
}

// Ejemplo
console.log(sumaElementos([1, 2, 3, 4, 5])); // 15
