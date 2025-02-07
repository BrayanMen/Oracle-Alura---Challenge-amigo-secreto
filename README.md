# Sorteo de Amigo Secreto - Alura Challenge

## Descripción
Este proyecto es parte de un desafío de Alura para fortalecer habilidades en lógica de programación. La aplicación permite gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto" asegurando que ningún participante se asigne a sí mismo.

## Funcionalidades
- **Agregar amigos:** Permite ingresar nombres en la lista de participantes.
- **Eliminar amigos:** Se pueden eliminar nombres de la lista.
- **Validaciones:** Evita nombres duplicados y nombres vacíos.
- **Sortear amigos secretos:** Asigna cada amigo a otro de la lista, garantizando que nadie se asigne a sí mismo.
- **Interfaz dinámica:** Se actualiza automáticamente al agregar o eliminar amigos y muestra los resultados del sorteo.

## Requisitos
- Un navegador web compatible con JavaScript.
- Archivo HTML con elementos adecuados para interactuar con el script.

## Instalación y Uso
1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` en un navegador web.
3. Ingresar nombres en el campo de entrada y presionar el botón "Agregar".
4. Una vez que haya al menos tres nombres, presionar el botón "Sortear" para ver los resultados.
5. Se puede eliminar cualquier nombre de la lista antes del sorteo.

## Lógica de Funcionamiento
1. Se almacenan los nombres en un array `amigos`.
2. Al hacer clic en "Agregar", se verifica que el nombre no esté vacío ni repetido antes de añadirlo.
3. La función `sortearAmigo()` mezcla la lista de amigos aleatoriamente y verifica que ningún participante se asigne a sí mismo.
4. Si la validación falla, se repite el sorteo hasta obtener una distribución válida.
5. Los resultados se muestran dinámicamente en la interfaz.

## Tecnologías Utilizadas
- **HTML**: Para la estructura de la página.
- **CSS**: Para la presentación visual.
- **JavaScript**: Para la lógica del sorteo y manipulación del DOM.

## Autor
Desarrollado por Brayan Mendoza como parte del desafío de programación de Alura.

## Despliegue en Vercel
https://oracle-alura-challenge-amigo-secreto.vercel.app/
