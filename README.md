# 🔐 Generador de Contraseñas

## ✨ Descripción del Proyecto

Crea contraseñas robustas y personalizadas en segundos con este **Generador de Contraseñas**. Esta aplicación web te permite generar claves alfanuméricas con caracteres especiales, asegurando que tus nuevas contraseñas cumplan con altos estándares de seguridad. Es ideal para proteger tus cuentas en línea, ofrece **validación de fortaleza en tiempo real**, y es extremadamente fácil de usar.

---

## 🚀 Características Principales

- **Generación Personalizada**: Define la longitud de tu contraseña, con un **mínimo de 8 caracteres** para asegurar una buena seguridad.
- **Contraseñas Robustas**: Genera combinaciones complejas que incluyen letras mayúsculas, minúsculas, números y caracteres especiales.
- **Validación de Fortaleza**: Obtén feedback instantáneo si tu contraseña generada es "fuerte" o "débil", con sugerencias para mejorarla.
- **Interfaz Clara**: Una experiencia de usuario limpia y directa, que te permite generar y copiar contraseñas con facilidad.
- **Botón de Limpieza**: Borra rápidamente la contraseña generada y el campo de entrada.
- **Diseño Responsivo**: La aplicación se adapta fluidamente a cualquier tamaño de pantalla, desde dispositivos móviles hasta computadoras de escritorio.

---

## 💻 Tecnologías Utilizadas

Este proyecto está construido con las tecnologías fundamentales del desarrollo web:

- **HTML**: Define la estructura y el contenido de la interfaz del generador.
- **CSS**: Proporciona un diseño atractivo y moderno, incluyendo efectos visuales y responsividad.
- **JavaScript**: Contiene toda la lógica para la generación de contraseñas, la validación de fortaleza y la interactividad de la interfaz.

---

## 📦 Instalación y Ejecución Local

Para poner en marcha el generador de contraseñas en tu máquina, sigue estos sencillos pasos:

1.  **Clona el repositorio:** Abre tu terminal o línea de comandos y ejecuta:
    ```bash
    git clone https://github.com/josecervera20/GeneratorPasswords.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd GeneratorPasswords
    ```
3.  **Abre la aplicación en tu navegador:** Simplemente abre el archivo `index.html` directamente desde el explorador de archivos de tu sistema operativo. También puedes usar comandos de terminal:
    ```bash
    open index.html   # Para usuarios de macOS
    start index.html  # Para usuarios de Windows
    xdg-open index.html # Para usuarios de Linux
    ```

---

## 🚀 Cómo Usar el Generador

Usar esta aplicación es muy intuitivo:

1.  **Introduce la Cantidad**: En el campo "Cantidad", ingresa el número de caracteres que deseas para tu contraseña (mínimo 8).
2.  **Genera la Contraseña**: Haz clic en el botón **"Generar"**. La contraseña aparecerá en el campo de texto inferior.
3.  **Visualiza la Fortaleza**: Un mensaje emergente (toast) te indicará si la contraseña generada es "fuerte" o "débil", ofreciendo feedback útil.
4.  **Limpia el Campo**: Si deseas generar una nueva contraseña o borrar la actual, haz clic en el botón **"Limpiar"**.

---

## 📂 Estructura del Proyecto

El proyecto está organizado de manera clara para facilitar la comprensión y el mantenimiento:

```
GeneratorPasswords/
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos y diseño responsivo de la aplicación
│   └── img/
│       ├── bloquear.png    # Icono del favicon
│       ├── candado.png     # Imagen de fondo del cuerpo
│       └── Ruido.png       # Textura o ruido para el contenedor principal
├── index.html              # Estructura principal de la interfaz de usuario
└── main.js                 # Lógica de JavaScript para el generador de contraseñas
```

---

## 🤝 Contribuciones

¡Tu ayuda es muy valorada\! Si tienes ideas para mejorar este generador, encuentras algún error o quieres añadir nuevas funcionalidades, ¡no dudes en contribuir\!

1.  **Haz un Fork** del repositorio a tu cuenta de GitHub.
2.  **Crea una Rama**: Clona tu fork localmente y crea una nueva rama para tus cambios:
    ```bash
    git checkout -b feature/tu-mejora-o-nombre-de-la-funcionalidad
    ```
3.  **Realiza tus Cambios**: Implementa tus mejoras o correcciones. Asegúrate de probar bien tus cambios.
4.  **Haz Commit**: Guarda tus cambios con un mensaje de commit claro y descriptivo (siguiendo la convención `feat:` para nuevas características o `fix:` para correcciones de errores):
    ```bash
    git commit -m 'feat: Añadir X funcionalidad'
    # o 'fix: Corregir Y error en la lógica'
    ```
5.  **Sube tus Cambios**: Empuja tu rama a tu repositorio bifurcado en GitHub:
    ```bash
    git push origin feature/tu-mejora-o-nombre-de-la-funcionalidad
    ```
6.  **Abre un Pull Request (PR)**: Finalmente, ve a GitHub y crea un Pull Request hacia el repositorio original. Describe detalladamente los cambios que realizaste y por qué son beneficiosos.

---

## 📄 Licencia

Este proyecto es de código abierto y se publica bajo la [Licencia MIT](LICENSE). Siéntete libre de usar, modificar y distribuir este código para tus propios proyectos.
