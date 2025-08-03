# UXplorer Healthcare Multiagent System

A comprehensive healthcare management platform built with Next.js, TypeScript, and shadcn/ui components. This application provides a multiagent system for healthcare management with role-based access for patients, doctors, and administrators.

## 🏥 Features

- **Multi-role Authentication System**
  - Patient Portal
  - Doctor Dashboard
  - Admin Management Interface

- **User-friendly Interfaces**
  - Patient onboarding and registration
  - Medical records management
  - Appointment scheduling
  - AI-powered chatbot assistance

- **Modern Tech Stack**
  - Next.js 15 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - shadcn/ui component library
  - Radix UI primitives
  - React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **pnpm** (recommended) or npm
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tejaschalamp/Uxplorer-Healthcare-Multiagent.git
   cd Uxplorer-Healthcare-Multiagent
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Start the development server**
   ```bash
   # Using pnpm
   pnpm dev

   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

In the project directory, you can run:

- `pnpm dev` or `npm run dev` - Runs the app in development mode
- `pnpm build` or `npm run build` - Builds the app for production
- `pnpm start` or `npm run start` - Runs the built app in production mode
- `pnpm lint` or `npm run lint` - Runs the linter to check for code issues

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages for different roles
│   │   ├── admin/        # Admin dashboard and patient management
│   │   ├── doctor/       # Doctor dashboard
│   │   └── patient/      # Patient dashboard
│   ├── login/            # Authentication pages
│   │   ├── admin/        # Admin login
│   │   └── patient/      # Patient login
│   ├── onboarding/       # Patient onboarding flow
│   ├── signup/           # Registration pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── admin-sidebar.tsx # Admin navigation
│   ├── ai-chatbot.tsx   # AI chat functionality
│   └── theme-provider.tsx # Theme management
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Additional stylesheets
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on top of [Radix UI](https://www.radix-ui.com/). The components are:

- Fully customizable
- Accessible by default
- Built with Tailwind CSS
- TypeScript ready

### Adding New Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

## 🔒 Authentication & Roles

The application supports three main user roles:

1. **Patient**
   - Register and manage personal health information
   - Book appointments
   - View medical records
   - Access AI chatbot assistance

2. **Doctor**
   - View and manage patient records
   - Schedule appointments
   - Update treatment plans

3. **Administrator**
   - Manage users (patients and doctors)
   - System configuration
   - Analytics and reporting

## 🎨 Styling

The project uses:

- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming
- **Dark/Light mode** support via next-themes
- **Responsive design** principles

### Customizing Themes

Colors and themes can be customized in:
- `app/globals.css` - CSS variables and base styles
- `tailwind.config.js` - Tailwind configuration
- `components.json` - shadcn/ui configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `package.json` - Dependencies and scripts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

You can deploy to any platform that supports Node.js:

1. Build the application:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

1. **Node.js version incompatibility**
   - Ensure you're using Node.js 18.0 or higher

2. **Package installation fails**
   - Clear cache: `pnpm store prune` or `npm cache clean --force`
   - Delete `node_modules` and `pnpm-lock.yaml`/`package-lock.json`
   - Reinstall dependencies

3. **Build errors**
   - Check TypeScript errors: `npx tsc --noEmit`
   - Verify all imports are correct

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Tejaschalamp/Uxplorer-Healthcare-Multiagent/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ by the UXEnhancers Team**
