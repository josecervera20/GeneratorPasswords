let cantidad = document.getElementById("cantidad");
let botonGenerar = document.getElementById("generar");
let botonLimpiar = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");
let toast = document.getElementById("toast");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Función para limpiar la caja de texto
function limpiarCaja() {
  contrasena.value = "";
  toast.classList.remove("show"); // Ocultar el toast si existe
}

// Función para mostrar el toast
function mostrarToast(mensaje, clase) {
  toast.className = "toast " + clase;
  toast.textContent = mensaje;
  toast.classList.add("show");

  // Ocultar el toast después de 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Función para validar la fortaleza de la contraseña
function validarPassword(password) {
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

  if (
    tieneMayuscula &&
    tieneMinuscula &&
    tieneNumero &&
    tieneCaracterEspecial
  ) {
    mostrarToast("Contraseña fuerte.", "toast-fuerte");
  } else {
    mostrarToast(
      "Contraseña débil. Debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial.",
      "toast-debil"
    );
  }
}

// Función para generar la contraseña
function generar() {
  let numeroDigitado = parseInt(cantidad.value);

  if (numeroDigitado < 8) {
    mostrarToast(
      "La cantidad de caracteres debe ser mayor que 8.",
      "toast-debil"
    );
    return; // Salir si la cantidad es menor a 8
  }

  let password = "";

  for (let i = 0; i < numeroDigitado; i++) {
    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    password += caracterAleatorio;
  }

  contrasena.value = password;

  // Validar la fortaleza de la contraseña generada
  validarPassword(password);

  // Habilitar el botón de limpiar una vez que se genere la contraseña
  botonLimpiar.removeAttribute("disabled");
}

// Función para limpiar la contraseña y deshabilitar el botón
function limpiarPassword() {
  limpiarCaja();
  botonLimpiar.setAttribute("disabled", "true");
}
