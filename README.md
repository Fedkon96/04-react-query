# 🎬 Movie Search App with React Query

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.85.2-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

A modern, responsive movie search application built with React, TypeScript, and TanStack Query (React Query). Search for your favorite movies using The Movie Database (TMDB) API with real-time data fetching, caching, and pagination.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

- 🔍 **Real-time Movie Search** - Search through thousands of movies instantly
- 📊 **Smart Data Caching** - Powered by TanStack Query for optimal performance
- 📄 **Pagination** - Navigate through search results seamlessly
- 🎯 **Modal Details** - Click on any movie to view detailed information
- 🔄 **Loading States** - Beautiful loading indicators for better UX
- ⚠️ **Error Handling** - User-friendly error messages with toast notifications
- 📱 **Responsive Design** - Works perfectly on all devices
- 🛠️ **DevTools** - React Query DevTools for debugging and monitoring
- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement

## 🎯 Demo

<!-- Add your demo screenshot or GIF here -->
<!-- ![App Screenshot](./screenshots/demo.png) -->

## 🚀 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- TMDB API Key ([Get it here](https://www.themoviedb.org/settings/api))

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fedkon96/04-react-query.git
   cd 04-react-query
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```
   
   > 💡 **How to get TMDB API Key:**
   > 1. Create an account at [TMDB](https://www.themoviedb.org/)
   > 2. Go to Settings → API
   > 3. Request an API key (choose "Developer")
   > 4. Copy your API Read Access Token (v4 auth)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📖 Usage

1. **Search for Movies**: Enter a movie title in the search bar
2. **Browse Results**: Scroll through the movie grid
3. **Pagination**: Use the pagination controls to navigate through pages
4. **View Details**: Click on any movie card to open a detailed modal
5. **Monitor Cache**: Open React Query DevTools to see query states

## 🛠️ Tech Stack

### Core Technologies

- **[React 19](https://react.dev/)** - UI library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool

### State Management & Data Fetching

- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization for React
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client

### UI & Styling

- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **[React Hot Toast](https://react-hot-toast.com/)** - Beautiful toast notifications
- **[React Paginate](https://www.npmjs.com/package/react-paginate)** - Pagination component
- **[React Spinners](https://www.npmjs.com/package/react-spinners)** - Loading indicators
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[Modern Normalize](https://github.com/sindresorhus/modern-normalize)** - CSS normalization

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
04-react-query/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # React components
│   │   ├── App/         # Main application component
│   │   ├── SearchBar/   # Search input component
│   │   ├── MovieGrid/   # Movie cards grid
│   │   ├── MovieModal/  # Movie details modal
│   │   ├── Loader/      # Loading spinner
│   │   └── ErrorMessage/# Error display component
│   ├── services/        # API services
│   │   └── movieService.ts
│   ├── types/           # TypeScript type definitions
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables (create this)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # You are here!
```

## 🔑 Key Features Explained

### TanStack Query Integration

This project leverages TanStack Query (React Query) for efficient data management:

- **Automatic Caching**: Previously fetched data is cached and reused
- **Background Updates**: Data is refreshed in the background
- **Optimistic Updates**: Instant UI feedback
- **Pagination Support**: Smooth navigation with `keepPreviousData`
- **DevTools**: Built-in debugging tools for query inspection

```typescript
const { data, isError, isLoading, isSuccess } = useQuery({
  queryKey: ["movies", queryKey, page],
  queryFn: () => fetchMovies(queryKey, page),
  enabled: !!queryKey,
  placeholderData: keepPreviousData,
});
```

### Modular Architecture

Components are organized for maximum reusability and maintainability:
- Separation of concerns (UI, logic, services)
- Type-safe props with TypeScript interfaces
- Reusable service layer for API calls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [TanStack Query](https://tanstack.com/query) for the excellent data-fetching library
- [Vite](https://vitejs.dev/) for the blazing-fast development experience

## 📧 Contact

Project Link: [https://github.com/Fedkon96/04-react-query](https://github.com/Fedkon96/04-react-query)

---

<div align="center">
  Made with ❤️ using React and TanStack Query
</div>
