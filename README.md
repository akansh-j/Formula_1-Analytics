# F1 Analytics Dashboard

An interactive Formula 1 analytics dashboard by **Akansh Jadam**. The visualizations are built in Tableau Public and embedded in a React + TypeScript web app.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

**🔗 Live dashboard:** [Tableau Public: F1 Dashboard](https://public.tableau.com/app/profile/akansh.jadam/viz/F1Dashboard_17934499434380/Dashboard1)

<!-- Add a screenshot: ![Dashboard preview](docs/preview.png) -->

---

## About the Project

I built this dashboard to explore Formula 1 data visually. The charts are designed in Tableau Public, and this web app displays them as an embedded, fullscreen-capable view so the dashboard can be shared as a single page.

## Features

- Interactive Tableau dashboard, embedded directly in the page
- Fullscreen mode for detailed chart inspection
- Responsive layout for desktop and mobile screens
- Dark themed page layout with a clean header and footer

## Tech Stack

| Area          | Tools                          |
| ------------- | ------------------------------ |
| Frontend      | React 18, TypeScript           |
| Build tool    | Vite                           |
| Visualization | Tableau Public                 |

## Run It Locally

**Requirements:** Node.js 18 or newer.

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

To create a production build:

```bash
npm run build
```

## How the Dashboard Is Embedded

The Tableau view is loaded in an iframe inside `src/components/EmbeddedTableauDashboard.tsx`:

```
https://public.tableau.com/views/F1Dashboard_17934499434380/Dashboard1?:language=en-US&:display_count=n&:showVizHome=no&:embed=true
```

To use a different Tableau Public dashboard, publish it and replace this URL with your own embed link.

## Data

<!-- Describe where the F1 data came from, e.g. the source name, season range, and how it was prepared in Tableau. -->

## Author

**Akansh Jadam**
- Tableau Public: [akansh.jadam](https://public.tableau.com/app/profile/akansh.jadam)
- GitHub: [@<akansh-j>](https://github.com/<akansh-j>)

## License
