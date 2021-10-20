let titulo = document.createElement ("h1");

titulo.innerHTML = "Tienda Online";

document.body.appendChild(titulo);

 let nombre = prompt("Ingrese su nombre");

  while (nombre == "") {
      nombre = prompt("Por favor, ingrese su nombre correctamente");
  }

  let saludo = "Hola " + nombre + `
Bienvenid@ a nuestra tienda de cervezas online`;

  alert(saludo);

  let edad = prompt("Usted es mayor de edad?");

  while (edad == "si" || "Si" || "SI") {

      document.write("<h3>Nuestras Cervezas</h3>");

      class Productos {
          constructor(nombre, tamaño, precio, cuotas, info) {
              this.nombre = nombre;
              this.tamaño = tamaño;
              this.precio = precio;
              this.cuotas = cuotas;
              this.info = info;
              this.ver = `
        Nombre: Cerveza artesanal ${this.nombre}<br>
        Precio: $${this.precio}<br>
        Cuotas: ${this.cuotas}<br>
        Características: ${this.info}<br>
        `;
          }
        
        

        
          sumaIva() {
              return this.precio * 0.21;
          }

          verInfo() {
              document.write(this.ver);
          }

      }

      const p = new Productos("Honey Beer", "473cc x12", 1773, "6 cuotas sin interés", "Alcohol: 4.5, IBU: 45 / Amargor bajo");
      const p1 = new Productos("Red Honey", "473cc x6", 1000, "6 cuotas sin interes", "Alcohol: 4.8%, IBU:15 / Amargor bajo");
      const p2 = new Productos("Porter", "500cc x12", 1817, "6 cuotas sin interes", "Alcohol: 5.5%, IBU:27 / Amargor moderado");
      const p3 = new Productos("Irish", "473cc x6", 1000, "6 cuotas sin interes", "Alcohol: 5.3%, IBU:24 / Amargor moderado");
      const p4 = new Productos("Cream Stout", "500cc x12", 1856, "6 cuotas sin interes", "Alcohol: 8.5%, IBU:49 / Amargor moderado");
      const p5 = new Productos("IPA", "473cc x6", 885, "6 cuotas sin interés", "Alcohol: 5.5%, IBU:45 / Amargor alto.");
      const p6 = new Productos("Red IPA", "473cc x6", 987, "6 cuotas sin interes", "Alcohol:5.5%, IBU:45 / Amargor alto.");
      const p7 = new Productos("India Pale Ale", "500cc x6", 967, "6 cuotas sin interes", "Alcohol: 5%, IBU:50/ Amargor alto");

      alert(`A continuacion se mostrara el listado de nuestros productos`);

      let opciones = [p.verInfo(), p1.verInfo(), p2.verInfo(), p3.verInfo(), p4.verInfo(), p5.verInfo(), p6.verInfo(), p7.verInfo()];

      let lista = [];

      let cantidad = 3;

      do {
          let entrada = prompt(`
       Por favor, seleccione el nombre de los productos que desea llevar (mínimo 3 productos):
       Honey Beer
       Red Honey
       Porter
       Irish
       Cream Stout
       IPA
       Red IPA
       India Pale Ale
       `);

          lista.push(entrada);
          alert(lista.concat());
      } while (lista.length >= cantidad);


      for (let i = 45; i <= 50; i++) {
          alert("Su n° de pedido es el" + " " + i);
      }

      break;
  }

  alert("Muchas gracias por comprar en nuestra tienda online");