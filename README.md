Amigo Secreto

Descripción del Proyecto

Amigo Secreto es una aplicación web sencilla que permite simular el juego del “amigo secreto”. El usuario puede ingresar una lista de nombres de amigos y, con solo pulsar un botón, la aplicación seleccionará al azar uno de esos nombres. Esto emula la dinámica clásica de sacar un papelito de un recipiente para conocer quién será tu amigo secreto. La aplicación está diseñada con una interfaz simple e intuitiva para que cualquiera pueda usarla y divertirse organizando un amigo secreto de forma digital.

Tecnologías Utilizadas
	•	HTML5: Define la estructura y contenido de la página, incluyendo el formulario de ingreso de nombres y los botones de acción.
	•	CSS3: Proporciona estilos visuales a la aplicación, mejorando la apariencia de la interfaz (colores, fuentes, distribución, etc.).
	•	JavaScript (Vanilla): Implementa la lógica del juego. Se utiliza JavaScript puro (sin frameworks) para manejar eventos, validar entradas, actualizar el DOM y realizar el sorteo aleatorio del amigo secreto.

Estructura del Código

El código JavaScript está organizado en funciones separadas para manejar cada parte de la funcionalidad:
	•	Lista de amigos: Se utiliza un arreglo (amigos) para almacenar los nombres ingresados por el usuario.
	•	Función agregarAmigo(): Toma el nombre del campo de texto y lo añade al arreglo de amigos, después de validar que el campo no esté vacío. Luego llama a actualizarLista() para reflejar el cambio en la interfaz.
	•	Función actualizarLista(): Actualiza el elemento <ul id="listaAmigos"> en el DOM. Limpia su contenido y luego agrega cada nombre del arreglo amigos como un ítem (<li>) en la lista, mostrando la lista completa de participantes actuales.
	•	Función sortearAmigo(): Primero verifica que haya al menos un nombre en la lista. Si la lista no está vacía, calcula un índice aleatorio y selecciona un nombre del arreglo amigos. Luego muestra el nombre seleccionado dentro del elemento <ul id="resultado"> en la página, creando un <li> con el mensaje del resultado. Si la lista está vacía, muestra una alerta indicando que se requieren nombres para realizar el sorteo.

Estas funciones están vinculadas a los botones de la interfaz mediante atributos onclick en el HTML:
	•	El botón “Añadir” llama a agregarAmigo() cuando se hace clic.
	•	El botón “Sortear amigo” llama a sortearAmigo() cuando se hace clic.

Cómo Ejecutar el Proyecto
	1.	Descargar los archivos: Obtén todos los archivos del proyecto, que incluyen index.html, style.css, app.js (el código JavaScript proporcionado arriba) y la carpeta assets con las imágenes necesarias.
	2.	Estructura de archivos: Asegúrate de que index.html, style.css y app.js se encuentren en el mismo directorio, y que la carpeta assets (que contiene las imágenes como amigo-secreto.png y play_circle_outline.png) esté en la ruta apropiada según se referencia en el HTML.
	3.	Abrir el HTML: Simplemente abre el archivo index.html en tu navegador web preferido. No se requiere ninguna configuración adicional ni servidor web, ya que es un proyecto estático.
	4.	Interacción: En la página abierta, ingresa los nombres de los participantes uno por uno en el campo de texto y presiona el botón “Añadir” para agregarlos a la lista. Cuando hayas agregado todos los nombres deseados, haz clic en el botón “Sortear amigo”. Verás aparecer en pantalla el nombre aleatorio de la persona que resultó seleccionada como amigo secreto.

Características del Juego
	•	Agregar nombres a la lista: Permite ingresar cualquier número de nombres de amigos. Cada nombre que ingreses se añade a una lista visible en la página, para que puedas verificar que todos los participantes están incluidos.
	•	Validación de entrada: La aplicación verifica que el campo de nombre no esté vacío al intentar agregar un nuevo amigo. Si está vacío (o solo contiene espacios), se mostrará una alerta pidiendo un nombre válido, evitando así entradas en blanco en la lista.
	•	Actualización dinámica de la lista: Cada vez que se agrega un nombre, la lista de participantes en el DOM se actualiza inmediatamente para reflejar los cambios. Esto se logra creando elementos de lista (<li>) por cada nombre ingresado de forma dinámica con JavaScript.
	•	Sorteo aleatorio de un nombre: Al hacer clic en “Sortear amigo”, la aplicación elige aleatoriamente uno de los nombres de la lista de participantes. El resultado del sorteo se muestra en pantalla de forma destacada, informando quién ha sido seleccionado como el amigo secreto.
	•	Interfaz interactiva y vinculada: Los elementos de la interfaz (el campo de texto y los botones) están directamente vinculados con las funciones JavaScript. Esto hace que la experiencia sea fluida: al presionar los botones se ejecutan las acciones correspondientes (agregar a la lista o realizar el sorteo) sin necesidad de refrescar la página. La utilización de aria-live="polite" en el elemento de resultado asegura además que tecnologías asistivas (como lectores de pantalla) anuncien el nombre sorteado de manera adecuada.

Con este proyecto “Amigo Secreto”, podrás organizar de forma rápida y entretenida un sorteo de amigo secreto digital, viendo inmediatamente el resultado en la pantalla de tu navegador. ¡Diviértete probándolo con diferentes nombres y sorprendiendo a tus amigos con esta versión web del clásico juego!
