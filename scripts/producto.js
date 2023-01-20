class Producto {

    constructor(nombre, precio, descripcion = "", titulo = "", categoria = "") {
      this.nombre = nombre.toLowerCase();
      this.precio = precio;
      this.descripcion = descripcion;
      this.titulo = titulo;
      this.categoria = categoria;
    }
  
    modificarPrecio(nuevoPrecio) {
  
      if (isNaN(nuevoPrecio)) {
        return false;
      }
  
      this.precio = nuevoPrecio;
  
      return true;
    }
  
  }