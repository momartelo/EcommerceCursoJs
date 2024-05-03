//-------Funcion para ordenar por estrellas y comentarios-------//

const dataOriginal2 = data;
const dataAOrdenarEstrellas = data.slice();

dataAOrdenarEstrellas.sort((a, b) => {
  if (b.estrellas !== a.estrellas) {
    return b.estrellas - a.estrellas;
  } else {
    return b.comentarios - a.comentarios;
  }
});

const dataOrdenada2 = dataAOrdenarEstrellas;

//---------------------------------------------------------------//
//----------------Funcion para odenar por categoria--------------//

const dataAOrdenarxCategoria = data.slice();

dataAOrdenarxCategoria.sort((a, b) => {
  return a.categoria.localeCompare(b.categoria);
});

const dataOrdenadaxCategoria = dataAOrdenarxCategoria;

//---------------------------------------------------------------//
//----------------Funcion para odenar por nombre--------------//

const dataAOrdenarxNombre = data.slice();

dataAOrdenarxNombre.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre);
});

const dataOrdenadaxNombre = dataAOrdenarxNombre;

//---------------------------------------------------------------//
//----------------Funcion para odenar por categoria y precio--------------//

const dataAOrdenarxCatyPrecio = data.slice();

dataAOrdenarxCatyPrecio.sort((a, b) => {
  const categoriaComparison = a.categoria.localeCompare(b.categoria);
  if (categoriaComparison !== 0) {
    return categoriaComparison;
  } else {
    const precioA = parseFloat(a.precioFinal.replace("$", ""));
    const precioB = parseFloat(b.precioFinal.replace("$", ""));
    return precioA - precioB;
  }
});

const dataOrdenadaxCatyPrecio = dataAOrdenarxCatyPrecio;

//----------------------------------------------------------------//
//-------------------------Countdown-----------------------------//

// Definir la fecha de destino del countdown (por ejemplo, 1 de enero de 2025 a las 00:00:00)
const endDate = new Date("2025-01-01T00:00:00").getTime();

// Actualizar el contador cada segundo
const countdownInterval = setInterval(() => {
  // Obtener la fecha y hora actual
  const now = new Date().getTime();

  // Calcular la diferencia entre la fecha de destino y la fecha actual
  const distance = endDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en el elemento HTML con id "countdown"
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `
        <p>${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</p>
    `;

  // Si la cuenta regresiva ha terminado, limpiar el intervalo
  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "¡El countdown ha terminado!";
  }
}, 1000); // Actualizar cada segundo
