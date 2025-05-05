document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación simple
        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            e.preventDefault(); // Detiene el envío del formulario
            return;
        }

        if (!correo.includes("@")) {
            alert("Por favor ingresa un correo válido.");
            e.preventDefault();
            return;
        }

        // Mensaje de confirmación
        alert("Formulario enviado correctamente.");
    });
});
