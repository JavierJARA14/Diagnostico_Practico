function buscarNombre(arreglo, nombre) {
  if (arreglo.includes(nombre)) {
    return `El nombre ${nombre} está en el arreglo.`;
  } else {
    return `El nombre ${nombre} NO está en el arreglo.`;
  }
}

// Ejemplo
console.log(buscarNombre(["Karla", "Edwar", "Javier"], "Edwar"));
// Ejemplo
console.log(buscarNombre(["Karla", "Edwar", "Javier"], "Maria"));
