// Contacto

//Validacion de formulario

 const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
        })

function enviarFormulario() {
    
   var formData = {
       Nombre: document.getElementById("Nombre").value,
       Apellido: document.getElementById("Apellido").value,
       Email: document.getElementById("Email").value,
       Ciudad: document.getElementById("Ciudad").value,
       Teléfono: document.getElementById("Telefono").value,
       Consulta: document.getElementById("Consulta").value,
   }
   const sheetDBURL = 'http://sheetdb.io/api/v1/9p6nz0f1m0o2s';
   
   fetch(sheetDBURL, {
    
    method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
          data: formData,
       }),
   })
   .then(response => response.json())
   .then(data => {
       console.log('Elemento agregado:', data);
   })
   .catch(error => console.error('Error al agregar elemento:', error));
 }