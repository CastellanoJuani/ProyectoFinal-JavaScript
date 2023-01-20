class Venta {

    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    incrementarCantidad(cantidad) {
      this.cantidad += cantidad;
    }
  
    obtenerTotal() {
      return this.producto.precio * this.cantidad;
    }
  
  }