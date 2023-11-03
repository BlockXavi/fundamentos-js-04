// Ejercicio 8: Métodos Setters

// Agrega un método setter a la clase Product que permita modificar la cantidad del producto. Luego, utiliza el setter para cambiar la cantidad de una instancia y muestra el precio total actualizado.
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    get getCantidad() {
        return this.cantidad
    }

    set cambiarCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad
    }

    get precioTotal() {
        return this.precio * this.cantidad
    }

}

const producto = new Producto('Gorra', 19.99, 2)
console.log('Precio Total: ', producto.precioTotal)
// Resultado: 19.99 * 2 = 39.98

console.log('Cantidad original: ', producto.getCantidad)
// Resultado Cantidad original: 2
producto.cambiarCantidad = 5
console.log('Cantidad final: ', producto.getCantidad)
// Resultado Cantidad final: 5
console.log('Precio Total actualizado: ', producto.precioTotal)
// Resultado: 19.99 * 5 = 99.95



