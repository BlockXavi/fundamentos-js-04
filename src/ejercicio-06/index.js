// Ejercicio 6: Herencia de Clases

// Defino la clase Rectangulo
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
    }

    calcularArea() {
        return this.ancho * this.alto
    }
}

// Extiende la clase Rectangle para crear una clase Square que también tenga un método para calcular el área, pero en este caso, el lado es el mismo para todas las direcciones. Crea una instancia de Square y muestra su área.
class Cuadrado extends Rectangulo {
    constructor(largoLado) {
        super(largoLado, largoLado)
    }
}

const cuadrado = new Cuadrado(7)

console.log('Area del cuadrado: ', cuadrado.calcularArea())
// Resultado: Area del cuadrado: 49