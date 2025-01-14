This project is a Star Wars app built with Next.js and styled using CSS. The app lists Star Wars movies and displays their characters dynamically when a movie is selected. It follows responsive design principles to work well across various screen sizes.
## Getting Started
1.Clone the repository:
git clone [https://github.com/your-username/your-repository.git](https://github.com/elaheesk/star-wars-app-test.git)
cd star-wars-app-test
2.Install dependencies:
npm install
3.Run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features
*Star Wars Movies Grid: Displays all Star Wars movies in a responsive grid layout.
*Character List: When a movie is selected, a list of characters from the movie is displayed in up to three columns.
*Responsive Design:
*On smaller screens, the grid adjusts dynamically.
*On larger screens, the character list is displayed prominently.

## Technologies Used
Next.js: Framework for React with file-based routing.
CSS: Used for styling the app with media queries for responsiveness.

## Task Description
The goal of the project was to build a basic responsive Single Page Application (SPA) that:

Lists all Star Wars movies in chronological order in a grid with up to 4 columns.
Displays the title and release date for each movie.
Shows a character list for a selected movie without refreshing the page:
Characters are displayed in up to 3 columns, arranged top-to-bottom.
Includes a close button to return to the movie grid.
Uses responsive design principles:
Mobile layout (active until 1140px): Movies and character lists are displayed side by side.
Large screens: The character list overlays the grid.

## How It Works
1. Data Fetching:
The app fetches Star Wars movies and their characters from the Star Wars API (SWAPI).
2. Responsive Layout:
CSS Grid is used to ensure a flexible layout for movie and character lists.
4. Dynamic Routing:
The app uses Next.js to handle dynamic state changes without full page reloads.
