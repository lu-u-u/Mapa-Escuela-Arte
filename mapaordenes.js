/* ========================================================
   1. BUSCAMOS LOS ELEMENTOS DEL HTML
   ======================================================== */

// Panel lateral que queremos mostrar. 
const sidebar = document.getElementById("sidebar");

// Elementos del panel donde escribiremos la información.
const panelTitle = document.getElementById("panel-title");
const panelDescription = document.getElementById("panel-description");

// Buscamos las partes del SVG cuyo ID empieza por "mapeado-".
const zones = document.querySelectorAll('[id^="mapeado-"]');

/* ========================================================
   2. INFORMACIÓN DE CADA ZONA
   ======================================================== */

// Relacionamos cada ID del SVG con la información que mostrará.
const mapData = {
  "mapeado-A007": {
    title: "A007 - Taller de Serigrafía",
    description:'<img src="imagenes/tallerserigrafia.png" alt="Taller de Serigrafía" class="panel-img">"ESPACIOS: Taller ESTUDIO: Serigrafía EDIFICIO: Antiguo PLANTA: 0"'
  },

  "mapeado-A010": {
    title: "A010 - Jefatura de Estudios",
    description: '<img src="imagenes/jefatura.png" alt="Taller de Serigrafía" class="panel-img"> "ESPACIOS: Despacho ESTUDIO: Otros EDIFICIO: Antiguo PLANTA: 0"'
  },

  "mapeado-A001": {
    title: "A001 - Taller de Grabado",
    description: '<img src="imagenes/tallergrabado.png" alt="Taller de Serigrafía" class="panel-img"> "ESPACIOS: Taller ESTUDIO: Serigrafía EDIFICIO: Antiguo PLANTA: 0"',
  }
};

/* ========================================================
   3. DETECTAMOS LOS CLICS
   ======================================================== */

// Repetimos esta operación para cada zona del SVG.
zones.forEach(function(zone) {

  // Cuando se hace clic en una zona...
  zone.addEventListener("click", function() {

    // Obtenemos el ID del elemento seleccionado.
    const zoneId = zone.id;

    // Buscamos la información asociada a ese ID.
    const data = mapData[zoneId];

    // Si no hay información para esa zona, no hacemos nada.
    if (!data) {
      return;
    }

    // Actualizamos el título y la descripción del panel.
    panelTitle.textContent = data.title;
    panelDescription.innerHTML = data.description;

    // Añadimos la clase que hace visible la sidebar.
    sidebar.classList.add("open");
  });
});

/* ========================================================
   4. CERRAMOS EL PANEL
   ======================================================== */

// Buscamos el botón de cerrar.
const closeButton = document.getElementById("close-panel");

// Si existe, hacemos que cierre la sidebar al pulsarlo.
if (closeButton) {
  closeButton.addEventListener("click", function() {
    sidebar.classList.remove("open");
  });
}

/* ========================================================
   5. MOVERSE ENTRE PLANTAS
   ======================================================== */

const boton1 = document.getElementById("ir-pisosa");

boton1.addEventListener("click", function () {
  document.getElementById("planta0A").classList.remove("activo");
  document.getElementById("plantaSA").classList.add("activo");
});


const boton2 = document.getElementById("ir-piso0a");

boton2.addEventListener("click", function () {
  document.getElementById("plantaSA").classList.remove("activo");
  document.getElementById("planta0A").classList.add("activo");
});