// Carga completa del DOM (Document Object Model)

$(document).ready(function() {


    // --- INTERACCIÓN 1: Botón Bazinga con modal de bootstrap ---
    $("#btn-bazinga").click(function() {
        var bazingaModal = new bootstrap.Modal(document.getElementById('modalBazinga'));
        bazingaModal.show();
    });

    // --- INTERACCIÓN 2: Modo Oscuro o Materia Oscura 
    $("#btn-tema").click(function() {
        $("body").toggleClass("materia-oscura");
        if ($("body").hasClass("materia-oscura")) {
            $(this).text("Volver al Modo Normal");
        } else {
            $(this).text("Activar Modo 'Materia Oscura'");
        }
    });


    // --- INTERACCIÓN 3: Función de "Ese es mi pusto" la que hace un cambio de color y texto 
    $("#btn-sitio").click(function() {
        var contenedor = $(this).closest(".spot-container");
        if (contenedor.hasClass("bg-danger")) {
            contenedor.removeClass("bg-danger text-white"); // Se elimna el fondo rojo y letras blancas
            $(this).removeClass("btn-warning").addClass("btn-danger"); // Volvemos el botón a su estado original (Rojo)
            $(this).text("Intentar sentarse aquí");
            $("#mensaje-sitio").fadeOut(); // Se oculta el mensaje de Sheldon

        } else {
            contenedor.addClass("bg-danger text-white"); // Se agrega el fondo rojo 
            $(this).removeClass("btn-danger").addClass("btn-warning"); // se cambia el botn a amarillo 
            $(this).text("¡Perdón! Ya me salgo de tu puesto");
            $("#mensaje-sitio").fadeIn(); // Se despliega mensaje de Sheldon (tipo de la serie)
        }
    });

    // --- INTERACCIÓN 4: Validación de Formulario y Modal de Éxito ---
    $("#formulario-contacto").submit(function(evento) {
        evento.preventDefault(); // Para evitar que se recargue la página
        var email = $("#email").val().trim();
        var mensaje = $("#mensaje").val().trim();
        var formularioValido = true;

        if (email === "") { // si el campo de email está vacio, se deja mensaje con alerta.
            $("#email").addClass("is-invalid"); 
            $("#error-email").fadeIn(); 
            formularioValido = false;
        } else {
            $("#email").removeClass("is-invalid");
            $("#error-email").fadeOut();
        }

        if (mensaje === "") { // si el campo de mensaje está vacio, deja mensaje con alerta
            $("#mensaje").addClass("is-invalid");
            $("#error-mensaje").fadeIn();
            formularioValido = false;
        } else {
            $("#mensaje").removeClass("is-invalid");
            $("#error-mensaje").fadeOut();
        }

        if (formularioValido) { // Si passa todas las validaciones. 
            var contactoModal = new bootstrap.Modal(document.getElementById('modalContacto')); // Se muestra ventana con mensaje de OK.-
            contactoModal.show();
            $("#formulario-contacto")[0].reset(); // se limpian los campos del form.
            $(".is-invalid").removeClass("is-invalid"); // se remueven las clases.
        }
    }); 

    // --- ANIMACIÓN DE SCROLL (FADE IN) ---
    function verificarVisibilidad() {
        $(".oculto").each(function() {
            var bordeInferiorVentana = $(window).scrollTop() + $(window).height();
            var bordeSuperiorElemento = $(this).offset().top;

            if (bordeInferiorVentana > bordeSuperiorElemento + 50) {
                $(this).addClass("mostrar"); 
            }
        });
    }

    // Ejecuta funcion con el scroll de la ventana.
    $(window).on("scroll", verificarVisibilidad);

    verificarVisibilidad();


});