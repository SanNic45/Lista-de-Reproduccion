// Simulando autenticación con credenciales quemadas
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener valores del formulario
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Verificar credenciales
    if (email === 'naty.valverde@hotmail.com' && password === 'admin') {
      // Autenticación exitosa, generar token SSO
      var token = generateToken();
      alert('Login successful! SSO token: ' + token);
      // Redirigir al usuario a una página principal
      window.location.href = 'reproductor.html'; // Cambia 'pagina_principal.html' por la URL de tu página principal
    } else {
      // Credenciales incorrectas
      alert('Invalid email or password. Please try again.');
    }
  });
  
  // Función para generar un token SSO (solo para fines de demostración)
  function generateToken() {
    return 'random_token_' + Math.random().toString(36).substring(7);
  }
  