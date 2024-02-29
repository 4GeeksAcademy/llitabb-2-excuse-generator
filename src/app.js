/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here
//primera frase
//abro función y

function generadorExcusas() {
  let quien = ["Mi gato", "Mi sobrino", "Una cigüeña", "El perro del vecino"];
  let accion = [
    "lanzó pintura sobre",
    "derramó gasolina y una cerilla encendida en",
    "se comió",
    "rompió"
  ];
  let que = ["mi portatil", "mi coche", "mis llaves"];
  let cuando = [
    "hace una hora",
    "mientras me vestía para salir.",
    "cuando me ataba los cordones.",
    "mientras tendía la ropa."
  ];

  let quienId = Math.floor(Math.random() * quien.length);
  let accionId = Math.floor(Math.random() * accion.length);
  let queID = Math.floor(Math.random() * que.length);
  let cuandoId = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienId] +
    " " +
    accion[accionId] +
    " " +
    que[queID] +
    " " +
    cuando[cuandoId]
  );
}

window.onload = function() {
  document.getElementById("excusa").innerHTML = generadorExcusas();
};
