# 💼 Portafolio de Proyectos | Michelle Marcos Pacheco Tacay

¡Bienvenido al repositorio central de mi portafolio! Aquí se encuentra la aplicación web principal (**portfolio-app**) y un ecosistema de proyectos de ingeniería de software de alto nivel. Cada proyecto ha sido diseñado y construido aplicando las mejores prácticas de desarrollo web moderno, arquitectura robusta, optimización de rendimiento y experiencias de usuario premium.

A continuación, se presenta un resumen detallado de cada uno de los proyectos que integran este portafolio, destacando sus funcionalidades clave, arquitecturas e innovaciones técnicas.

---

## 📊 Vista General del Ecosistema

| Proyecto | Categoría / Propósito | Stack Tecnológico Destacado | Características Únicas |
| :--- | :--- | :--- | :--- |
| [**🛠️ ScreenForge**](../screenforge/README.md) | Suite 3D de Mockups y Animación de Dispositivos | Next.js 15, Framer Motion, html2canvas, FFmpeg.wasm | Exportación de video MP4 frame-a-frame local, cámara 3D virtual, línea de tiempo con tracks. |
| [**⚡ RenderGPT**](../render-gpt/README.md) | Herramientas de Conversión & Render Local | Next.js 16, React 19, Tailwind CSS v4, jsPDF, Mermaid | 7 utilidades 100% client-side, exportación vectorial, zero-data-transmission. |
| [**🦙 Khipu Forms**](../khipu-forms/README.md) | SaaS de Formularios y Quizzes Gamificados | Next.js 16, React 19, Tailwind v4, Supabase SSR, Zustand | Gamificación estilo Duolingo, mascota "Llama Khipu" animada, AI Insights para respuestas. |
| [**🛍️ QhatuPE**](../qhatupe/README.md) | E-commerce Conversacional (TikTok / WhatsApp) | **Frontend:** Next.js 16, Radix, Turnstile <br>**Backend:** NestJS, Prisma, PostgreSQL, Redis, WebSockets | Checkout directo a WhatsApp, cupones en vivo con WebSockets, pipeline HEIC/Sharp a S3. |
| [**📐 Khipu Craft**](../khipu-craft/README.md) | Editor CAD 2D de Mobiliario y Carpintería | Next.js 14, HTML5 Canvas API, Zustand, Tailwind | Cotas milimétricas en tiempo real, estimación de planchas y generación automática de listas de corte. |

---

## 📁 Detalle de los Proyectos

### 1. 🛠️ [ScreenForge](../screenforge/README.md) — *3D Mockup & Cinematic Device Animation Studio*
ScreenForge es una suite premium de diseño de producto y animación digital en 3D que consta de dos herramientas independientes e integradas:

*   **Mockup Studio (Composiciones Estáticas Premium):**
    *   **Controles de Cámara Virtual (Estilo Shots.so):** Permite rotar los dispositivos en perspectiva 3D (Tilt en ejes X e Y hasta ±15°), aplicar zoom milimétrico mediante un *Precision Mode*, y configurar sombras de profundidad interactiva.
    *   **Layouts Avanzados:** 8 presets (Centered, Hero, Corner, Floating, Showcase, Split, etc.) con soporte para pantallas individuales o dobles (*Dual Screen Layouts*) con Z-index dinámico.
    *   **Personalización:** Elección de hardware (iPhone 17 Pro, iPhone 16 Pro, MacBook Pro, Browser genérico), 8 colores premium de chasis (Space Black, Titanium, Gold, etc.) y un catálogo extenso de fondos con gradientes puros de CSS.
*   **Device Animation (Cinematic Studio - Creación de Video):**
    *   **Línea de Tiempo Multiescena:** Timeline horizontal interactivo que permite añadir múltiples escenas, ajustar su duración arrastrando clips y desplazarse a través de un *playhead* interactivo.
    *   **Capas de Texto Cinematográficas:** Añade bloques de texto con pistas independientes en la línea de tiempo. Dispone de animaciones avanzadas de entrada como *Fade In*, *Bounce*, *Slide Up* y *Typewriter* sincronizadas frame a frame.
    *   **Física de Cámara y Animación:** Configuración independiente de cámara por escena con eases dinámicos como *Spring (física de resorte)*, *Bounce*, *Ease In Out*, etc. Modos especiales como **Scroll Mode** para recorrer capturas web verticales muy largas adaptadas a la duración del clip.
    *   **Pipeline de Exportación Pixel-Perfect:** En lugar de exportar con latencia de red, ScreenForge procesa las animaciones frame-a-frame de manera local. Utiliza **html2canvas** optimizado (evitando cuellos de botella de CORS o SVG) para capturar frames PNG en resoluciones de hasta 4K, los cuales procesa e inyecta localmente en un compilador asíncrono de **FFmpeg.wasm** con preset `ultrafast` para generar un video `.mp4` de alta fidelidad en segundos.
    *   **Persistencia:** Motor local en LocalStorage que convierte las capturas del usuario a Base64 para recuperar el estado exacto al recargar el navegador.

---

### 2. ⚡ [RenderGPT (RenderStudio)](../render-gpt/README.md) — *Client-Side AI Document and Asset Generator*
Un potente ecosistema de utilidades visuales de renderizado y conversión **100% local (client-side)** que permite transformar salidas de Inteligencia Artificial (código, JSON, markdown, tablas o diagramas) en documentos de producción impecables:

*   **7 Herramientas Integradas:**
    1.  **Markdown to PDF:** Convierte texto enriquecido a PDFs con temas estilizados (Notion, GitHub, Modern Dark) y saltos de página inteligentes.
    2.  **Table Beautifier:** Convierte markdown/CSV en tablas interactivas con filtros, ordenamiento dinámico y exportación a PDF o imagen.
    3.  **Code Screenshot:** Genera capturas estéticas de código listas para compartir, con fondos de gradientes modernos, sombras fluidas y marcos de ventana estilo macOS.
    4.  **Mermaid Diagram Renderer:** Editor y renderizador en tiempo real de diagramas Mermaid que exporta a SVG vectorial o PNG de alta resolución.
    5.  **HTML to PDF:** Editor en vivo para transformar fragmentos HTML + CSS estructurados en PDFs vectoriales perfectos.
    6.  **JSON Visualizer:** Validador sintáctico y explorador de árboles JSON expandibles y interactivos con filtrado de nodos y búsqueda en tiempo real.
    7.  **AI Beautifier:** Limpiador estético que estructura las respuestas crudas de LLMs (como Claude o GPT), eliminando imperfecciones y formateando de manera atractiva.
*   **Seguridad y Privacidad Absoluta:**
    *   Al operar enteramente en el cliente (**serverless y offline**), garantiza que no haya transmisión de datos sensibles. Es gratuito e ilimitado al no consumir APIs de conversión en la nube.
*   **Stack Premium:** Next.js 16 (React 19), Tailwind CSS v4, jsPDF, html2canvas, Mermaid, React Markdown y Framer Motion para transiciones suaves de interfaz.

---

### 3. 🦙 [Khipu Forms](../khipu-forms/README.md) — *Smart SaaS Form Engine & Gamified Quiz Platform*
Un innovador motor SaaS diseñado para revolucionar la recolección de datos tradicionales convirtiendo encuestas y evaluaciones en experiencias interactivas y gamificadas de alto rendimiento:

*   **Motor de Gamificación Estilo Duolingo:**
    *   **Mascota Dinámica (Llama Khipu):** Una mascota interactiva que reacciona con animaciones fluidas en tiempo real según el éxito del usuario (feliz al acertar, triste al fallar o pedagógica en modo tutor).
    *   **Sistema de Vidas y Rachas:** Límite de vidas configurable (de 1 a 5). Las respuestas erróneas restan vidas, mientras que las correctas activan animaciones de rachas consecutivas.
    *   **Fundamentación Pedagógica:** Visualización de explicaciones lógicas de inmediato tras contestar para mejorar el aprendizaje activo.
*   **Tres Modos de Presentación Dinámica:**
    1.  **Clásico (Classic):** Formato vertical tradicional para encuestas corporativas.
    2.  **Secuencial (Cards):** Una pregunta a la vez en formato de tarjeta centralizada que incrementa la conversión en móviles y evita fatiga cognitiva.
    3.  **Interactivo Pro (Duolingo Style):** Gamificación total con temporizadores, vidas y barra de progreso animada.
*   **Constructor de Alto Nivel:** Builder visual estructurado mediante acordeones de configuración modular (Preguntas, Estilos y Gamificación, Seguridad y Consentimiento, Temporizadores por pregunta y Pistas/Hints desbloqueables).
*   **Dashboard Analítico y AI Insights:** Panel que consolida las respuestas, exporta a CSV y utiliza IA local/API para generar resúmenes rápidos de sentimientos y tendencias de respuestas.
*   **Stack Moderno:** Next.js 16 (React 19), Tailwind CSS v4, Supabase (Autenticación y Persistencia SSR), Zustand y Zod.

---

### 4. 🛍️ [QhatuPE](../qhatupe/README.md) — *Conversational E-commerce Suite*
Una plataforma completa de comercio electrónico optimizada con un enfoque *mobile-first* radical, diseñada para permitir a creadores de contenido y emprendedores de redes sociales (TikTok Lives, Instagram, WhatsApp) profesionalizar sus ventas de forma ágil:

*   **Frontend (Next.js 16 & React 19):**
    *   **Catálogo Mobile-First Ultra-rápido:** Optimizado para los navegadores integrados (*in-app browsers*) de las apps móviles. Cuenta con filtros y búsquedas reactivas en tiempo real.
    *   **Variantes Multi-nivel:** Selector altamente interactivo para variantes de productos (tallas, materiales, colores) con actualización dinámica de stock.
    *   **Checkout Conversacional hacia WhatsApp:** Automatiza la compra agrupando el carrito, variantes y cupones dinámicos aplicados en un mensaje estructurado y legible, redirigiendo al cliente directamente al WhatsApp del vendedor en un solo clic.
    *   **Cupones e Inmediatez (FOMO):** Relojes de cuenta regresiva en vivo para incentivar compras de impulso en transmisiones en directo.
    *   **Seguridad:** Integración de **Cloudflare Turnstile** para bloquear bots y spam en formularios de acceso sin la fricción del reCAPTCHA clásico.
*   **Backend API (NestJS Enterprise Architecture):**
    *   **Notificaciones WebSockets en Tiempo Real:** Implementado con Socket.io para alertar a los vendedores de manera instantánea cuando ingresa un nuevo pedido o se activa un cupón en vivo.
    *   **Pipeline de Procesamiento de Imágenes:** Conversión automática de imágenes de iPhone (`HEIC` a `JPEG/WebP`) en el backend, redimensionado asíncrono optimizado con **Sharp** y subida a la nube a través de **AWS S3** usando URLs firmadas.
    *   **Caché Agresiva y Rate Limiting:** Integración con **Redis** para caching de lecturas de catálogos y protección de endpoints críticos para mantener tiempos de respuesta de la API menores a 10ms.
    *   **Arquitectura PostgreSQL y Prisma ORM:** Transacciones ACID, indexación de bases de datos altamente optimizada en columnas críticas, y autenticación avanzada multicanal (JWT, Estrategia Local con Bcrypt y Google OAuth).
    *   **Notificaciones y Emails:** Integración con AWS SES y Resend para correos transaccionales rápidos.

---

### 5. 📐 [Khipu Craft](../khipu-craft/README.md) — *2D CAD Editor for Furniture & Woodworking*
Khipu Craft es una aplicación web CAD de precisión milimétrica, diseñada para la planificación y optimización física de proyectos de carpintería, melamina, herrería y diseño industrial:

*   **CAD 2D en HTML5 Canvas:** Motor de renderizado altamente eficiente implementado con la API Canvas nativa y `requestAnimationFrame` que asegura un arrastre y redimensionado de piezas fluido a 60 FPS.
*   **Precisión Industrial:**
    *   Trabajo exclusivo en milímetros con grilla magnética ajustable y líneas inteligentes de alineamiento magnético (Snap-to-Grid).
    *   Cotas dinámicas de acotamiento en color verde brillante sobre el lienzo que muestran el tamaño exterior instantáneo de los paneles.
*   **Lista de Corte Automatizada:** Sincronización en tiempo vivo que compila dimensiones, nombres de paneles y materiales. Calcula el área total en metros cuadrados ($m^2$) y estima el número de planchas de formato estándar ($2.44 \times 1.22\text{ m}$) necesarias, exportando todo a CSV compatible con optimizadores como CutList Plus u OptiCut.
*   **Tres Vistas Ortogonales:** Diseña proyectos de mobiliario completos alternando entre la vista Frontal (diseño y puertas), Vista Lateral (cajones internos, zócalos y fondos) y Vista Superior/Planta.
*   **Historial Robusto (Undo/Redo):** Historial con capacidad de deshacer/rehacer hasta 50 acciones.
*   **Biblioteca de Plantillas:** Incluye muebles paramétricos pre-diseñados (estanterías, cajoneras, closets y módulos completos de cocina en las 3 vistas).
*   **Tecnologías:** Next.js 14, Canvas API, Zustand con persistencia y Tailwind CSS.

---

## 🛠️ Matriz de Habilidades Técnicas Demostradas

A través del desarrollo de este ecosistema de proyectos, se demuestran competencias avanzadas de ingeniería en múltiples disciplinas:

| Área de Ingeniería | Tecnologías y Conceptos Clave Implementados |
| :--- | :--- |
| **Frontend Avanzado** | React 19 (Server/Client Components), Next.js 16/15/14, Tailwind CSS v4 (Compilación fluida), Radix UI (Accesibilidad WAI-ARIA), Framer Motion (Micro-animaciones complejas). |
| **Gráficos & 3D Web** | HTML5 Canvas API (Render a 60 FPS, matrices de transformación, snap milimétrico), CSS 3D Transforms (Perspectivas realistas, rotaciones vectoriales de hardware). |
| **Backend & APIs** | NestJS (Inyección de dependencias modular, Guards, Pipes), TypeScript estricto, REST APIs documentadas bajo OpenAPI / Swagger, Programación de Cron Jobs. |
| **Tiempo Real & Conectividad** | WebSockets con Socket.io, Canales de transmisión asíncronos y bidireccionales, sincronización de estados reactivos en múltiples clientes. |
| **Infraestructura & Cloud** | AWS S3 (Presigned URLs), AWS SES / Resend (Notificaciones transaccionales), Base de datos PostgreSQL, Caching de alta velocidad con Redis. |
| **Capa de Datos** | Prisma ORM, Migraciones de Esquemas Relacionales, Indexación selectiva para optimización de queries, Seeders de datos automáticos. |
| **Media & WebAssembly** | **FFmpeg.wasm** (Compilación de video del lado del cliente), **Sharp** (Pipeline de optimización de imágenes en servidor), decodificación/conversión de formatos iOS (HEIC). |
| **Rendimiento & Seguridad** | Cloudflare Turnstile, Caching de Redis, Debouncing de inputs, Code Splitting / Lazy Loading de dependencias pesadas, Pruebas de carga con k6. |

---

## 🚀 Cómo Iniciar portfolio-app

Para ejecutar la aplicación de portafolio principal de manera local:

1.  **Entrar a la carpeta del proyecto:**
    ```bash
    cd portfolio-app
    ```

2.  **Instalar dependencias:**
    Se recomienda utilizar `pnpm` para un rendimiento de instalación óptimo:
    ```bash
    pnpm install
    # o bien: npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    # o bien: npm run dev
    ```

4.  **Ver en el navegador:**
    Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación web interactiva en vivo.

---

*Michelle Marcos Pacheco Tacay — Ingeniero de Software & Desarrollador Full-Stack Premium*
