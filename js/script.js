document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formContacto");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
                alert("Por favor complete todos los campos.");
                return;
            }

            const datos = {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                mensaje: mensaje,
                fecha: new Date().toLocaleString()
            };

            let solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];

            solicitudes.push(datos);

            localStorage.setItem("solicitudes", JSON.stringify(solicitudes));

            alert("Su solicitud fue enviada correctamente.");

            formulario.reset();

        });

    }

});

const tabla = document.getElementById("tablaSolicitudes");

if (tabla) {

    const solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];

    solicitudes.forEach(function (item) {

        tabla.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.correo}</td>
                <td>${item.telefono}</td>
                <td>${item.mensaje}</td>
                <td>${item.fecha}</td>
            </tr>
        `;

    });

}