# Mersakyi Wines - Luxury Wine E-Commerce Website

## Project Overview

Mersakyi Wines is a luxury wine e-commerce website that showcases premium wines and provides an elegant shopping experience for wine enthusiasts. The site features a sophisticated design with a dark, rich color palette that reflects the luxury nature of the wine products.

### Main Features

- **Hero Section**: An immersive full-screen hero with a stunning background image and call-to-action for shopping
- **About Us**: Information about the winery and its heritage
- **Management**: Team and management information
- **Wines Collection**: Showcase of premium wine products with pricing
- **Why Us**: Differentiators and unique selling points
- **Contact**: Contact information and form
- **Accessibility**: Boafo accessibility widget integration for inclusive user experience

### Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for responsive styling
- **PostCSS**: CSS processing and optimization
- **Boafo Accessibility Widget**: Accessibility features for all users

### Accessibility

This project uses the **Boafo Accessibility Widget** to make the website accessible to all users, including those with disabilities. The widget provides features like:
- Text-to-speech
- Font size adjustments
- Color contrast options
- Keyboard navigation support
- Screen reader compatibility

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget, you need to register and obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Create an account or log in
3. Navigate to your dashboard
4. Copy your API key from the dashboard

## How to Integrate the Boafo Widget

For detailed integration instructions, refer to the official integration guide:

[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

The widget is integrated in this project using the `boafo-accessibility-widget` npm package and initialized in the `BoafoWidgetInitializer` component.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GROW-YAI/YAI-LP.git
cd YAI-LP
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Open the `.env` file and add your Boafo API key:
```env
VITE_BOAFO_API_KEY=your_actual_api_key_here
```

5. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

6. Open your browser and navigate to `http://localhost:3000/`

### Build for Production

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
YAI-LP/
├── public/
│   ├── assets/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Management.jsx
│   │   ├── Wines.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BoafoWidgetInitializer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

This project is private and proprietary.