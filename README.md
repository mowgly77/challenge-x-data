# Dashboard Kit - Prueba Tecnica Full Stack Developer

UI sin funcionalidad backend construida con **Next.js 16**, **TypeScript**, **Tailwind CSS 4** y **Framer Motion**, replicando pixel-perfect el diseno de Figma proporcionado.

## Demo

| Desktop | Tablet | Mobile |
|---------|--------|--------|
| Sidebar expandido + header con usuario + 4 stat cards en fila + trends con grafica + tabla de archivos completa | Sidebar colapsado (solo iconos) + header con usuario + 2x2 stats + trends + tabla simplificada (File name + File size) | Sin sidebar, barra oscura con logo + campana, cards 2x2, lista compacta de archivos |

## Inicio rapido

```bash
pnpm install
pnpm dev
```

Abrir `http://localhost:3000`. El boton **Log In** navega al dashboard (`/dashboard`).

## Criterios de aceptacion

| # | Criterio | Cumplido | Detalle |
|---|----------|----------|---------|
| 1 | Pixel-perfect segun Figma | Si | Colores, tipografias, espaciados y componentes fieles al archivo Figma |
| 2 | Responsivo: Phone, Tablet, Desktop | Si | 3 layouts distintos con breakpoints `md` (768px) y `lg` (1024px) |
| 3 | Unico CSS: `globals.css` | Si | Design tokens en CSS custom properties, todo lo demas via Tailwind utilities |
| 4 | Codigo legible, SOLID, DRY, < 50 lineas por componente | Si | 1 componente por archivo, separacion en components/hooks/types/utils |
| 5 | Grafica como imagen (no libreria de charts) | Si | `chart-trends.jpg` del Figma |
| 6 | Repositorio GitHub publico | Si | Listo para push |
| 7 | Framer Motion | Si | Animaciones de entrada en login (fade-up) y dashboard (stagger) |
| 8 | Validacion de formulario login (opcional) | Si | Hook `useLoginForm` valida email y password con mensajes de error |

## Stack tecnologico

| Herramienta | Version | Uso |
|---|---|---|
| Next.js | 16 | Framework React con App Router, Server/Client Components |
| TypeScript | 5 | Tipado estatico en todo el proyecto |
| Tailwind CSS | 4 | Estilos utilitarios, design tokens en `@theme inline` |
| Framer Motion | 11 | Animaciones de entrada y transiciones |
| Lucide React | -- | Iconos SVG optimizados |
| Mulish | Google Font | Fuente del diseno Figma |

## Estructura del proyecto

```
app/
  globals.css              # Design tokens (unico archivo CSS)
  layout.tsx               # Root layout: fuente Mulish + metadata
  page.tsx                 # Login (/)
  dashboard/
    page.tsx               # Dashboard (/dashboard)
  components/
    icons/
      LogoIcon.tsx         # Logo PNG
    login/
      LoginHeader.tsx      # Logo + titulo + subtitulo
      LoginFooter.tsx      # Link "Sign up"
      LoginForm.tsx        # Formulario con validacion + animacion Framer Motion
      FormField.tsx        # Wrapper reutilizable: label + input + error
      PasswordInput.tsx    # Input password con toggle visibilidad
    dashboard/
      DashboardSidebar.tsx # Sidebar: expandido (lg) / colapsado iconos (md) / oculto (mobile)
      SidebarNavList.tsx   # Renderiza lista de NavItems
      SidebarNavItem.tsx   # Link individual de navegacion
      DashboardHeader.tsx  # Header desktop/tablet + importa MobileHeader
      MobileHeader.tsx     # Barra oscura logo + campana (solo < md)
      StatCard.tsx         # Tarjeta estadistica individual
      StatCardsGrid.tsx    # Grid 2x2 (phone/tablet) o 4 cols (desktop)
      TrendsSection.tsx    # Seccion "Today's trends" (imagen + stats)
      TrendsLegend.tsx     # Leyenda Today/Yesterday
      TrendStatRow.tsx     # Stat individual (label + valor)
      FilesTable.tsx       # 3 vistas: desktop table / tablet table / mobile list
      FilesHeader.tsx      # Titulo + botones Download all / Upload
      FileRow.tsx          # Fila desktop (6 columnas)
      FileRowTablet.tsx    # Fila tablet (File name + File size)
      FileRowCompact.tsx   # Fila mobile (compacta)
      FileIcon.tsx         # Icono circular con color segun extension
  hooks/
    useLoginForm.ts        # Logica de validacion del login
  types/
    navigation.ts          # NavItem type
    dashboard.ts           # StatCard type
    files.ts               # FileItem type
  utils/
    dashboard-data.ts      # Datos mock: stats, trends, archivos
    sidebar-data.ts        # Arrays de navegacion (MAIN_NAV, BOTTOM_NAV)
    file-icon-style.ts     # Mapa extension -> icono + color
```

## Responsividad (3 breakpoints)

### Mobile (< 768px)
- Sin sidebar
- Header oscuro (#363740) con logo y campana de notificaciones
- Stat cards en grid 2x2
- Trends: chart arriba, stats abajo
- Archivos: lista compacta (checkbox + icono + nombre + tamano)

### Tablet (768px - 1023px)
- Sidebar colapsado (w-16, solo iconos) fijo a la izquierda
- Header claro con "Overview" + search + bell + nombre + avatar
- Stat cards en grid 2x2
- Trends: chart izquierda + stats derecha (border-left)
- Archivos: tabla simplificada (File name + File size)

### Desktop (>= 1024px)
- Sidebar expandido (w-[255px]) con iconos + labels
- Header completo con todos los elementos
- Stat cards en fila de 4
- Trends: chart izquierda + stats derecha
- Archivos: tabla completa (6 columnas + menu contextual)

## Animaciones (Framer Motion)

- **Login**: formulario con `fade-in` + `slide-up` (opacity 0->1, y 16->0)
- **Dashboard**: secciones con `stagger` animation secuencial (cada seccion aparece 100ms despues de la anterior)

## Decisiones tecnicas

1. **Client vs Server Components**: solo los componentes interactivos llevan `"use client"` (LoginForm, PasswordInput, DashboardSidebar, SidebarNavItem/List, Dashboard page). El resto son Server Components.
2. **Datos separados del UI**: arrays de datos mock en `utils/`, tipos en `types/`, para facilitar el reemplazo futuro por una API real.
3. **Design tokens centralizados**: todos los colores del Figma (#363740, #3751FF, #9FA2B4, etc.) definidos como CSS custom properties y mapeados a Tailwind via `@theme inline`, garantizando consistencia y facil mantenimiento.
4. **Componentes < 50 lineas**: cada componente tiene una unica responsabilidad. Si crece, se extrae en sub-componentes (ej: LoginForm -> LoginHeader + LoginFooter).
