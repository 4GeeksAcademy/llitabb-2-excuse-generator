/* eslint-disable */
import "bootstrap";
import "./style.css";

// Función que generará excusas aleatorias
function generadorExcusas() {
  // Arrays que generarán distintas partes de la oración de la excusa
  let quien = ["Mi gato", "Mi sobrino", "Una cigüeña", "El perro del vecino"];
  let accion = [
    "lanzó pintura sobre",
    "derramó gasolina y una cerilla encendida en",
    "se comió",
    "rompió"
  ];
  let que = ["mi portatil", "mi coche", "mis llaves"];
  let cuando = [
    "hace una hora.",
    "mientras me vestía para salir.",
    "cuando me ataba los cordones.",
    "mientras tendía la ropa."
  ];

  //Función que generará un valor random según el largo del array

  const numeroRandom = myArray => {
    return Math.floor(Math.random() * myArray.length);
  };

  // Variables que en las que llamamos a la función numeroRandom para generar el valor random que luego nos retornará la función generadorExcusas

  let quienId = numeroRandom(quien);
  let accionId = numeroRandom(accion);
  let queID = numeroRandom(que);
  let cuandoId = numeroRandom(cuando);

  // Composición de retorno para la excusa generada concatenando los valores generados aleatoriamente
  /* PRIMER RETURN QUE FUNCIONA:  return (
    quien[quienId] +
    " " +
    accion[accionId] +
    " " +
    que[queID] +
    " " +
    cuando[cuandoId]
  );
}*/

  //SEGUNDO RETURN QUE FUNCIONA (más claro y limpio)
  return `${quien[quienId]} ${accion[accionId]} ${que[queID]} ${cuando[cuandoId]}`;
}

// Se ejecutará cuando se carga la ventana

window.onload = function() {
  // Se asigna el resultado de la función generadorExcusas al elemento con id "excusa" en el HTML
  document.getElementById("excusa").innerHTML = generadorExcusas();
  //Se asigna llamada al HTML de botón refrescar
  /* PRIMERA OPCIÓN (de esta forma se recarga toda la página):
   document
    .getElementById("botonRefrescar")
    .addEventListener("click", function() {
      location.reload();
    });
*/
  // SEGUNDA OPCIÓN (de esta forma no se recarga toda la página):
  document.getElementById("botonRefrescar").addEventListener("click", () => {
    document.getElementById("excusa").innerHTML = generadorExcusas();
  });
};
