import "./styles.css";

//https://www.youtube.com/watch?v=RqQ1d1qEWlE//

document.getElementById("app").innerHTML = `
<h1>Bases del JS curso YouTube</h1>
<h4>https://www.youtube.com/watch?v=RqQ1d1qEWlE</h4>
<div></div>`;

// Comunicarse con la Consola desde la jecucion dl codigo a modo de control
console.error("mi primer error");
console.log("Hola Consola");

//Tipos de Datos//
      // 1) type "string" es una cadena de caracteres "Cualquier texto"
      //"Hola Codigo"
console.log("Hola Codigo")

      // 2) type "number" es un numero "10000"
      //10000
      //-2.3
      //2.3
 console.log(1000)

      // 3) typ"boolean" es un tipo de dato logico que es "true" o "false"
      //true;
      //false;

console.log(true)

      // 4) array (arreglo)es una lista ya sea de strings o de numeros 
      //(delimitda entre corchetes) de por ejemplo Clientes
      //["Jose", "Claudia", "Pablo", ]
  
  console.log(["Jose", "Claudia", "Pablo", ])
  console.log(["1", "2", "3", ])

      // object supongamos que quiero almacenar un conjunto de datos 
      //de un cliente compuesto por un 
      // "nombre del dato": "un valor del dato"
      
  console.log({
        "userName": "Jose"
        "score": 70
        "horas": 14
        "profesional": true
      })

      // Las Variables son cajas para almacenar datos para usarlos despues
      // var nombreVariable = "cualquier dato a guardar"
      // puedo llamarlas let o var

      var nombreVariable = "Jose";
  console.log(nombreVariable);

     let apellidoVariable = "Garcia";
  console.log(apellidoVariable);

  // var es variable a lo largo de la secuencia de ejecucion del 
  //codigo si cambio en una parte del codigo al definicion de la mism variable
  // si la vuelvo a llamarme mostrara la ultima definicion asignada 
  //por ejemplo cambio "Jose" por "Pablo"

     var nombreVariable = "Pablo";
  console.log(nombreVariable);

// cuando quiero definr una caja para guardar cualquier cosa que sea
// imposible que varie en el tiempo por mas que Yo me equivoque  
//intente en mi codigo cambiar su valor posteriormente....
// la defino como const 
// const nombreConstant = "cualquier constante"

      const PI = "3.1416";
   console.log(PI);   

     PI ="20"; // Siintento cambiar el vlor de la constante PI dara error
   console.error(PI);

// Nombrar las variables usando canmelCase  siempre es una buena practica

    let numberOne = 20;
    let numberTwo = 30;
    let result = numberOne + numberTwo; //suma
  console.log(result);
    let result = numberOne > numberTwo;// mayor
  console.log(result);
    let result = numberOne < numberTwo;// menor
  console.log(result);
    let result = numberOne == numberTwo;// es igual?
  console.log(result);
  let result = numberOne != numberTwo; // es diferente?
  console.log(result);



console.log(result)
 
    let nombreOne = "Jose";
    let nombreTwo = "Maria";
    let result = nombreOne + nombreTwo;
    console.log(result);

    // Para separar los nombres puedo sumar un espacio asi + " " +
    let result = nombreOne + " " + nombreTwo; 
console.log(result);

      // Vamos a ver un Login como de Facebook 
    let passwordDB = "pepe";
    let inputUser = "pepe";
    // passwordDB es la contrasenia almcenada en la BD (Base de Datos)//
    // imputUser es la contrasenia que ingresa por teclado el usuar//
   let verifica = passwordDB === inputUser;
    //console.log(verifica);

    //Ahora vamos a gregar un CONDICIONAL segun el password sea true o false
    // Lo haremos cn palabras claves reservada
     if (verifica === true) {
        console.log("Password correcto");
      }
      if (verifica ===false) {
        console.log("Reingrese Password");
      }
      //Ahora agregamos la opcion de accion cuando el if no se cumple
      //lo hcemos via else
      if (verifica === true) {
        console.log("Password correcto");
      } else {
          console.log("Reingrese Password")
        }
      //Ahora un doble condicional
      let score = 70; // Modificar este score y se vera por console log si es Avanzado  Medio o Principiante
      if (score >60) {
        console.log("Avanzado");
      }
      if (score >30) {
        console.log("Nivel Medio"); //Aca vemos que pueden cumplirse 2 condiciones y muestr a 2 consle.log
      }
        else {
          console.log("Principiante")
        }

      //Ahora un doble condicional pero con else if
      let score = 100; // Modificar este score y se vera por console log si es Avanzado  Medio o Principiante
      if (score >60) {
        console.log("Avanzado");
      }
      else if (score >30) {
        console.log("Nivel Medio");
      }
        else {
          console.log("Principiante")
        }
        
        // Ahora veremos otra CONDICIONAL Qque es switch

      let typeCard = ("Credit Card"); 
        // Modificar este typeCard y se vera por console log
      switch(typeCard) {
        case "Debit Card" :
              console.log("This is a Debit Card");
              break;
        case "Credit Card" :
              console.log("This is a Credit Card");
              break;
        default: 
              console.log("No Card")
      }
      
      // Ahora veremos otra que son BUCLES O ITERADORES
      // la primera es while . while aplica una condicion

        let count = 50; // Modificar este alor y se vera por console log
        // al costado de Cat de Bucles el circulito de la cant d loops
      while(count > 0 ) {
          console.log("Cant de Bucles");
          count = count - 1;
      }

      // Ahora veremos el mismo BUCLE O ITERADORES que consolea 
      // la variable count y loopea hasta que count -1 es =0

        let count = 2; // Modificar este valor y se vera por console log
        // al costado de Cant de Bucles el circulito de la cant de loops en cant descend
      while(count > 0 ) {
          console.log(count);
          count = count - 1;
      }

  
 let count = 2; // Modificar este valor y se vera por console log
        // al costado de Cant de Bucles el circulito de la cant de loops
      //podemos reemplazar count = count -1 por cunt-- o por count++
        while(count > 0 ) {
          console.log(count);
          count--
      }

      let count = 1; // Modificar este valor y se vera por console log
        // al costado de Cant de Bucles el circulito de la cant de loops
      //podemos reemplazar count = count -1 por cunt-- o por count++      }
       while(count < 5 ) {
          console.log(count);
          count++
       }

let names = ["Jose", "Claudia", "Pablo",];

       for(let i = names.length - 1; i >= 0; i--) {
        console.log(names[i]);
       }

      // Ahora empezamos a ver FUNCIONES

       function saludar(persona) {
         console.log("Hola" + " " + persona);
       }
       saludar("Rosa");

       








function nombre(nombre: any) {
  throw new Error("Function not implemented.");
}

