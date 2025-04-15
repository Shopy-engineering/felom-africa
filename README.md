
# Felom Co. Ltd Website

A modern, responsive website for Felom Co. Ltd, a Ugandan company providing construction, maintenance, and supply solutions across East Africa.

## Project Overview

This website is built for Felom Co. Ltd, showcasing their comprehensive services in:
- Building and facility maintenance
- Civil engineering and construction
- Solar and renewable energy
- Electrical and plumbing installation
- Equipment maintenance and supplies
- Medical and laboratory equipment
- And more...

The design follows modern SaaS principles with a clean, professional look and a strong focus on conversion.

## Tech Stack

This project is built with:

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript
- **Vite**: Modern build tool for faster development
- **TailwindCSS**: Utility-first CSS framework for styling
- **shadcn-ui**: High-quality UI components
- **React Router**: For client-side routing
- **Lucide Icons**: Beautiful, consistent icon set
- **React Query**: For efficient data fetching (if needed for future expansion)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/felom-nexus-africa.git
cd felom-nexus-africa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:8080
```

## Project Structure

```
felom-nexus-africa/
├── .github/            # GitHub workflow configurations
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helpers
│   ├── pages/          # Page components
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
├── tailwind.config.ts  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Deployment

This project is set up for automatic deployment to GitHub Pages.

### How it works:

1. When you push changes to the `main` branch, a GitHub Action workflow will automatically:
   - Build the project
   - Deploy the built files to the `gh-pages` branch
   - Make the site available at: `https://[your-username].github.io/felom-nexus-africa/`

2. To manually deploy:
```bash
npm run build
```

Then deploy the contents of the `dist` folder to your web server.

## Customization

### Colors

The site uses a custom color palette focused on Felom's brand colors:
- Blues: From light blue (#F0F8FC) to dark blue (#000F3B)
- Oranges: From light orange (#FFFDF5) to dark orange (#4A2002)

These are defined in the TailwindCSS configuration and can be adjusted in `tailwind.config.ts`.

### Images

The site currently uses placeholder images from Unsplash. Replace these with Felom's actual images by:
1. Adding image files to the `public` directory
2. Updating image sources in the components to point to your images

### Content

All page content is defined within the respective page components in the `src/pages` directory. Update text, images, and other content as needed to match Felom's actual services and information.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information about this project, contact [your-email@example.com](mailto:your-email@example.com).
