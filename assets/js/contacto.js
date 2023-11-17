headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
},


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

//Uso de API SheetDBio

//  const API_URL = "https://sheetdb.io/api/v1/rg82wc6imgnvf";

//  export { API_URL };

//  function enviarFormulario() {
    
//     var formData = {
//         Nombre: document.getElementById("nombre").value,
//         Apellido: document.getElementById("apellido").value,
//         Email: document.getElementById("email").value,
//         Ciudad: document.getElementById("ciudad").value,
//         Teléfono: document.getElementById("telefono").value,
//         Consulta: document.getElementById("consulta").value,
//     }
//     const API_URL = 'https://sheetdb.io/api/v1/rg82wc6imgnvf';
   
//     fetch(API_URL, {
    
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//            data: formData,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Elemento agregado:', data);
//     })
//     .catch(error => console.error('Error al agregar elemento:', error));
//   }

