const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [
      { id: "string", name: "string", description: "string", stock: 2 },
      { id: "string", name: "string", description: "string", stock: 3 },
      { id: "string", name: "string", description: "string", stock: 4 },
    ]
    return data;
  }, 3000);
});

promesa.then(
  (resolve) => {
    console.log("Array de productos recibido" + resolve);
  },
  (err) => {
    console.log("Hubo un error");
  }
).catch((err) => {
    console.log("Problema en lectura del resultado")
});
