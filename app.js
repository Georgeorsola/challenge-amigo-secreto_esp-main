// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista de amigos
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();
    
    // Validación: evitar agregar nombres vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;  // No hace nada si el nombre está vacío
    }
    
    // Agregar el nombre a la lista de amigos y actualizar la lista en el DOM
    amigos.push(nombre);
    actualizarLista();
    
    // Limpiar el campo de entrada y volver a enfocarlo para facilitar agregar múltiples nombres
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la lista de amigos mostrada en el DOM
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";  // Limpiar la lista actual
    
    // Crear un elemento <li> por cada amigo en la lista y agregarlo al <ul>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para seleccionar un nombre aleatorio de la lista de amigos
function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";  // Limpiar resultado previo
    
    // Validación: verificar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    
    // Seleccionar un índice aleatorio de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    
    // Mostrar el nombre sorteado en la sección de resultado
    const li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + nombreSorteado + "!";
    resultadoElement.appendChild(li);
}