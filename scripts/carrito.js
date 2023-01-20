class Carrito {

    constructor(ventas = []) {
      this.ventas = ventas;
    }
  
    agregarVenta(venta) {
  
      if (this.existeVenta(venta.producto.nombre)) {
        let ventaYaExistente = this.buscarVenta(venta.producto.nombre);
        
        ventaYaExistente.incrementarCantidad(venta.cantidad);
      }
      else {
        this.ventas.push(venta);
      }
      
      return true
  
    }
  
    existeVenta(nombreDeProducto) {
      return this.ventas.some((venta) => venta.producto.nombre === nombreDeProducto.toLowerCase())
    }
  
    buscarVenta(nombreDeProducto) {
      return this.ventas.find((venta) => venta.producto.nombre === nombreDeProducto.toLowerCase());
    }
}