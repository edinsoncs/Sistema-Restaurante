<p align="center">
  <img src="https://img.shields.io/badge/status-en_desarrollo-orange?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/versión-1.0.0_beta-blue?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/licencia-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

<h1 align="center">🍽️ Sistema Restaurante CMS</h1>

<p align="center">
  <strong>Plataforma de gestión integral para restaurantes y cafeterías</strong><br />
  <em>Potenciado por las tecnologías más modernas del ecosistema JavaScript</em>
</p>

<p align="center">
  <a href="#características-principales">Características</a> •
  <a href="#arquitectura-del-sistema">Arquitectura</a> •
  <a href="#roadmap-desarrollo">Roadmap</a> •
  <a href="#instalación-rápida">Instalación</a> •
  <a href="#contribución-diaria">Contribuir</a>
</p>

---

## 📋 Tabla de Contenidos

- [Visión del Proyecto](#visión-del-proyecto)
- [Características Principales](#características-principales)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Instalación Rápida](#instalación-rápida)
- [Roadmap de Desarrollo](#roadmap-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos Disponibles](#comandos-disponibles)
- [Convenciones de Desarrollo](#convenciones-desarrollo)
- [Contribución Diaria](#contribución-diaria)
- [Estado Actual](#estado-actual)

---

## 🎯 Visión del Proyecto

**Sistema Restaurante CMS** transforma la gestión de restaurantes tradicionales en una experiencia digital moderna. Diseñado para propietarios y gerentes que necesitan control total sobre su negocio desde cualquier dispositivo.

### ¿Por qué este sistema?

- **Sin vendor lock-in**: Compatible con Supabase y Firebase
- **Offline-first**: Funciona incluso sin conexión a internet
- **Multi-idioma**: 6 idiomas listos para producción (ES, EN, FR, ZH, RU, PT)
- **Escalable**: Arquitectura modular que crece con tu negocio
- **Tecnología moderna**: Next.js 15, React 19, TypeScript 5.7, Tailwind CSS 3.4
- **Seguridad enterprise**: Autenticación, roles y permisos granulares

### ¿Para quién es?

🍴 **Restaurantes de cualquier tamaño**  
☕ **Cafeterías y coffee shops**  
🏪 **Food trucks y kioscos**  
📊 **Cadenas con múltiples ubicaciones**

---

## ⚡ Características Principales

### 🎯 Módulo de Pedidos (Semana 1-2)

- [ ] Creación de pedidos en tiempo real
- [ ] Gestión de mesas con drag & drop
- [ ] Sistema de comandas digitales
- [ ] División de cuentas inteligente
- [ ] Notas y modificaciones por plato
- [ ] Estados del pedido: pendiente, preparando, listo, entregado

### 🍕 Módulo de Menú y Productos (Semana 2-3)

- [ ] Catálogo de productos con imágenes
- [ ] Categorías y subcategorías ilimitadas
- [ ] Modificadores y combos
- [ ] Control de stock en tiempo real
- [ ] Precios variables por horario
- [ ] Productos agotados automáticos
- [ ] Traducción multi-idioma de menús

### 💳 Módulo de Pagos (Semana 3-4)

- [ ] Integración con pasarelas de pago
- [ ] Múltiples métodos: efectivo, tarjeta, QR
- [ ] Propinas digitales
- [ ] Descuentos y promociones
- [ ] Facturación electrónica
- [ ] Cierre de caja automático

### 👥 Módulo de Personal (Semana 4-5)

- [ ] Sistema de roles: administrador, gerente, mozo, cajero, cocina
- [ ] Control de acceso basado en permisos
- [ ] Turnos y horarios
- [ ] Comisiones por venta
- [ ] Evaluación de desempeño
- [ ] Registro de actividades (audit log)

### 📊 Módulo de Reportes y Analytics (Semana 5-6)

- [ ] Dashboard ejecutivo con KPIs
- [ ] Ventas por hora, día, mes, año
- [ ] Productos más vendidos
- [ ] Análisis de rentabilidad
- [ ] Gráficos interactivos
- [ ] Exportación a Excel/PDF
- [ ] Predicciones basadas en IA

### 📱 Módulo Móvil (Semana 6-7)

- [ ] PWA (Progressive Web App) instalable
- [ ] QR para menú digital
- [ ] Pedidos desde mesa con QR
- [ ] Notificaciones push
- [ ] Modo offline para mozos
- [ ] Sincronización automática

### ⚙️ Módulo de Configuración (Semana 7-8)

- [ ] Perfil del restaurante
- [ ] Horarios de atención
- [ ] Zonas y mesas personalizables
- [ ] Impuestos y descuentos
- [ ] Impresión de tickets
- [ ] Backup y restauración

### 🔧 Características Transversales

- **Internacionalización completa**: 6 idiomas (ES, EN, FR, ZH, RU, PT)
- **Temas personalizables**: Modo claro/oscuro
- **Responsive design**: Funciona en desktop, tablet y móvil
- **Real-time sync**: Sincronización en tiempo real con WebSockets
- **Offline-first**: Funciona sin internet, sincroniza después
- **Accesibilidad WCAG 2.1 AA**: Inclusivo para todos los usuarios
- **Performance 100**: Optimizado para carga instantánea

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 15.1 | Framework React con SSR/SSG |
| **React** | 19.0 | UI library con Server Components |
| **TypeScript** | 5.7 | Type safety y DX mejorado |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **React Query** | 5.x | Data fetching y caché |
| **Zustand** | 4.x | State management ligero |
| **React Hook Form** | 7.x | Formularios performantes |
| **Zod** | 3.x | Validación de esquemas |
| **Lucide React** | 0.468 | Iconos modernos |
| **date-fns** | 3.x | Manipulación de fechas |
| **chart.js** | 4.x | Gráficos interactivos |
| **react-beautiful-dnd** | 14.x | Drag & drop |

### Backend & Base de Datos

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Supabase** | 2.x | PostgreSQL + Auth + Realtime |
| **Firebase** | 12.x | Auth + Firestore + Storage |
| **Next.js API Routes** | 15.x | Endpoints del servidor |
| **Prisma** | 5.x | ORM type-safe |
| **Zod** | 3.x | Validación en API |

### Testing & Quality

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Vitest** | 1.x | Unit testing |
| **React Testing Library** | 14.x | Testing de componentes |
| **Playwright** | 1.x | E2E testing |
| **ESLint** | 9.x | Linting |
| **Prettier** | 3.x | Formateo de código |
| **Husky** | 9.x | Git hooks |

### DevOps & Deploy

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Vercel** | - | Deploy automático |
| **GitHub Actions** | - | CI/CD |
| **Docker** | 24.x | Containerización |
| **Turborepo** | 1.x | Monorepo management |

---

## 🏗️ Arquitectura del Sistema

### Arquitectura General

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Next.js 15 App Router (Server + Client Components)    │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │  Pedidos │  │  Menú    │  │ Reportes │  ...       │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                         Backend                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Next.js API Routes + Server Actions                   │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │   Auth   │  │  Orders  │  │ Products │  ...       │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Data Providers                           │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │      Supabase        │  │       Firebase       │        │
│  │  ┌────────────────┐  │  │  ┌────────────────┐  │        │
│  │  │  PostgreSQL    │  │  │  │   Firestore    │  │        │
│  │  │  Auth          │  │  │  │   Auth         │  │        │
│  │  │  Realtime      │  │  │  │   Storage      │  │        │
│  │  │  Storage       │  │  │  │   Messaging    │  │        │
│  │  └────────────────┘  │  │  └────────────────┘  │        │
│  └──────────────────────┘  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### Estructura de Módulos

```
app/
├── (auth)/              # Rutas de autenticación
│   ├── login/
│   └── register/
├── (dashboard)/         # Rutas del dashboard (protegidas)
│   ├── orders/         # Gestión de pedidos
│   ├── menu/           # Catálogo de productos
│   ├── tables/         # Gestión de mesas
│   ├── staff/          # Personal y roles
│   ├── reports/        # Reportes y analytics
│   └── settings/       # Configuración
└── api/                 # API routes
    ├── auth/
    ├── orders/
    ├── products/
    └── reports/
```

### Patrones de Diseño

- **Repository Pattern**: Abstracción de capa de datos
- **Service Layer**: Lógica de negocio separada de UI
- **Composition**: Componentes pequeños y reutilizables
- **Feature-based**: Organización por módulos de negocio
- **Type-driven**: TypeScript en toda la capa de datos

---

## 🚀 Instalación Rápida

### Requisitos Previos

```bash
node --version     # >= 20.0.0
npm --version      # >= 10.0.0
git --version      # >= 2.30.0
```

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/sistema-restaurante.git
cd sistema-restaurante
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Configurar Variables de Entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` y completa las credenciales de tu proveedor de datos:

#### Para Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

#### Para Firebase:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=000000000000
NEXT_PUBLIC_FIREBASE_APP_ID=1:000000000000:web:abcdef123456
```

### Paso 4: Ejecutar el Instalador

```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000`

El **instalador wizard** te guiará en 4 pasos:

1. **Idioma**: Selecciona uno de los 6 idiomas disponibles
2. **Negocio**: Define si es restaurante o cafetería
3. **Credenciales**: Configura nombre, usuario admin y contraseña
4. **Proveedor**: Elige entre Supabase o Firebase

### Paso 5: Acceder al Panel

Una vez completada la instalación, serás redirigido al dashboard principal.

---

## 📅 Roadmap de Desarrollo

### Desarrollo Activo: 8 Semanas (2 Meses)

El proyecto se actualizará diariamente con commits, mejoras y nuevas funcionalidades.

#### **Semana 1: Fundamentos y Autenticación**

| Día | Feature | Estado |
|-----|---------|--------|
| 1 | Configurar proyecto Next.js 15 con TypeScript | ✅ Completado |
| 2 | Sistema de autenticación con Supabase/Firebase | 🔄 En progreso |
| 3 | Rutas protegidas y middleware | ⏳ Pendiente |
| 4 | Roles de usuario (admin, gerente, mozo) | ⏳ Pendiente |
| 5 | Permisos granulares por ruta | ⏳ Pendiente |
| 6 | Recuperación de contraseña | ⏳ Pendiente |
| 7 | Auditoría de sesiones | ⏳ Pendiente |

#### **Semana 2: Gestión de Pedidos**

| Día | Feature | Estado |
|-----|---------|--------|
| 8 | Crear nuevo pedido | ⏳ Pendiente |
| 9 | Agregar productos al pedido | ⏳ Pendiente |
| 10 | Modificar pedido (cantidades, notas) | ⏳ Pendiente |
| 11 | Estados del pedido (workflow) | ⏳ Pendiente |
| 12 | Historial de pedidos | ⏳ Pendiente |
| 13 | Filtros y búsqueda de pedidos | ⏳ Pendiente |
| 14 | Impresión de comandas | ⏳ Pendiente |

#### **Semana 3: Menú y Productos**

| Día | Feature | Estado |
|-----|---------|--------|
| 15 | CRUD de productos | ⏳ Pendiente |
| 16 | Upload de imágenes (Supabase Storage) | ⏳ Pendiente |
| 17 | Categorías y subcategorías | ⏳ Pendiente |
| 18 | Modificadores por producto | ⏳ Pendiente |
| 19 | Control de stock | ⏳ Pendiente |
| 20 | Precios múltiples (happy hour) | ⏳ Pendiente |
| 21 | Productos destacados | ⏳ Pendiente |

#### **Semana 4: Mesas y Zonas**

| Día | Feature | Estado |
|-----|---------|--------|
| 22 | Crear zonas (sala, terraza, bar) | ⏳ Pendiente |
| 23 | Configurar mesas por zona | ⏳ Pendiente |
| 24 | Mapa interactivo de mesas | ⏳ Pendiente |
| 25 | Asignar pedidos a mesas | ⏳ Pendiente |
| 26 | Estados de mesa (libre, ocupada, reservada) | ⏳ Pendiente |
| 27 | Fusión de mesas | ⏳ Pendiente |
| 28 | División de cuenta por mesa | ⏳ Pendiente |

#### **Semana 5: Pagos y Facturación**

| Día | Feature | Estado |
|-----|---------|--------|
| 29 | Cierre de caja | ⏳ Pendiente |
| 30 | Métodos de pago (efectivo, tarjeta) | ⏳ Pendiente |
| 31 | Cálculo de propinas | ⏳ Pendiente |
| 32 | Descuentos por pedido | ⏳ Pendiente |
| 33 | Impuestos automáticos | ⏳ Pendiente |
| 34 | Generación de recibos | ⏳ Pendiente |
| 35 | Integración con factura electrónica | ⏳ Pendiente |

#### **Semana 6: Reportes y Dashboard**

| Día | Feature | Estado |
|-----|---------|--------|
| 36 | Dashboard con KPIs principales | ⏳ Pendiente |
| 37 | Gráficos de ventas (día/mes/año) | ⏳ Pendiente |
| 38 | Reporte de productos más vendidos | ⏳ Pendiente |
| 39 | Análisis de rentabilidad | ⏳ Pendiente |
| 40 | Reporte de personal (horas, ventas) | ⏳ Pendiente |
| 41 | Exportación a Excel | ⏳ Pendiente |
| 42 | Exportación a PDF | ⏳ Pendiente |

#### **Semana 7: PWA y Móvil**

| Día | Feature | Estado |
|-----|---------|--------|
| 43 | Configuración de PWA | ⏳ Pendiente |
| 44 | Service Worker para offline | ⏳ Pendiente |
| 45 | QR para menú digital | ⏳ Pendiente |
| 46 | Pedido por QR (cliente) | ⏳ Pendiente |
| 47 | Notificaciones push | ⏳ Pendiente |
| 48 | Optimización móvil | ⏳ Pendiente |
| 49 | Instalación en home screen | ⏳ Pendiente |

#### **Semana 8: Pulido y Testing**

| Día | Feature | Estado |
|-----|---------|--------|
| 50 | Unit tests (Vitest) | ⏳ Pendiente |
| 51 | Component tests (Testing Library) | ⏳ Pendiente |
| 52 | E2E tests (Playwright) | ⏳ Pendiente |
| 53 | Optimización de performance | ⏳ Pendiente |
| 54 | Accesibilidad WCAG 2.1 AA | ⏳ Pendiente |
| 55 | Documentación de API | ⏳ Pendiente |
| 56 | Deploy a producción | ⏳ Pendiente |

### 📊 Progreso Actual

```
Semana 1/8  ████████░░░░░░░░  12%
```

**Días completados**: 1 / 56  
**Features completadas**: 1 / 56  
**Próximo hito**: Sistema de autenticación completo

---

## 📁 Estructura del Proyecto

```
sistema-restaurante/
├── app/                           # App Router de Next.js 15
│   ├── (auth)/                   # Rutas de autenticación
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/              # Dashboard protegido
│   │   ├── orders/              # Pedidos
│   │   ├── menu/                # Menú y productos
│   │   ├── tables/              # Mesas y zonas
│   │   ├── staff/               # Personal
│   │   ├── reports/             # Reportes
│   │   └── settings/            # Configuración
│   ├── api/                     # API routes
│   │   ├── auth/
│   │   ├── orders/
│   │   ├── products/
│   │   └── reports/
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página de inicio (installer)
│   └── globals.css              # Estilos globales
├── components/                   # Componentes reutilizables
│   ├── installer/               # Componentes del instalador
│   │   ├── ui.tsx              # UI primitives
│   │   └── installer.tsx       # Wizard principal
│   ├── ui/                      # Componentes UI (shadcn-style)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Table.tsx
│   └── features/                # Componentes por dominio
│       ├── orders/
│       ├── menu/
│       └── tables/
├── lib/                          # Utilidades y lógica compartida
│   ├── installer.ts            # Lógica del instalador
│   ├── providers.ts            # Supabase/Firebase clients
│   ├── auth/                   # Lógica de autenticación
│   ├── db/                     # Acceso a base de datos
│   ├── utils.ts                # Funciones helper
│   └── constants.ts            # Constantes globales
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts
│   ├── useOrders.ts
│   └── useProducts.ts
├── types/                        # TypeScript type definitions
│   ├── order.ts
│   ├── product.ts
│   └── user.ts
├── stores/                       # Zustand stores
│   ├── authStore.ts
│   └── cartStore.ts
├── public/                       # Assets estáticos
│   ├── icons/
│   └── images/
├── tests/                        # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── migrations/                   # Database migrations
├── .env.example                  # Variables de entorno ejemplo
├── .eslintrc.json               # ESLint config
├── .prettierrc                  # Prettier config
├── next.config.mjs              # Next.js config
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencias
└── README.md                    # Este archivo
```

---

## 💻 Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar con turbo (si usas monorepo)
npm run dev:turbo
```

Abre [http://localhost:3000](http://localhost:3000)

### Build y Producción

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

### Code Quality

```bash
# Linting
npm run lint

# Linting con auto-fix
npm run lint:fix

# Typecheck
npm run typecheck

# Formatear código
npm run format

# Verificar formateo (CI)
npm run format:check
```

### Testing

```bash
# Unit tests
npm run test:unit

# Unit tests con watch mode
npm run test:unit:watch

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

### Database

```bash
# Generar tipos de Prisma
npm run prisma:generate

# Crear migración
npm run prisma:migrate

# Resetear base de datos
npm run prisma:reset

# Seed de datos de prueba
npm run prisma:seed
```

### Herramientas

```bash
# Limpiar caché de Next.js
npm run clean

# Analisis de bundle
npm run analyze

# Storybook (si aplica)
npm run storybook
```

---

## 📐 Convenciones de Desarrollo

### Código

#### TypeScript

```typescript
// ✅ Correcto: Tipos explícitos y descriptivos
interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: Date;
}

// ❌ Incorrecto: Tipos genéricos
type Order = any;
```

#### Componentes React

```typescript
// ✅ Correcto: Componente funcional con TypeScript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

#### Naming Conventions

```typescript
// Variables y funciones: camelCase
const userName = 'John';
function calculateTotal() { }

// Componentes y tipos: PascalCase
function OrderCard() { }
interface ProductDetails { }

// Constantes: UPPER_SNAKE_CASE
const MAX_RETRY_ATTEMPTS = 3;

// Archivos: kebab-case
// order-details.tsx
// create-order.ts
```

#### Imports

```typescript
// ✅ Correcto: Ordenado y agrupado
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { OrderCard } from '@/components/features/orders';

import { useOrders } from '@/hooks/useOrders';
import { formatCurrency } from '@/lib/utils';
```

### Git

#### Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Features
git commit -m "feat(auth): add login with email/password"

# Bug fixes
git commit -m "fix(orders): prevent duplicate order submission"

# Docs
git commit -m "docs(readme): add installation instructions"

# Refactor
git commit -m "refactor(components): extract Button component"

# Tests
git commit -m "test(orders): add unit tests for OrderCard"
```

#### Branches

```bash
# Features
feature/order-management

# Bug fixes
fix/login-error

# Releases
release/v1.2.0

# Hotfixes
hotfix/payment-crash
```

### Testing

```typescript
// ✅ Correcto: Test descriptivo
describe('OrderCard', () => {
  it('should display order total formatted as currency', () => {
    const order = mockOrder({ total: 1500 });
    render(<OrderCard order={order} />);
    
    expect(screen.getByText('$15.00')).toBeInTheDocument();
  });
});
```

---

## 🤝 Contribución Diaria

### Proceso de Actualización Diaria

**Todos los días** se realizarán actualizaciones al repositorio:

#### 📅 Lunes - Viernes

| Hora | Actividad |
|------|-----------|
| 09:00 | Review de issues y pull requests |
| 10:00 - 13:00 | Desarrollo de features planificadas |
| 14:00 - 17:00 | Testing y documentación |
| 18:00 | Commit y push de cambios |

#### 📅 Sábado

| Hora | Actividad |
|------|-----------|
| 10:00 - 13:00 | Code review y optimizaciones |
| 14:00 - 16:00 | Actualización de documentación |
| 17:00 | Release notes de la semana |

### Cómo Contribuir

1. **Fork** el repositorio
2. **Clona** tu fork
   ```bash
   git clone https://github.com/tu-usuario/sistema-restaurante.git
   ```
3. **Crea una rama** para tu feature
   ```bash
   git checkout -b feature/nueva-feature
   ```
4. **Desarrolla** seguindo las convenciones
5. **Testea** tu código
   ```bash
   npm run lint
   npm run typecheck
   npm run test
   ```
6. **Commit** tus cambios
   ```bash
   git commit -m "feat(scope): descripción"
   ```
7. **Push** a tu fork
   ```bash
   git push origin feature/nueva-feature
   ```
8. **Abre un Pull Request** en GitHub

### Código de Conducta

- Respeto mutuo en todas las interacciones
- Feedback constructivo y profesional
- Código limpio y documentado
- Tests obligatorios para nuevas features
- Commits descriptivos y atómicos

---

## 📊 Estado Actual

### ✅ Completado

- [x] Setup del proyecto con Next.js 15
- [x] Configuración de TypeScript 5.7
- [x] Tailwind CSS con tema personalizado
- [x] Instalador wizard multi-paso
- [x] Soporte para 6 idiomas (ES, EN, FR, ZH, RU, PT)
- [x] Integración con Supabase
- [x] Integración con Firebase
- [x] Estructura de carpetas modular
- [x] Sistema de validación con Zod
- [x] Linter y formatter configurados

### 🔄 En Progreso

- [ ] Sistema de autenticación completo
- [ ] Gestión de roles y permisos

### ⏳ Pendiente

- [ ] Módulo de pedidos
- [ ] Módulo de menú
- [ ] Módulo de pagos
- [ ] Reports y analytics
- [ ] PWA y offline support
- [ ] Testing completo
- [ ] Documentación de API

---

## 🔒 Seguridad

### Mejores Prácticas Implementadas

- ✅ Validación de input con Zod
- ✅ Protección CSRF en formularios
- ✅ Sanitización de HTML
- ✅ Rate limiting en API routes
- ✅ Autenticación con JWT
- ✅ Encriptación de contraseñas (bcrypt)
- ✅ HTTPS obligatorio en producción
- ✅ Variables de entorno seguras

### Reportar Vulnerabilidades

Si encuentras una vulnerabilidad de seguridad, **NO abras un issue público**.  
Envía un email a: `security@ejemplo.com`

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Supabase](https://supabase.com/) - Backend as a Service
- [Firebase](https://firebase.google.com/) - Google's app platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with types
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Contacto

- **Autor**: [Tu Nombre]
- **Email**: tu@email.com
- **Twitter**: [@tu_usuario](https://twitter.com/tu_usuario)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu_perfil)
- **Website**: [tusitio.com](https://tusitio.com)

---

## 🌟 Apoya el Proyecto

Si este proyecto te resulta útil, considera:

- ⭐ Dar una estrella en GitHub
- 🐦 Compartir en redes sociales
- 💡 Reportar bugs o sugerir features
- 🔧 Contribuir con código o documentación

---

<p align="center">
  <strong>Hecho con ❤️ y ☕ por desarrolladores apasionados</strong><br />
  <em>© 2026 Sistema Restaurante CMS - Todos los derechos reservados</em>
</p>
