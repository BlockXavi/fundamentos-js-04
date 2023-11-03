// Ejercicio 9: Uso de "this" en Clases:

// Crea una clase Person con propiedades name y age. Agrega un método introduce que muestre un mensaje como "Hola, soy [nombre] y tengo [edad] años". Crea una instancia de Person y llama al método introduce.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }

    presentacion() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const persona = new Persona('Laia', 11)
persona.presentacion()

