# React Multi-Language Navigation App

## Project Overview

This project is a React-based web application that features a multi-language navigation system. The application consists of a header with language selection options, and navigational links to various pages including Home, Movies, TV Shows, Sports, and Live content. It utilizes the `react-router-dom` package for routing and `react-icons` for icons.

## Features

- **Multi-Language Support:** Users can select from several languages including English, French, German, Russian, Spanish, and Chinese. The content of the navigation menu updates based on the selected language.
- **Responsive Design:** The application provides a responsive design with a collapsible mobile menu.
- **Dynamic Navigation:** Navigation links are dynamically translated based on the selected language.

## Packages Used

- **`react-icons` (version ^5.3.0):** Provides a set of popular icons to use in React applications. Icons are used for language selection and mobile menu toggling.
- **`react-router-dom` (version ^6.26.1):** Manages navigation and routing within the React application.

## How It Works

### File Structure

- **`src/components/Header.js`**: Contains the header component with language selection and navigation links. It dynamically updates the menu items based on the selected language.
- **`src/context/LanguageContext.js`**: Defines the context for managing the active language and providing a function to change the language across the application.
- **`src/pages/Home.js`**: Displays content for the Home page.
- **`src/pages/Movies.js`**: Displays content for the Movies page.
- **`src/pages/TvShows.js`**: Displays content for the TV Shows page.
- **`src/pages/Sports.js`**: Displays content for the Sports page.
- **`src/pages/Live.js`**: Displays content for the Live page.
- **`src/App.js`**: The main application component that sets up routing and provides the `LanguageContext` to its children.
- **`src/App.css`**: Contains the styles for the application.
- **`src/index.css`**: General styles applied to the pages.

### Key Components

- **`Header` Component:**

  - Displays the logo and navigational links.
  - Includes a language selection dropdown and a mobile menu.
  - Updates the displayed text based on the currently selected language from `LanguageContext`.

- **`LanguageContext` Context:**

  - Provides the current language and a method to change it.
  - The default language is set to English (`"EN"`).

- **`App` Component:**
  - Manages the active language state and routes between different pages.
  - Uses `LanguageContext.Provider` to pass down the language state and updater function.

### Running the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/thamim-ansari/Horizon-frontend.git
   cd Horizon-frontend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm start
   ```
