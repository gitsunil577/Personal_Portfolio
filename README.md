# Modern Portfolio Website

A stunning, modern portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, responsive design, and an attractive UI.

## Features

- **Modern Design**: Clean and professional UI with gradient effects and glassmorphism
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations and transitions
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Reusable React components
- **SEO Optimized**: Built with Next.js for better search engine optimization

## Sections

1. **Hero** - Eye-catching introduction with typing animation
2. **About** - Personal introduction and statistics
3. **Education** - Educational background with timeline
4. **Skills** - Technical skills with progress bars and tech stack
5. **Projects** - Featured projects showcase
6. **Experience** - Work experience timeline
7. **Contact** - Contact form and information
8. **Footer** - Copyright and attribution

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion (ready to use)

## Installation

1. **Navigate to the project directory**:
   ```bash
   cd portfolio-next
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit the following files to add your personal information:

- **Name & Bio**: `components/Hero.tsx`
- **About Section**: `components/About.tsx`
- **Education**: `components/Education.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`
- **Experience**: `components/Experience.tsx`
- **Contact Info**: `components/Contact.tsx`

### Change Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#6366f1',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
  accent: '#ec4899',     // Change accent color
}
```

### Add Your Social Links

Update social media links in:
- `components/Hero.tsx`
- `components/Contact.tsx`

Replace `#` with your actual profile URLs.

## Project Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx  # Experience section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── public/             # Static files
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Features to Add (Optional)

- Add real form submission (EmailJS, Formspree, etc.)
- Add a blog section
- Integrate CMS (Contentful, Sanity, etc.)
- Add dark/light mode toggle
- Add more animations with Framer Motion
- Add image gallery
- Connect to a backend API

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Platforms

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy with AWS
- **GitHub Pages**: Use `next export` for static export

## License

This project is open source and available under the MIT License.



If you have any questions or need help, feel free to reach out!

---

**Made with ❤️ using Next.js and TypeScript**
