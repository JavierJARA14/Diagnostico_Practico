function filtrarMayores(arreglo, valor) {
  return arreglo.filter(num => num > valor);
}

// Ejemplo
console.log(filtrarMayores([10, 5, 20, 8, 3], 8));
