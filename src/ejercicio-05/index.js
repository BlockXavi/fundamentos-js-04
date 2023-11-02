// Ejercicio 5: Definiendo una Clase y Métodos

// Crea una clase llamada Rectangle que tenga propiedades width y height. Define un método dentro de la clase que calcule el área del rectángulo. Crea una instancia de la clase y muestra el área en la consola.
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
    }

    calcularArea() {
        return this.ancho * this.alto
    }
}

const rectangulo = new Rectangulo(5, 10)
// Genero una instancia de la clase Rectangulo

console.log('Area: ', rectangulo.calcularArea())
