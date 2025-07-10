# DMOSCOA Portfolio

A modern, tech-inspired portfolio website built with Vite, React, TypeScript, Tailwind CSS, ShadCN and some MagicUI. Features a cyberpunk aesthetic with glitch effects, animated components, and a responsive design.

## 🚀 Features

- **Modern Tech Aesthetic**: Cyberpunk-inspired design with glitch text effects and animated components
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Animated Components**:
  - StructureBar with animated segments
  - GlitchText with randomized character effects
  - Dynamic text cycling on homepage
  - Opening page transition
  - Initializer animation
- **Project Showcase**: Interactive project gallery with detailed project pages
- **Dark/Light/Alt Themes**: CSS-based theme system with multiple variants
- **Accessible**: Built with accessibility in mind using semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Animations**: Framer Motion & Custom CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **UI Components**: ShadCN and MagicUI
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── custom/           # Custom components (GlitchText, StructureBar, etc.)
│   ├── ui/              # Reusable UI components
│   └── magicui/         # Third-party UI components
├── pages/               # Page components
├── data/                # Static data (projects, etc.)
├── lib/                 # Utility functions
└── styles/              # Global styles and theme
```

## 🎨 Design System

### Theme Variants

- **Light**: Clean, minimal design
- **Dark**: Cyberpunk-inspired dark theme
- **Light Alt**: Alternative light variant

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dmoscoa-portfolio.git
cd dmoscoa-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📝 Customization

### Adding Projects

Edit `src/data/projects.ts` to add your own projects:

```typescript
export const projects = [
  {
    id: "01",
    name: "Project Name",
    description: "Project description",
    year: "2024",
    link: "/projects/project-id",
    // ... other properties
  },
];
```

### Modifying Themes

Themes are defined in `src/styles/globals.css` using CSS custom properties and the `@theme` directive:

```css
@theme {
  --color-background: #000000;
  --color-foreground: #ffffff;
  /* ... other theme variables */
}
```

### Customizing Animations

Animation timing and effects can be modified in the component files:

- StructureBar animation duration: `src/components/custom/structure-bar.tsx`
- GlitchText effects: `src/components/custom/glitch-text.tsx`
- Text cycling: `src/pages/home.tsx`

## 🎯 Key Features Explained

### StructureBar Component

A modern navigation/status bar with:

- Left and right text labels
- 5 animated segments that grow in sequence
- Configurable animation duration
- Responsive design

### GlitchText Component

Text with cyberpunk glitch effects:

- Randomized character substitutions
- Configurable glitch intensity
- Maintains accessibility with proper ARIA labels

### Dynamic Text Cycling

The homepage features text that cycles through different variations:

- Personal name variations
- Professional titles
- Configurable timing and text array

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Stacked layout with optimized touch targets
- **Tablet**: Adjusted spacing and typography
- **Desktop**: Full layout with hover effects and animations

## 🌟 Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Efficient animations with Framer Motion
- CSS-based themes for fast switching

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [dmoscoa.dev](https://dmoscoa-portfolio.onrender.com)
- **GitHub**: [@dmoscoa](https://github.com/dmoscoa)
- **LinkedIn**: [Diego Moscoa](https://linkedin.com/in/diegomoscoa)

---

Built with ❤️ by Diego Moscoa
