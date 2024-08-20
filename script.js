let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let confirmar = true;
alert("Bienvenido, este programa esta diseñado para realizar una lista de compras")
while(confirmar){
      let compra = prompt("Ingrese el articulo que desea comprar:");
      let categoria = parseInt(prompt(`${compra} en que categoria se encuentra:\n 1. Fruta.\n 2. Lacteos.\n 3. Congelados.\n 4. Dulces`));   
      if (categoria >= 1 && categoria <= 4){
          if (categoria == 1){
            frutas.push(compra);
            alert(`Se ha ingresado a la categoria de Frutas: ${frutas.join(", ")}`);                        
          }
          else if (categoria == 2){
            lacteos.push(compra);
            alert(`Se ha ingresado a la categoria de Lácteos: ${lacteos.join(", ")}`);                        
          }
          else if (categoria == 3){
            congelados.push(compra);
            alert(`Se ha ingresado a la categoria de Congelados: ${congelados.join(", ")}`);                        
          }
          else{
            dulces.push(compra);
            alert(`Se ha ingresado a la categoria de Dulcess: ${dulces.join(", ")}`);                        
          }
      }
      else{
      alert('Ingrese un valor numérico entre 1 a 4')                  
      }
      let continuar = parseInt(prompt("Desea ingresar otro articulo:\n 1. Seguir ingresando'\n 2. No."));
      if ( continuar != 1) {
            let alerta = alert(`LISTA DE COMPRAS:\n  Frutas: ${frutas.join(", ")}\n  Lácteos: ${lacteos.join(", ")}\n  Congelados: ${congelados.join(", ")}\n  Dulces: ${dulces.join(", ")}`);
            let borrar = parseInt(prompt(`${alerta}\n ¿Desea borrar algún producto de la lista?\n  1. Si.\n  2. No.`));
            if ( borrar == 1){
                  let alertaUno = alert(`LISTA DE COMPRAS:\n  Frutas: ${frutas.map((item, index) => `${index + 1}. ${item}`).join(", ")}\n  Lácteos: ${lacteos.map((item, index) => `${index + 1}. ${item}`).join(", ")}\n  
                  Congelados: ${congelados.map((item, index) => `${index + 1}. ${item}`).join(", ")}\n  Dulces: ${dulces.map((item, index) => `${index + 1}. ${item}`).join(", ")}`)
                  let elemento = parseInt(prompt(`${alertaUno}\n Digite el número de la categoria en donde se encuentra el producto:))
      }      
            confirmar = false;
      }                                       
}
  
