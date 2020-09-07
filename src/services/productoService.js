export default function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Heladera",
          imagen:
            "https://medias.musimundo.com/medias/sys_master/images/images/h12/hba/10068703313950/00110019-135373-01.jpg",
        },
        {
          id: 2,
          nombre: "Televisor",
          imagen:
            "https://www.lg.com/co/images/televisores/42pj350/gallery/large01.jpg",
        },
      ]); // Trae la lista
    }, 2000);
  });
}
