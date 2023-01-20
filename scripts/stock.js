class Stock {

    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    reducir(cantidad) {
      if (isNaN(cantidad) || cantidad < 0) {
        return false;
      } 
  
      if ((this.cantidad - cantidad) < 0) {
        return false;
      }
  
      this.cantidad -= cantidad;
  
      return true;
    }
  
    incrementar(cantidad) {
      if (isNaN(cantidad) || cantidad < 0) {
        return false;
      }
  
      this.cantidad += cantidad;
  
      return true;
    }
  
  }