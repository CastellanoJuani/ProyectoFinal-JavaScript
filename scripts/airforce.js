async function main() {
  
    await cargarProductos();
  
    SISTEMA_DE_VENTAS.stocks = generarStockDeProductos(STOCK_DE_PRODUCTOS);
  
    CARRITO.ventas = obtenerVentasCarrito();
  
    consturirHTML(carpetaImgs,"zapatillas");
  
    guardarCarritoEnStorage(CARRITO);
  
    let botonesDeAgregarAlCarrito = document.getElementsByClassName("btn btn-dark")
  
    for (btn of botonesDeAgregarAlCarrito) {
      btn.addEventListener("click",(evento) => agregarAlCarrito(evento));
    }
  
  }
  
  main()