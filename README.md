# Elisha's Concept

A modern, beautiful learning platform built with Next.js 14, TypeScript, and Tailwind CSS. Discover curated books and comprehensive online courses designed to expand your knowledge and skills.

## ✨ Features

- **Modern Design**: Beautiful, responsive UI with dark/light mode support
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type Safe**: Full TypeScript support with strict configuration
- **Accessible**: WCAG compliant components with proper ARIA labels
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Mobile First**: Responsive design that works on all devices
- **Developer Experience**: ESLint, Prettier, and Jest setup included

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Testing**: Jest + Testing Library
- **Linting**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elishas-concept
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   └── ThemeProvider.tsx  # Theme context provider
└── lib/                   # Utility functions
    └── utils.ts           # Common utilities
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **CSS Variables**: For consistent theming
- **Component Classes**: Reusable Tailwind component classes
- **Color Palette**: Semantic color tokens
- **Typography**: Consistent font scales
- **Spacing**: Systematic spacing scale
- **Animations**: Predefined animation classes

### Color Tokens

- `primary` - Main brand color
- `secondary` - Secondary actions
- `accent` - Highlight elements
- `muted` - Subtle backgrounds
- `destructive` - Error states
- `border` - Borders and dividers

### Component Classes

- `.btn` - Base button styles
- `.btn-primary` - Primary button variant
- `.btn-secondary` - Secondary button variant
- `.card` - Card container
- `.card-header` - Card header
- `.card-content` - Card content

## 🌙 Dark Mode

The application supports system, light, and dark themes with smooth transitions. The theme preference is persisted in localStorage.

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🧪 Testing

The project includes a comprehensive testing setup:

- **Jest** for test runner
- **Testing Library** for component testing
- **Mock configurations** for Next.js features
- **Coverage reporting** setup

## 📈 Performance

- **Next.js 14** App Router for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **Bundle analysis** tools
- **SEO optimization** with metadata

## 🔧 Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `jest.config.js` - Jest testing setup
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ by Elisha's Concept Team 