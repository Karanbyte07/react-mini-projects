<div align="center">

# 🚀 React Mini Projects

### Production-Ready React Applications for Learning & Reference

[![React](https://img.shields.io/badge/React-19-61DAFB? style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green? style=for-the-badge)](LICENSE)

**A curated collection of 10 production-grade React projects demonstrating modern React patterns, state management, routing, and real-world application architecture.**

[View Projects](#-projects) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack) • [Learning Path](#-learning-path)

---

### ⭐ Found this helpful? Please star this repo! 

</div>

## 📖 About This Repository

This repository contains **production-quality React mini-projects** built as part of my React learning journey with [**Chai Aur Code**](https://www.youtube.com/@chaiaurcode). Each project is a standalone application demonstrating specific React concepts, best practices, and modern development patterns. 

### 🎯 Why This Repository?

- ✅ **Production-Ready Code**: Clean, well-structured, and follows React best practices
- ✅ **Modern Tech Stack**: React 19, Vite 7, Tailwind CSS 4
- ✅ **Comprehensive Coverage**: From basics to advanced concepts
- ✅ **Standalone Projects**: Each project is independently runnable
- ✅ **Real-World Patterns**: Practical implementations you can use in production
- ✅ **Learning Resource**: Perfect for beginners and intermediate developers

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19 | UI Library |
| **Vite** | 7 | Build Tool & Dev Server |
| **Tailwind CSS** | 4 | Utility-First CSS Framework |
| **React Router** | 7 | Client-Side Routing |
| **Redux Toolkit** | Latest | State Management |
| **Appwrite** | Latest | Backend as a Service |

**Requirements**:  Node.js 18+ and npm/yarn

---

## 📂 Projects

<table>
<tr>
<td width="50%">

### 🎨 01.  Background Color Changer
**Concepts**: `useState`, Event Handling, Tailwind

A simple yet elegant color picker that dynamically changes the background with smooth transitions. 

**Key Features**:
- Multiple color options with button grid
- Smooth CSS transitions
- Responsive design

</td>
<td width="50%">

### 🔢 02. Counter App
**Concepts**: `useState`, State Management Basics

Classic counter application demonstrating fundamental React state management. 

**Key Features**:
- Increment/Decrement operations
- Value boundaries
- Simple UI with state updates

</td>
</tr>

<tr>
<td width="50%">

### 🔐 03. Password Generator
**Concepts**: `useState`, `useCallback`, `useEffect`, `useRef`

Advanced password generator with customizable options and clipboard integration.

**Key Features**: 
- Length adjustment (8-50 characters)
- Include numbers/special characters
- One-click copy to clipboard
- Real-time password generation
- Copy feedback indicator

</td>
<td width="50%">

### 💱 04. Currency Converter
**Concepts**: Custom Hooks, API Integration, Component Reusability

Real-time currency converter with live exchange rates.

**Key Features**:
- Custom `useCurrencyInfo` hook
- Live API integration (jsDelivr CDN)
- Reusable InputBox component
- Swap currency functionality
- Error handling

</td>
</tr>

<tr>
<td width="50%">

### 🧭 05. React Router Demo
**Concepts**: React Router v7, Nested Routes, Loaders

Comprehensive routing implementation with modern patterns.

**Key Features**: 
- Nested route layouts
- Dynamic route parameters (`/user/:id`)
- Route loaders for data fetching
- Protected routes pattern
- Navigation components (Header/Footer)

</td>
<td width="50%">

### 🔄 06. Context API Demo
**Concepts**: Context API, Provider Pattern

Minimal Context API implementation for state sharing.

**Key Features**: 
- User authentication context
- Login/Profile components
- Provider pattern implementation
- Global state management

</td>
</tr>

<tr>
<td width="50%">

### 🌓 07. Theme Switcher
**Concepts**:  Context API, `useEffect`, DOM Manipulation

Light/Dark mode toggle with persistent theme preference.

**Key Features**: 
- App-wide theme context
- Dynamic class toggling on `<html>`
- Tailwind dark mode integration
- Custom ThemeButton component
- Theme persistence

</td>
<td width="50%">

### ✅ 08. Todo App with Local Storage
**Concepts**: Context API, `localStorage`, CRUD Operations

Full-featured todo application with data persistence.

**Key Features**: 
- Add/Edit/Delete/Toggle todos
- Inline editing capability
- LocalStorage persistence
- Context-based state management
- Strike-through for completed items

</td>
</tr>

<tr>
<td width="50%">

### 🔧 09. Redux Toolkit Todo
**Concepts**: Redux Toolkit, Slices, Store Configuration

Modern Redux implementation using Redux Toolkit.

**Key Features**:
- Redux store setup
- Slice-based architecture
- Action creators & reducers
- DevTools integration
- Global state management

</td>
<td width="50%">

### 📝 10. Mega Blog with Appwrite
**Concepts**: Backend Integration, Authentication, File Upload

Production-level blog application with Appwrite backend. 

**Key Features**:
- User authentication (signup/login)
- Rich Text Editor (TinyMCE)
- Image upload & storage
- CRUD operations for posts
- Protected routes
- Form validation

</td>
</tr>
</table>

---

## 🏃 Quick Start

### Clone the Repository
```bash
git clone https://github.com/Karanbyte07/react-mini-projects.git
cd react-mini-projects
```

### Run Any Project
```bash
# Navigate to project folder
cd 01bgChanger

# Install dependencies
npm install

# Start development server
npm run dev
```

### Common Scripts (Available in Each Project)
```bash
npm run dev      # Start development server (usually http://localhost:5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

---

## 📚 Learning Path

This repository follows a progressive learning path: 

### 🟢 Beginner Level
1. **Counter App** → State basics
2. **Background Changer** → Event handling & styling
3. **Password Generator** → Hooks & refs

### 🟡 Intermediate Level
4. **Currency Converter** → Custom hooks & API integration
5. **Context API Demo** → Global state management
6. **Theme Switcher** → Advanced Context patterns
7. **React Router Demo** → Client-side routing

### 🔴 Advanced Level
8. **Todo with LocalStorage** → Persistence & CRUD
9. **Redux Toolkit Todo** → Redux patterns
10. **Mega Blog** → Production app architecture

---

## 🎓 Concepts Covered

<details>
<summary><b>Core React Concepts</b></summary>

- JSX syntax and component composition
- Functional components
- Props and prop drilling
- State management with `useState`
- Side effects with `useEffect`
- Performance optimization with `useCallback` and `useMemo`
- Refs and DOM access with `useRef`
- Custom hooks creation
</details>

<details>
<summary><b>Advanced Patterns</b></summary>

- Context API for global state
- Provider pattern
- Component composition
- Render props
- Higher-order patterns
- Code splitting
</details>

<details>
<summary><b>State Management</b></summary>

- Local state with `useState`
- Context API
- Redux Toolkit
- LocalStorage persistence
- Server state (API integration)
</details>

<details>
<summary><b>Routing & Navigation</b></summary>

- React Router v7
- Nested routes
- Dynamic routes
- Route loaders
- Protected routes
- Navigation components
</details>

<details>
<summary><b>Backend Integration</b></summary>

- RESTful API consumption
- Appwrite BaaS integration
- Authentication flows
- File uploads
- Error handling
</details>

<details>
<summary><b>Styling & UI</b></summary>

- Tailwind CSS 4
- Responsive design
- Dark mode implementation
- Component libraries
- Form styling
</details>

---

## 🛠️ Project Structure

Each project follows a clean, scalable structure:

```
project-name/
├── src/
│   ├── components/     # Reusable components
│   ├── context/        # Context providers (if applicable)
│   ├── hooks/          # Custom hooks (if applicable)
│   ├── pages/          # Page components (if routing)
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind config (if applicable)
```

---

## 💡 Best Practices Demonstrated

- ✅ **Component Composition**: Breaking down UI into reusable components
- ✅ **Custom Hooks**:  Extracting reusable logic
- ✅ **Separation of Concerns**: Organizing code by feature
- ✅ **Error Handling**: Graceful error management
- ✅ **Performance**:  Memoization and optimization techniques
- ✅ **Accessibility**:  Semantic HTML and ARIA labels
- ✅ **Code Quality**: ESLint configuration and consistent formatting

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contributions
- Add TypeScript versions
- Implement unit tests (Jest/Vitest + React Testing Library)
- Add more projects
- Improve documentation
- Fix bugs or optimize code

---

## 📝 Notes & Tips

- **Currency API**: If the API fails, check your network connection.  It uses a free CDN endpoint.
- **Tailwind v4**: Configured via `@tailwindcss/vite` plugin.  Add custom styles in your CSS files.
- **Project Independence**: Each project is completely independent - no shared dependencies.
- **Extensibility**: These projects are intentionally simple - perfect base for adding features! 

---

## 🙏 Acknowledgments

This repository was created as part of my learning journey with: 

### [Chai Aur Code](https://www.youtube.com/@chaiaurcode) 🙏

A huge thanks to **Hitesh Choudhary** and the Chai Aur Code community for providing excellent React tutorials and guidance.  These projects are inspired by and built following the Chai Aur Code React course.

**Check out Chai Aur Code**:
- 🎥 [YouTube Channel](https://www.youtube.com/@chaiaurcode)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Feel free to use these projects for learning, reference, or as a foundation for your own applications! 

---

## 📬 Connect With Me

If you found this repository helpful, please consider: 
- ⭐ **Starring** this repository
- 🔗 **Sharing** it with others
- 📝 **Following** me for more projects

**Built with ❤️ and ☕ by [Karanbyte07](https://github.com/Karanbyte07)**

---

<div align="center">

### ⭐ If you find this repository helpful, please give it a star! 

**Happy Learning!  🚀**

</div>
