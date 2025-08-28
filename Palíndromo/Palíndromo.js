function esPalindromo(palabra) {
  let invertida = palabra.split("").reverse().join("");
  return palabra === invertida;
}

// Ejemplo
console.log(esPalindromo("OSO"));  // true
console.log(esPalindromo("Edwar")); // false
