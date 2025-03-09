## **Tabla de Contenidos** <!-- omit in toc -->

- [**Instalación**](#instalación)
- [**Configurar ESLint y Prettier**](#configurar-eslint-y-prettier)
- [**Configurar Firebase para Despliegues**](#configurar-firebase-para-despliegues)
- [**Estructura del Proyecto**](#estructura-del-proyecto)

## **Instalación**

1. **Configurar dependencias**

   ```bash
   git clone https://github.com/Aristides-19/unimet-avila.git
   cd unimet-avila
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   Los errores se muestran en la consola donde se inicia el servidor o en la del navegador.
   ```bash
   npm run dev # http://localhost:5173
   ```

## **Configurar ESLint y Prettier**

1. **Instala las extensiones de VS Code:**

   - **ESLint**
   - **Prettier**

2. **Configura VS Code:**
   Abre el archivo de configuración de VS Code `settings.json` y pega esto:

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "eslint.enable": true,
     "eslint.run": "onSave",
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ],
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

## **Configurar Firebase para Despliegues**

1. **Instala Firebase Globalmente**

   ```bash
   npm install -g firebase-tools
   ```

2. **Inicia sesión en Firebase:**
   Este comando abre una ventana en el navegador para iniciar sesión en Google,
   hay que iniciar sesión con la cuenta UNIMET que está agregada en el proyecto de Firebase.

   ```bash
   firebase login
   ```

3. **Desplegar el Proyecto:**
   Con la terminal abierta en la ruta del proyecto, se construye el proyecto, y la carpeta de salida queda en
   `/dist`. Luego, esa carpeta se despliega automáticamente con el comando de Firebase.

   El estado del despliegue se puede ver en la consola de Firebase.
   **Nota:** no desplegar si no es una versión sin errores.

   ```bash
   npm run build
   firebase deploy
   ```

---

## **Estructura del Proyecto**

```
unimet-avila/
├── public/               # Archivos estáticos
│   └── logo.svg
├── src/
│   ├── assets/           # Recursos como imágenes, fuentes, íconos
│   │   └── footerLogo.svg
│   ├── components/       # Componentes reutilizables de React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/            # Páginas principales de la aplicación manejadas por App.jsx
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── services/         # Servicios/API para interactuar con Firestore
│   │   └── firestoreService.js
│   ├── hooks/            # Hooks personalizados para los componentes
│   │   └── useFirestore.js
│   ├── context/          # Debería manejarse la autenticación con Firebase como un contexto
│   │   └── AuthContext.js
│   ├── App.jsx           # Contenedor principal, aquí se maneja la navegación entre pages
│   ├── main.jsx          # Punto de entrada que importa y renderiza App.jsx en el div-root
│   ├── firebase.js       # Configuración de Firebase
│   └── styles/           # Estilos globales o componentizados
│       └── global.css
├── .prettierrc           # Reglas de Prettier
├── package.json          # Dependencias y scripts (npm run...)
├── index.html        # Establece el div-root e invoca main.jsx
└── ...
```
