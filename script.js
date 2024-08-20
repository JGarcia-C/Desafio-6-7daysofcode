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
      let continuar = parseInt(prompt("Desea ingresar otro articulo:\n 1. Seguir ingresando'\n 2. Salir."));
      if ( continuar != 1) {
            alert(`LISTA DE COMPRAS:\n  Frutas: ${frutas.join(", ")}\n  Lácteos: ${lacteos.join(", ")}\n  Congelados: ${congelados.join(", ")}\n  Dulces: ${dulces.join(", ")}`)
            confirmar = false;
      }                                       
}
  
