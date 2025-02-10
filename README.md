## **Tabla de Contenidos** <!-- omit in toc -->

- [**Instalación**](#instalación)
- [**Configurar ESLint y Prettier**](#configurar-eslint-y-prettier)
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
