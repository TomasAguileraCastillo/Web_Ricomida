// script de manejo de tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="msj"]');
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//script de manejo de toogle en cards

const bsCollapse1 = new bootstrap.Collapse("#collapse1", {
  toggle: true,
});
const bsCollapse2 = new bootstrap.Collapse("#collapse2", {
  toggle: true,
});
const bsCollapse3 = new bootstrap.Collapse("#collapse3", {
  toggle: true,
});

//boton de alerta
document.getElementById("enviarCorreo").onclick = function () {
  alert("El correo fue enviado correctamente... ");
};

//manejo del color de titulo de receta
$("#receta , #preparacion").one("dblclick", function () {
  $(this).css("color", "red");
});

//cards manejo de togggle en cards v2 // me gusta mas con el bootstrap de arriba
/* 
$(document).ready(function () {
  $(".card-title").click(function () {
    $(this).next(".card-title").toggle();
  });
});*/
