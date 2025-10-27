# Homepage Mobile - سهیل بیمه

A modern, mobile-first insurance company homepage built with pure HTML, CSS, and JavaScript for the "soheilbime" brand.

## Technologies Used

- **HTML5**: Semantic markup with RTL support for Persian
- **CSS3**: Mobile-first responsive design with custom properties
- **JavaScript (Vanilla)**: Hamburger menu with accessibility features
- **Google Fonts**: Vazirmatn (Persian/Arabic font) and Caveat for branding

## Features

- ✅ Mobile-first responsive design (optimized for small screens)
- ✅ Accessible hamburger menu with ARIA attributes
- ✅ Prevents horizontal scrolling (page never scrolls left-right)
- ✅ Horizontal carousel for portfolio cards (internal scroll only)
- ✅ Touch-friendly buttons (minimum 44px height)
- ✅ Purple & white color scheme
- ✅ Smooth animations and transitions
- ✅ Fully RTL for Persian language

## Design Decisions

- **Mobile-First**: Designed for smallest screens first (320px+)
- **No Horizontal Scroll**: Body never scrolls horizontally; only internal carousels can
- **Touch Targets**: All buttons and links are at least 44x44 pixels
- **Hamburger Menu**: Slide-in menu with backdrop blur effect
- **Portfolio Carousel**: Horizontal scroll with snap points for better UX
- **Typography**: Vazirmatn for body text with Caveat for logo

## UX Constraints

⚠️ **Critical**: The entire page must **never** allow horizontal scrolling of the viewport. All elements fit within viewport width. Only internal scrollers (like portfolio carousel) are allowed to scroll horizontally.

## Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Test on mobile device or resize browser to mobile width (320px - 768px)
4. No build process or dependencies required!

## Publishing to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., `homepage_mobile-soheilshahbaznezhad`)
4. Initialize with README (optional)
5. Click "Create repository"

### Step 2: Upload Files

1. Open your terminal/command prompt in the project folder
2. Initialize git:
   ```bash
   git init
   ```
3. Add all files:
   ```bash
   git add .
   ```
4. Commit:
   ```bash
   git commit -m "Initial commit: Mobile homepage"
   ```
5. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/homepage_mobile-soheilshahbaznezhad.git
   ```
6. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll to "Pages" section
4. Under "Source", select "main" branch
5. Select "/ (root)" as folder
6. Click "Save"
7. Your homepage will be live at: `https://YOUR_USERNAME.github.io/homepage_mobile-soheilshahbaznezhad/`

## File Structure

```
homepage_mobile-soheilshahbaznezhad/
├── index.html          # Main HTML file
├── style.css           # Mobile-first responsive CSS
├── script.js           # Hamburger menu & scroll handling
├── README.md           # This file
└── LICENSE             # MIT License
```

## Sections

- **Header**: Logo + hamburger menu (mobile navigation)
- **Hero**: Large headline with CTA button
- **Features**: 4 insurance services in cards
- **About**: Company description and advantages
- **Portfolio**: Horizontal scrollable carousel with 4 insurance plan cards
- **Pricing**: 3 pricing tiers (vertical stack)
- **CTA**: Contact section with buttons
- **Footer**: Social links and copyright

## Hamburger Menu Behavior

- Opens/closes with smooth animation
- Toggles `aria-expanded` for accessibility
- Prevents body scroll when open
- Closes on link click or outside click
- Keyboard accessible (Enter/Space to toggle)
- Maximum 100vw width (prevents horizontal scroll)

## Carousel Implementation

- Portfolio cards in horizontal scroll container
- Uses CSS `overflow-x: auto` for internal scrolling
- Touch-friendly with momentum scrolling
- Snap points for better card alignment
- Custom scrollbar styling
- **Important**: Only the carousel scrolls horizontally, not the page body

## Accessibility

- Semantic HTML elements
- ARIA attributes for hamburger menu
- Keyboard navigation support
- Focus states for interactive elements
- High contrast for readability
- Minimum 44px touch targets
- Respects `prefers-reduced-motion`

## Browser Support

- Chrome Mobile (latest)
- Safari iOS (latest)
- Firefox Mobile (latest)
- Chrome Desktop (latest)
- Edge (latest)

## Testing on Mobile

1. Open the page on a real mobile device
2. Verify hamburger menu opens/closes smoothly
3. Test touch targets are easy to tap
4. Ensure no horizontal scrolling of the viewport
5. Verify carousel scrolls smoothly
6. Test keyboard navigation (if using mobile browser with keyboard)

## License

MIT License - see LICENSE file for details

