# Portfolio App

A modern, animated portfolio app built with Next.js, Tailwind CSS, Framer Motion, and Ant Design. Features a beautiful, responsive design with smooth animations and dark/light theme support.

## Features

- **Profile Section** - Showcase your profile picture, name, title, and contact information
- **Work Experience** - Timeline-based experience display with company details
- **Projects** - Interactive project cards with expandable details and technology tags
- **Technical Skills** - Rotating carousel of technical skills with icons
- **Education & Certifications** - Educational background and professional certifications
- **Skills, Personality, Languages & Hobbies** - Comprehensive personal information sections
- **Contact Form** - Functional contact form with validation and success modal
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **English/Arabic Language Support** - Full internationalization support
- **Smooth Animations** - Framer Motion powered scroll-triggered animations
- **Responsive Design** - Fully responsive layout for all device sizes
- **Rotating Icons Ring** - Animated background icons in the profile section

## Customization

- Replace `/public/profile.jpeg` with your own profile picture
- Edit `src/translations/en.ts` and `src/translations/ar.ts` to update your personal information
- Modify components in `src/app/components/` to customize sections
- Update theme colors in `src/app/globals.css`
- Adjust animations and timing in component files

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

### Core Framework
- **Next.js 15.3.1** - React framework with App Router and TypeScript
- **React 19** - UI library
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Ant Design (antd) 5.28.1** - Enterprise-class UI component library
- **@ant-design/icons** - Icon library for Ant Design components

### Animations
- **Framer Motion 12.23.24** - Production-ready motion library for React

### Icons
- **react-icons 5.5.0** - Popular icon libraries (Font Awesome, Simple Icons, etc.)
- **@heroicons/react 2.2.0** - Beautiful hand-crafted SVG icons

### Theme & Internationalization
- **next-themes 0.4.6** - Theme switching with system preference support
- **Custom i18n** - Built-in translation system for English and Arabic

### Additional Libraries
- **@headlessui/react 2.2.2** - Unstyled, accessible UI components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
