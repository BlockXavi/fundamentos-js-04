// Ejercicio 7: Métodos Getters

// Modifica la clase Product creada anteriormente para incluir un método getter llamado totalPrice que calcule el precio total (precio * cantidad). Luego, crea una instancia de Product y muestra su precio total.
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    get precioTotal() {
        return this.precio * this.cantidad
    }
}

const producto = new Producto('Camisa', 25.99, 3)

console.log('Precio total: ', producto.precioTotal)
