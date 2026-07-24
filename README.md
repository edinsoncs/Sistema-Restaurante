<p align="center">
  <img src="https://img.shields.io/badge/status-under_development-orange?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/version-1.0.0_beta-blue?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

<h1 align="center">🍽️ Restaurant CMS</h1>

<p align="center">
  <strong>Comprehensive Management Platform for Restaurants and Cafés</strong><br />
  <em>Powered by the latest technologies in the JavaScript ecosystem</em>
</p>

<p align="center">
  <a href="#key-features">Features</a> •
  <a href="#system-architecture">Architecture</a> •
  <a href="#development-roadmap">Roadmap</a> •
  <a href="#quick-installation">Installation</a> •
  <a href="#daily-contribution">Contributing</a>
</p>

---

## 📋 Table of Contents

- [Project Vision](#project-vision)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Quick Installation](#quick-installation)
- [Development Roadmap](#development-roadmap)
- [Project Structure](#project-structure)
- [Available Commands](#available-commands)
- [Development Conventions](#development-conventions)
- [Daily Contribution](#daily-contribution)
- [Current Status](#current-status)

---

## 🎯 Project Vision

**Restaurant CMS** transforms the management of traditional restaurants into a modern digital experience. It is designed for restaurant owners and managers who need complete control of their business from any device.

### Why Choose This System?

- **No Vendor Lock-in**: Compatible with both Supabase and Firebase
- **Offline-First**: Works even without an internet connection
- **Multi-language Support**: Production-ready with 6 languages (ES, EN, FR, ZH, RU, PT)
- **Scalable**: Modular architecture that grows with your business
- **Modern Technology**: Built with Next.js 15, React 19, TypeScript 5.7, and Tailwind CSS 3.4
- **Enterprise-Grade Security**: Authentication, roles, and granular permissions

### Who Is It For?

🍴 **Restaurants of all sizes**  
☕ **Cafés and Coffee Shops**  
🏪 **Food Trucks and Kiosks**  
📊 **Multi-Location Restaurant Chains**

---

## ⚡ Key Features

### 🎯 Order Management Module (Weeks 1–2)

- [ ] Real-time order creation
- [ ] Drag-and-drop table management
- [ ] Digital kitchen order system
- [ ] Smart bill splitting
- [ ] Dish notes and customizations
- [ ] Order statuses: Pending, Preparing, Ready, Delivered

### 🍕 Menu & Product Module (Weeks 2–3)

- [ ] Product catalog with images
- [ ] Unlimited categories and subcategories
- [ ] Product modifiers and combo meals
- [ ] Real-time inventory management
- [ ] Time-based pricing
- [ ] Automatic out-of-stock detection
- [ ] Multi-language menu translations

### 💳 Payment Module (Weeks 3–4)

- [ ] Payment gateway integration
- [ ] Multiple payment methods: Cash, Card, QR Code
- [ ] Digital tipping
- [ ] Discounts and promotions
- [ ] Electronic invoicing
- [ ] Automatic cash register closing

### 👥 Staff Management Module (Weeks 4–5)

- [ ] Role-based system: Administrator, Manager, Waiter, Cashier, Kitchen Staff
- [ ] Permission-based access control
- [ ] Shift and schedule management
- [ ] Sales commission tracking
- [ ] Performance evaluation
- [ ] Activity logging (Audit Log)
### 📊 Reports & Analytics Module (Weeks 5–6)

- [ ] Executive dashboard with KPIs
- [ ] Sales analytics by hour, day, month, and year
- [ ] Best-selling products
- [ ] Profitability analysis
- [ ] Interactive charts and graphs
- [ ] Export reports to Excel/PDF
- [ ] AI-powered sales predictions

### 📱 Mobile Module (Weeks 6–7)

- [ ] Installable Progressive Web App (PWA)
- [ ] QR code for digital menu
- [ ] QR-based table ordering
- [ ] Push notifications
- [ ] Offline mode for waitstaff
- [ ] Automatic data synchronization

### ⚙️ Settings Module (Weeks 7–8)

- [ ] Restaurant profile management
- [ ] Business hours configuration
- [ ] Customizable dining areas and tables
- [ ] Taxes and discount settings
- [ ] Receipt printing
- [ ] Backup and restore

### 🔧 Core Features

- **Full Internationalization**: Production-ready with 6 languages (ES, EN, FR, ZH, RU, PT)
- **Customizable Themes**: Light and Dark modes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-Time Synchronization**: Live updates with WebSockets
- **Offline-First**: Works without an internet connection and syncs automatically once online
- **WCAG 2.1 AA Accessibility**: Inclusive and accessible for all users
- **Performance Score of 100**: Optimized for fast loading and responsiveness

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.1 | React framework with SSR/SSG support |
| **React** | 19.0 | UI library with Server Components |
| **TypeScript** | 5.7 | Type safety and improved developer experience |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **React Query** | 5.x | Data fetching and caching |
| **Zustand** | 4.x | Lightweight state management |
| **React Hook Form** | 7.x | High-performance form handling |
| **Zod** | 3.x | Schema validation |
| **Lucide React** | 0.468 | Modern icon library |
| **date-fns** | 3.x | Date manipulation utilities |
| **Chart.js** | 4.x | Interactive charts |
| **react-beautiful-dnd** | 14.x | Drag-and-drop functionality |

### Backend & Database

| Technology | Version | Purpose |
|------------|---------|---------|
| **Supabase** | 2.x | PostgreSQL, Authentication, and Realtime |
| **Firebase** | 12.x | Authentication, Firestore, and Storage |
| **Next.js API Routes** | 15.x | Backend API endpoints |
| **Prisma** | 5.x | Type-safe ORM |
| **Zod** | 3.x | API request validation |

### Testing & Quality

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vitest** | 1.x | Unit testing |
| **React Testing Library** | 14.x | Component testing |
| **Playwright** | 1.x | End-to-end testing |
| **ESLint** | 9.x | Code linting |
| **Prettier** | 3.x | Code formatting |
| **Husky** | 9.x | Git hooks |

### DevOps & Deployment

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vercel** | - | Automatic deployment |
| **GitHub Actions** | - | Continuous Integration / Continuous Deployment (CI/CD) |
| **Docker** | 24.x | Containerization |
| **Turborepo** | 1.x | Monorepo management |

---

## 🏗️ System Architecture

### Overall Architecture

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

### Design Patterns

- **Repository Pattern**: Data layer abstraction
- **Service Layer**: Business logic separated from the UI
- **Composition**: Small, reusable components
- **Feature-Based Architecture**: Organized by business modules
- **Type-Driven Development**: TypeScript used throughout the data layer

---

## 🚀 Quick Installation

### Prerequisites

```bash
node --version     # >= 20.0.0
npm --version      # >= 10.0.0
git --version      # >= 2.30.0
```

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/restaurant-cms.git
cd restaurant-cms
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your preferred data provider credentials.

#### Supabase

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

#### Firebase

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=000000000000
NEXT_PUBLIC_FIREBASE_APP_ID=1:000000000000:web:abcdef123456
```

### Step 4: Run the Installer

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

The **installation wizard** will guide you through four simple steps:

1. **Language** – Select one of the six available languages.
2. **Business Type** – Choose whether your business is a restaurant or a café.
3. **Credentials** – Configure the restaurant name, administrator username, and password.
4. **Data Provider** – Choose between Supabase and Firebase.

### Step 5: Access the Dashboard

After completing the installation, you will be redirected to the main dashboard.

---

## 📅 Development Roadmap

### Active Development: 8 Weeks (2 Months)

The project will be updated daily with new commits, improvements, and features.

#### **Week 1: Foundation & Authentication**

| Day | Feature | Status |
|-----|---------|--------|
| 1 | Set up the Next.js 15 project with TypeScript | ✅ Completed |
| 2 | Authentication system with Supabase/Firebase | 🔄 In Progress |
| 3 | Protected routes and middleware | ⏳ Planned |
| 4 | User roles (Administrator, Manager, Waiter) | ⏳ Planned |
| 5 | Granular route permissions | ⏳ Planned |
| 6 | Password recovery | ⏳ Planned |
| 7 | Session auditing | ⏳ Planned |

#### **Week 2: Order Management**

| Day | Feature | Status |
|-----|---------|--------|
| 8 | Create a new order | ⏳ Planned |
| 9 | Add products to an order | ⏳ Planned |
| 10 | Modify orders (quantities, notes) | ⏳ Planned |
| 11 | Order status workflow | ⏳ Planned |
| 12 | Order history | ⏳ Planned |
| 13 | Order search and filtering | ⏳ Planned |
| 14 | Kitchen ticket printing | ⏳ Planned |

#### **Week 3: Menu & Products**

| Day | Feature | Status |
|-----|---------|--------|
| 15 | Product CRUD operations | ⏳ Planned |
| 16 | Image uploads (Supabase Storage) | ⏳ Planned |
| 17 | Categories and subcategories | ⏳ Planned |
| 18 | Product modifiers | ⏳ Planned |
| 19 | Inventory management | ⏳ Planned |
| 20 | Multiple pricing (Happy Hour) | ⏳ Planned |
| 21 | Featured products | ⏳ Planned |

#### **Week 4: Tables & Zones**

| Day | Feature | Status |
|-----|---------|--------|
| 22 | Create dining areas (Dining Room, Terrace, Bar) | ⏳ Planned |
| 23 | Configure tables by area | ⏳ Planned |
| 24 | Interactive table map | ⏳ Planned |
| 25 | Assign orders to tables | ⏳ Planned |
| 26 | Table statuses (Available, Occupied, Reserved) | ⏳ Planned |
| 27 | Merge tables | ⏳ Planned |
| 28 | Split bills by table | ⏳ Planned |

#### **Week 5: Payments & Billing**

| Day | Feature | Status |
|-----|---------|--------|
| 29 | Cash register closing | ⏳ Planned |
| 30 | Payment methods (Cash, Card) | ⏳ Planned |
| 31 | Tip calculation | ⏳ Planned |
| 32 | Order discounts | ⏳ Planned |
| 33 | Automatic tax calculation | ⏳ Planned |
| 34 | Receipt generation | ⏳ Planned |
| 35 | Electronic invoice integration | ⏳ Planned |

```
#### **Week 6: Reports & Dashboard**

| Day | Feature | Status |
|-----|---------|--------|
| 36 | Executive dashboard with key KPIs | ⏳ Planned |
| 37 | Sales charts (daily/monthly/yearly) | ⏳ Planned |
| 38 | Best-selling products report | ⏳ Planned |
| 39 | Profitability analysis | ⏳ Planned |
| 40 | Staff performance reports (hours, sales) | ⏳ Planned |
| 41 | Excel export | ⏳ Planned |
| 42 | PDF export | ⏳ Planned |

#### **Week 7: PWA & Mobile**

| Day | Feature | Status |
|-----|---------|--------|
| 43 | PWA configuration | ⏳ Planned |
| 44 | Offline Service Worker | ⏳ Planned |
| 45 | QR code for digital menu | ⏳ Planned |
| 46 | QR ordering (customer) | ⏳ Planned |
| 47 | Push notifications | ⏳ Planned |
| 48 | Mobile optimization | ⏳ Planned |
| 49 | Home screen installation | ⏳ Planned |

#### **Week 8: Polishing & Testing**

| Day | Feature | Status |
|-----|---------|--------|
| 50 | Unit tests (Vitest) | ⏳ Planned |
| 51 | Component tests (Testing Library) | ⏳ Planned |
| 52 | End-to-End tests (Playwright) | ⏳ Planned |
| 53 | Performance optimization | ⏳ Planned |
| 54 | WCAG 2.1 AA accessibility | ⏳ Planned |
| 55 | API documentation | ⏳ Planned |
| 56 | Production deployment | ⏳ Planned |

### 📊 Current Progress

```text
Week 1/8  ████████░░░░░░░░  12%
```

**Completed Days:** 1 / 56  
**Completed Features:** 1 / 56  
**Next Milestone:** Complete Authentication System

---

## 📁 Project Structure

```text
restaurant-cms/
├── app/                           # Next.js 15 App Router
│   ├── (auth)/                    # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/               # Protected dashboard
│   │   ├── orders/                # Order management
│   │   ├── menu/                  # Menu and products
│   │   ├── tables/                # Tables and dining areas
│   │   ├── staff/                 # Staff management
│   │   ├── reports/               # Reports and analytics
│   │   └── settings/              # Application settings
│   ├── api/                       # API routes
│   │   ├── auth/
│   │   ├── orders/
│   │   ├── products/
│   │   └── reports/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page (installer)
│   └── globals.css                # Global styles
├── components/                    # Reusable components
│   ├── installer/                 # Installer components
│   │   ├── ui.tsx                 # UI primitives
│   │   └── installer.tsx          # Main installation wizard
│   ├── ui/                        # UI components (shadcn-style)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Table.tsx
│   └── features/                  # Feature-specific components
│       ├── orders/
│       ├── menu/
│       └── tables/
├── lib/                           # Shared utilities and business logic
│   ├── installer.ts               # Installer logic
│   ├── providers.ts               # Supabase/Firebase clients
│   ├── auth/                      # Authentication logic
│   ├── db/                        # Database layer
│   ├── utils.ts                   # Utility functions
│   └── constants.ts               # Global constants
├── hooks/                         # Custom React hooks
│   ├── useAuth.ts
│   ├── useOrders.ts
│   └── useProducts.ts
├── types/                         # TypeScript definitions
│   ├── order.ts
│   ├── product.ts
│   └── user.ts
├── stores/                        # Zustand stores
│   ├── authStore.ts
│   └── cartStore.ts
├── public/                        # Static assets
│   ├── icons/
│   └── images/
├── tests/                         # Test suites
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── migrations/                    # Database migrations
├── .env.example                   # Example environment variables
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── README.md                      # Project documentation
```

---

## 💻 Available Commands

### Development

```bash
# Start the development server
npm run dev

# Start with Turbo (for monorepo setups)
npm run dev:turbo
```

Open **http://localhost:3000**

### Build & Production

```bash
# Build for production
npm run build

# Start the production server
npm start
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix

# Run TypeScript type checking
npm run typecheck

# Format the code
npm run format

# Verify formatting (CI)
npm run format:check
```

### Testing

```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit:watch

# Run end-to-end tests
npm run test:e2e

# Generate test coverage
npm run test:coverage
```

### Database

```bash
# Generate Prisma types
npm run prisma:generate

# Create a new migration
npm run prisma:migrate

# Reset the database
npm run prisma:reset

# Seed the database
npm run prisma:seed

```
### Tools

```bash
# Clear the Next.js cache
npm run clean

# Analyze the bundle
npm run analyze

# Launch Storybook (if applicable)
npm run storybook
```

---

## 📐 Development Conventions

### Code

#### TypeScript

```typescript
// ✅ Correct: Explicit and descriptive types
interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: Date;
}

// ❌ Incorrect: Generic types
type Order = any;
```

#### React Components

```typescript
// ✅ Correct: Functional component with TypeScript
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
// Variables and functions: camelCase
const userName = 'John';
function calculateTotal() { }

// Components and types: PascalCase
function OrderCard() { }
interface ProductDetails { }

// Constants: UPPER_SNAKE_CASE
const MAX_RETRY_ATTEMPTS = 3;

// File names: kebab-case
// order-details.tsx
// create-order.ts
```

#### Imports

```typescript
// ✅ Correct: Organized and grouped imports
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { OrderCard } from '@/components/features/orders';

import { useOrders } from '@/hooks/useOrders';
import { formatCurrency } from '@/lib/utils';
```

### Git

#### Commits

We follow the **Conventional Commits** specification:

```bash
# Features
git commit -m "feat(auth): add login with email/password"

# Bug fixes
git commit -m "fix(orders): prevent duplicate order submission"

# Documentation
git commit -m "docs(readme): add installation instructions"

# Refactoring
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
// ✅ Correct: Descriptive test
describe('OrderCard', () => {
  it('should display order total formatted as currency', () => {
    const order = mockOrder({ total: 1500 });
    render(<OrderCard order={order} />);

    expect(screen.getByText('$15.00')).toBeInTheDocument();
  });
});
```

---

## 🤝 Daily Contributions

### Daily Development Workflow

The repository is updated **every day** with new commits, improvements, and features.

#### 📅 Monday – Friday

| Time | Activity |
|------|----------|
| 09:00 | Review issues and pull requests |
| 10:00 – 13:00 | Develop planned features |
| 14:00 – 17:00 | Testing and documentation |
| 18:00 | Commit and push changes |

#### 📅 Saturday

| Time | Activity |
|------|----------|
| 10:00 – 13:00 | Code review and optimization |
| 14:00 – 16:00 | Documentation updates |
| 17:00 | Weekly release notes |

### How to Contribute

1. **Fork** the repository.
2. **Clone** your fork.

```bash
git clone https://github.com/your-username/restaurant-cms.git
```

3. **Create a feature branch.**

```bash
git checkout -b feature/new-feature
```

4. **Develop** your feature following the project conventions.

5. **Test** your code.

```bash
npm run lint
npm run typecheck
npm run test
```

6. **Commit** your changes.

```bash
git commit -m "feat(scope): description"
```

7. **Push** your branch.

```bash
git push origin feature/new-feature
```

8. **Open a Pull Request** on GitHub.

### Code of Conduct

- Treat everyone with respect.
- Provide constructive and professional feedback.
- Write clean, well-documented code.
- Include tests for all new features.
- Use clear and atomic commit messages.

---

## 📊 Current Status

### ✅ Completed

- [x] Next.js 15 project setup
- [x] TypeScript 5.7 configuration
- [x] Tailwind CSS with a custom theme
- [x] Multi-step installation wizard
- [x] Support for 6 languages (ES, EN, FR, ZH, RU, PT)
- [x] Supabase integration
- [x] Firebase integration
- [x] Modular project structure
- [x] Zod validation system
- [x] ESLint and Prettier configuration

### 🔄 In Progress

- [ ] Complete authentication system
- [ ] User roles and permission management

### ⏳ Planned

- [ ] Order management module
- [ ] Menu management module
- [ ] Payment module
- [ ] Reports and analytics
- [ ] PWA and offline support
- [ ] Comprehensive testing
- [ ] API documentation

---

## 🔒 Security

### Implemented Best Practices

- ✅ Input validation with Zod
- ✅ CSRF protection for forms
- ✅ HTML sanitization
- ✅ API route rate limiting
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ HTTPS enforced in production
- ✅ Secure environment variables

### Reporting Vulnerabilities

If you discover a security vulnerability, **DO NOT open a public issue**.

Instead, report it via email to:

```text
security@example.com
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — React Framework
- [Supabase](https://supabase.com/) — Backend as a Service
- [Firebase](https://firebase.google.com/) — Google's application platform
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — JavaScript with static typing
- [Vercel](https://vercel.com/) — Deployment platform

---

## 📞 Contact

- **Author:** Your Name
- **Email:** your@email.com
- **Twitter/X:** [@your_username](https://twitter.com/your_username)
- **LinkedIn:** [Your Profile](https://linkedin.com/in/your-profile)
- **Website:** [yourwebsite.com](https://yourwebsite.com)

---

## 🌟 Support the Project

If you find this project useful, consider:

- ⭐ Starring the repository on GitHub
- 🐦 Sharing it on social media
- 💡 Reporting bugs or suggesting new features
- 🔧 Contributing code or documentation

---

<p align="center">
  <strong>Made with ❤️ and ☕ by passionate developers</strong><br />
  <em>© 2026 Restaurant CMS. All rights reserved.</em>
</p>
