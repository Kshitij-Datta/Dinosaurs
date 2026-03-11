Dinonaur: Prehistoric EncyclopediaDinonaur is a high-performance, data-driven Single Page Application (SPA) designed to explore the Mesozoic era. Utilizing live scientific data from the Paleobiology Database (PBDB) the application provides a seamless, interactive archive of over 2,000 dinosaur genera.

🔗 **[Visit Site](https://kshitij-datta.github.io/Dinosaurs/)**

🚀 Technical Highlights

# Massive Data Handling: Managed a dataset of 2,000+ records without performance degradation using DOM Virtualization (react-virtuoso).

# Dynamic Routing: Leveraged React Router to architect a multi-page feel within a single-page environment, enabling unique, shareable URLs for every specimen.

# Client-Side Caching: Implemented a localStorage caching system to reduce redundant network requests for images, improving load times for returning visitors.

# Interactive Mapping: Integrated React-Leaflet to plot fossil occurrence coordinates on an interactive geographic interface.

🛠️ Tech Stack
Category
Technology
Frontend
React.js, React Router
Performance
React-Virtuoso (Windowing/Virtualization)
Styling
Custom CSS3 (Minimalist / Earthy Theme)
Data Sources
Paleobiology Database (PBDB)
Maps
Leaflet.js / React-Leaflet
📂 Project Structure
src/
├── Components/
│ ├── detail/ # Taxonomy cards, Fossil maps
│ ├── explorer/ # Virtualized grid, search controls
│ ├── layout/ # Navbar, Hero, Footer
│ └── ui/ # Modals, Buttons
├── pages/ # Page-level components (Home, Detail)
├── services/ # API logic and fetch utilities (pbdbApi.js)
└── asset/ # Static assets (CV, local icons)
⚙️ Installation & SetupClone the repository:Bashgit clone https://github.com/Kshitij-Datta/Dinosaurs.git
Install dependencies:Bashnpm install
Start the development server:Bashnpm start
📝 AuthorKshitij DattaPortfolio: kshitijdatta.vercel.appLinkedIn: linkedin.com/in/kshitij-datta-sdeGitHub: @Kshitij-Datta
