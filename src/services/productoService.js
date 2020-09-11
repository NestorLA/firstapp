export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Heladera",
          imagen:
            "https://medias.musimundo.com/medias/sys_master/images/images/h12/hba/10068703313950/00110019-135373-01.jpg",
            precio: 1500,
            detalles: "Espaciosa y comoda"
        },
        {
          id: 2,
          nombre: "Televisor",
          imagen:
            "https://www.lg.com/co/images/televisores/42pj350/gallery/large01.jpg",
            precio: 2500,
            detalles: "Pantalla gigante en Ultra HD"
        },
      ]); // Trae la lista
    }, 2000);
  });
}

export function getProducto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          id: 1,
          nombre: "Heladera",
          imagen:
            "https://medias.musimundo.com/medias/sys_master/images/images/h12/hba/10068703313950/00110019-135373-01.jpg",
            precio: 1500,
            detalles: "Espaciosa y comoda"
        }
      ); // Trae el producto
    }, 3000);
  });
}
