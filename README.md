# Arte Pilar — Plataforma Web Oficial & Portafolio Curatorial

Plataforma web diseñada a medida para el sector del **arte y las artes plásticas**, concebida como una **extensión digital de obra, estudio y galería**, tomando como referencia estética y funcional la web de [Elliott Túpac](https://elliottupac.com/).

---

## 🏛️ Cobertura de los 4 Objetivos Estratégicos (Hoja de Requerimientos)

### 1. Portafolio Digital de Alta Calidad
- **Impacto visual:** Galería con imágenes en alta resolución, filtros por categorías (*Pintura & Óleo*, *Gran Formato / Mural*, *Serigrafía & Gráfica*, *Técnica Mixta*) y **fichas técnicas detalladas** en modal curatorial (título, año, técnica, dimensiones, materiales, soporte y estado de disponibilidad).
- **Narrativa del artista:** Sección dedicada a la **Declaración del Artista (*Artist Statement*)**, trayectoria de más de 14 años, filosofía plástica, retrato y fotografía documental del estudio en Barranco.

### 2. Venta y Monetización de Obras
- **Venta directa & cotización privada:**
  - Venta de **reproducciones en serie (Prints Giclée y serigrafías seriadas)** numeradas y firmadas a mano con certificado de autenticidad.
  - Formulario y botón de **cotización confidencial para coleccionistas**, galerías y arquitectos (con enlace directo a WhatsApp del estudio y almacenamiento seguro).
- **Diversificación de ingresos:**
  - Módulo interactivo de **Talleres y Workshops presenciales** con contador de cupos libres en tiempo real, calendario de fechas, temario detallado y pre-reserva de plaza.
  - Programa de **Mentorías 1-a-1** para dirección de obra y carpetas de postulación.

### 3. Captación de Coleccionistas y Audiencia (Newsletter / Club VIP)
- **Base de datos propia:** Módulo del **Club Privado de Coleccionistas** para captar correos calificados con segmentación de interés (originales, prints o talleres).
- **Independencia de redes sociales:** Canal directo que ofrece preventa exclusiva de obras con 48h de anticipación, invitaciones a aperturas de exposiciones y visitas privadas a taller (*Open Studio Days*).

### 4. Generación de Credibilidad y Difusión de Agenda
- **Currículum Artístico (CV):**
  - Registro de **Exposiciones Individuales** y **Exposiciones Colectivas** en museos y galerías de Lima, Madrid, Buenos Aires, etc.
  - Registro de **Premios, residencias artísticas y becas**.
  - Citas de **crítica de arte y prensa especializada** (*El Comercio*, *Artishock*, *Cosas Arte*).
  - Botón para descarga directa del Dossier / CV en PDF.
- **Calendario de Eventos:** Agenda pública de ferias internacionales (ej. ArtBo), exposiciones vigentes y jornadas de puertas abiertas al estudio con solicitud de cita privada.

---

## 🚀 Cómo ejecutar el proyecto en tu máquina

### Navegación accesible de obras

Los botones de imagen y título de cada obra abren su ficha con teclado o puntero. En la ficha, el visor permite ampliar y desplazar la imagen; el control de escala en pared mantiene la simulación de tamaño de la obra. Los diálogos de obra, consulta y taller mantienen el foco dentro de la ventana y lo devuelven al elemento que la abrió al cerrarse.

1. **Instalar dependencias** (ya están instaladas en este entorno):
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre el enlace que aparecerá en consola (generalmente `http://localhost:5173/`).

3. **Generar versión de producción (dist):**
   ```bash
   npm run build
   ```

---

## 📁 Estructura del Código

```text
Arte_Pilar/
├── index.html                    # Plantilla base con tipografías Syne & Playfair Display
├── package.json                  # Dependencias React 19, Vite, Tailwind CSS v4, Lucide
├── vite.config.js                # Configuración de Vite con Tailwind v4
└── src/
    ├── main.jsx                  # Punto de entrada de la aplicación
    ├── App.jsx                   # Integración principal de secciones y modales
    ├── index.css                 # Estilos globales y paleta tipográfica
    ├── data/
    │   └── content.js            # Base de datos de obras, fichas técnicas, workshops, bio y CV
    └── components/
        ├── Navbar.jsx            # Barra de navegación adaptable y acciones rápidas
        ├── Hero.jsx              # Cabecera de alto impacto visual y tipográfico
        ├── PortfolioSection.jsx  # Galería curatorial con fichas técnicas completas
        ├── ArtistStatement.jsx   # Declaración del artista, estudio y trayectoria
        ├── StoreMonetization.jsx # Tienda de prints, cotizaciones y reserva de workshops
        ├── CollectorNewsletter.jsx # Formulario de captación para el Club de Coleccionistas
        ├── CredibilityAgenda.jsx # CV por categorías y calendario de eventos
        ├── ArtworkDetailModal.jsx # Visor de obra en alta resolución y ficha técnica
        ├── InquiryModal.jsx      # Modal de contacto confidencial para coleccionistas
        ├── WorkshopModal.jsx     # Modal de inscripción a talleres y mentorías
        └── Footer.jsx            # Pie de página y enlaces institucionales
```
