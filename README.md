# L'Élixir de Miin

**La esencia de la belleza** - Sitio web moderno y elegante para servicios de wellness y tratamientos estéticos faciales.

## Características Principales

- **Diseño Responsive**: Perfectamente optimizado para móviles, tablets y desktop
- **Tema Elegante**: Diseño minimalista con paleta de colores sofisticada
- **Integración WhatsApp**: Mensajes personalizados para cada tratamiento
- **Tratamientos Profesionales**: Showcase completo de 8 servicios especializados
- **UI/UX Moderna**: Experiencia de usuario intuitiva y atractiva
- **Tipografía Elegante**: Fuente Playfair Display para un look profesional
- **Mobile-First**: Navegación táctil optimizada con menú hamburguesa

## Tratamientos Ofrecidos

- **Microdermoabrasión** - Renovación profunda de la piel
- **Skin Scrubber** - Limpieza ultrasónica de poros
- **Alta Frecuencia** - Oxigenación y efecto bactericida
- **Máscara LED** - Terapia de luz personalizada
- **Ultrasonido Facial** - Estimulación de colágeno
- **Dermapen** - Mejora de cicatrices e imperfecciones
- **Hilos Absorbibles de Colágeno** - Reafirmación natural
- **Hyaluron Pen** - Hidratación sin agujas

## Stack Tecnológico

- **[Astro](https://astro.build/)** - Framework web moderno y rápido
- **[TailwindCSS](https://tailwindcss.com/)** - Styling utility-first
- **[Bun](https://bun.sh/)** - Runtime y package manager ultra-rápido
- **Vanilla JavaScript** - Interactividad nativa sin frameworks pesados
- **Mobile-First Design** - Responsive design optimizado

## Inicio Rápido

### Prerrequisitos

- [Bun](https://bun.sh/) (recomendado) o Node.js 18+
- Git

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/L-Elixir-de-Miin.git
   cd L-Elixir-de-Miin
   ```

2. **Instala dependencias**
   ```bash
   bun install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   bun dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:4321
   ```

## Estructura del Proyecto

```
L-Elixir-de-Miin/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación principal con menú móvil
│   │   ├── Hero.astro       # Sección principal de bienvenida
│   │   ├── Philosophy.astro # Filosofía de la marca
│   │   ├── Treatments.astro # Showcase de tratamientos
│   │   ├── Schedule.astro   # Calendario y citas
│   │   ├── Calendar.astro   # Componente de calendario
│   │   └── Footer.astro     # Pie de página
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Estilos globales
├── public/                  # Archivos estáticos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind
└── package.json            # Dependencias y scripts
```

## Paleta de Colores

```css
/* Colores principales */
--primary: #B18D7A;      /* Beige elegante */
--secondary: #8A6D5F;    /* Marrón suave */

/* Colores de fondo */
--dark: #0A0A0B;         /* Negro profundo */
--dark-lighter: #121214; /* Gris oscuro */
--dark-border: #2A2A2A;  /* Borde sutil */

/* Colores de texto */
--light: #E8E8E8;        /* Blanco suave */
--light-muted: #A0A0A0;  /* Gris claro */
```

## Funcionalidades Móviles

- **Navegación hamburguesa** con animaciones suaves
- **Botones táctiles** optimizados para dedos
- **Grid responsivo** que se adapta automáticamente
- **Tipografía escalable** por breakpoints
- **WhatsApp integrado** con mensajes personalizados

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `bun dev` | Servidor de desarrollo en `localhost:4321` |
| `bun build` | Construye el sitio para producción |
| `bun preview` | Previsualiza la build localmente |
| `bun astro check` | Verifica errores de TypeScript |

## Integración WhatsApp

Cada tratamiento tiene un mensaje personalizado que se envía directamente al WhatsApp del negocio:
- **Número**: +52 222 930 0680
- **Mensajes específicos** para cada servicio
- **Enlaces directos** que abren la app automáticamente

## Despliegue

El proyecto está optimizado para desplegarse en:
- **Vercel** (recomendado para Astro)
- **Netlify**
- **GitHub Pages**
- **Cualquier hosting estático**

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

**L'Élixir de Miin**
- Sitio Web: [En construcción]

---

*Desarrollado con amor usando Astro y TailwindCSS*

```sh
bun create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
