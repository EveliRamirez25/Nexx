Nexx – Landing Page
Descripción

Nexx Landing es una aplicación web desarrollada con React + Vite + TypeScript diseñada para funcionar como la página principal o landing page del proyecto NexxInsurance.

El proyecto incluye soporte de internacionalización (i18n) para múltiples idiomas y una estructura optimizada para desarrollo rápido usando Vite.

Tecnologías utilizadas
-Frontend
-React 19
-TypeScript
-Vite
-Internacionalización
-i18next
-react-i18next
-i18next-browser-languagedetector

UI
-React Icons
-Herramientas de desarrollo
-ESLint
-Vite
-TypeScript

Estructura del proyecto
nexx-landing
│
├── public/            # Archivos públicos
├── src/               # Código fuente
│   ├── components/    # Componentes React
│   ├── assets/        # Imágenes y recursos
│   ├── i18n/          # Configuración de idiomas
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
Instalación
Clonar el repositorio
-git clone https://github.com/tu-usuario/nexx.git
cd nexx/nexx-landing
- Instalar dependencias
npm install
- Ejecutar el proyecto
npm run dev

El proyecto se ejecutará en:

http://localhost:5173

Scripts disponibles
Comando	Descripción
npm run dev	Ejecuta el servidor de desarrollo
npm run build	Compila el proyecto para producción
npm run preview	Previsualiza la versión de producción
npm run lint	Ejecuta ESLint
Internacionalización

El proyecto utiliza i18next para gestionar múltiples idiomas.

Permite:
-detección automática del idioma del navegador
-traducciones dinámicas
-escalabilidad para más idiomas

Construcción para producción
Para generar la versión optimizada:
npm run build
Esto generará la carpeta:
dist/
que contiene la aplicación lista para despliegue.

Despliegue

Puedes desplegar el proyecto en:
Vercel
Netlify
GitHub Pages
cualquier servidor estático

Posibles mejoras
integración con backend
formularios de contacto
analytics
SEO avanzado
animaciones y mejoras UX

Autor
Proyecto desarrollado como parte del sistema NexxInsurance.
