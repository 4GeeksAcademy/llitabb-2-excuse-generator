/* eslint-disable */
import "bootstrap";
import "./style.css";

// Función que generará excusas aleatorias
function excuseGenerator() {
  // Arrays que generarán distintas partes de la oración de la excusa
  let who = ["Mi gato", "Mi sobrino", "Una cigüeña", "El perro del vecino"];
  let action = [
    "lanzó pintura sobre",
    "derramó gasolina y una cerilla encendida en",
    "se comió",
    "rompió"
  ];
  let what = ["mi portatil", "mi coche", "mis llaves"];
  let when = [
    "hace una hora.",
    "mientras me vestía para salir.",
    "cuando me ataba los cordones.",
    "mientras tendía la ropa."
  ];

  //Función que generará un valor random según el largo del array

  const randomNumber = myArray => {
    return Math.floor(Math.random() * myArray.length);
  };

  // Variables que en las que llamamos a la función randomNumber para generar el valor random que luego nos retornará la función excuseGenerator
  let whoId = randomNumber(who);
  let accionId = randomNumber(action);
  let whatID = randomNumber(what);
  let whenId = randomNumber(when);

  // Composición de retorno para la excusa generada concatenando los valores generados aleatoriamente
  /* PRIMER RETURN what FUNCIONA:  
  return (
    who[whoId] +
    " " +
    action[accionId] +
    " " +
    what[whatID] +
    " " +
    when[whenId]
  );
}*/

  //SEGUNDO RETURN QUE FUNCIONA (más claro y limpio)
  return `${who[whoId]} ${action[accionId]} ${what[whatID]} ${when[whenId]}`;
}

// Se ejecutará whe se carga la ventana

window.onload = function() {
  // Se asigna el resultado de la función excuseGenerator al elemento con id "excusa" en el HTML
  document.getElementById("excuse").innerHTML = excuseGenerator();
  //Se asigna llamada al HTML de botón refrescar
  /* PRIMERA OPCIÓN (de esta forma se recarga toda la página):
   document
    .getElementById("refreshButton")
    .addEventListener("click", function() {
      location.reload();
    });
*/
  // SEGUNDA OPCIÓN (de esta forma NO se recarga toda la página):
  document.getElementById("refreshButton").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });
};
