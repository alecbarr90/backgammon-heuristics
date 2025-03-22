# CLAUDE.md - Coding Guidelines

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style
- **Imports**: Use absolute imports with `@/` alias for src directory
- **Typescript**: Strict mode enabled, use proper type annotations
- **Components**: Use functional React components with type-safe props
- **Styling**: Use Tailwind CSS with `cn()` utility from `@/lib/utils`
- **Naming**: PascalCase for components, camelCase for functions/variables
- **File Structure**: 
  - Components in `/src/components`
  - Pages in `/src/app`
  - Utility functions in `/src/lib`
- **Error Handling**: Use TypeScript to prevent errors, handle async errors properly
- **Props**: Destructure props with appropriate defaults
- **State Management**: Use React hooks for local state
- **Component Structure**: Follow the pattern in existing UI components