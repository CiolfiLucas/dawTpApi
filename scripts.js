const URL = "https://rickandmortyapi.com/api/character";

const btnTodos = document.getElementById("btnTodos");
const btnBuscar = document.getElementById("btnBuscar");

const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

btnTodos.addEventListener("click", obtenerTodos);
btnBuscar.addEventListener("click", buscarPersonajes);

async function obtenerTodos() {

    mensaje.textContent = "";
    resultado.innerHTML = "";

try {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        mensaje.textContent = "Ocurrió un error al obtener los personajes.";
        return;
    }

    const datos = await respuesta.json();

    mostrarTabla(datos.results);

} catch (error) {
    
    mensaje.textContent = "Ocurrió un error al obtener los personajes.";

    }

}

async function buscarPersonajes() {

    mensaje.textContent = "";
    resultado.innerHTML = "";

const nombre = document.getElementById("nombre").value;
const estado = document.getElementById("estado").value;
const especies = document.getElementById("especies").value;
const tipo = document.getElementById("tipo").value;
const genero = document.getElementById("genero").value;

const url = `${URL}?name=${nombre}&status=${estado}&species=${especies}&type=${tipo}&gender=${genero}`;

try {

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        mensaje.textContent = "No se encontraron personajes.";
        return;
    }

    const datos = await respuesta.json();

    mostrarTabla(datos.results);

} catch (error) {

    mensaje.textContent = "Ocurrió un error al buscar los personajes.";

    }

}

function mostrarTabla(personajes) {

let tabla = `
    <table>
    <thead>
    <tr>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Estado</th>
        <th>Especie</th>
        <th>Tipo</th>
        <th>Género</th>
    </tr>
    </thead>
    <tbody>
`;

    personajes.forEach(function(personaje) {

tabla += `
    <tr>
    <td><img src="${personaje.image}" width="80"></td>
    <td>${personaje.name}</td>
    <td>${personaje.status}</td>
    <td>${personaje.species}</td>
    <td>${personaje.type}</td>
    <td>${personaje.gender}</td>
    </tr>
    `;

    });

tabla += `
    </tbody>
    </table>
`;

    resultado.innerHTML = tabla;

}