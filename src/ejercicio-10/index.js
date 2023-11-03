// Ejercicio 10: Herencia con "this" en Clases:

// Extiende la clase Person para crear una clase Student. Agrega una propiedad adicional grade y sobrescribe el método introduce para incluir también el grado del estudiante. Crea una instancia de Student y llama al método introduce.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }

    presentacion() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad)
        this.grado = grado
    }

    presentacion() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estoy en el grado ${this.grado}.`)
    }
}

const persona = new Persona('Xavier', 50)
persona.presentacion()
// Resultado: Hola, soy Anna y tengo 18 años.

const estudiante = new Estudiante('Anna', 18, 'Arquitectura')
estudiante.presentacion()
