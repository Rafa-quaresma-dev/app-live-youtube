# Instagram Live Stream Simulator

A modern web application that simulates an Instagram Live streaming experience with customizable video players, chat functionality, and interactive features.

## Features

- **Multiple Video Players Support**
  - YouTube videos
  - Panda Video embeds
  - VTurb player
  - Direct video links (MP4, WebM, OGG)

- **Instagram-Style Interface**
  - Gradient profile borders
  - Floating hearts animation
  - Live viewer counter with dynamic drops
  - Interactive chat overlay
  - CTA button with customizable delay

- **Fully Configurable**
  - All settings centralized in `src/config/livestream-config.ts`
  - Custom profile images
  - Adjustable viewer counts and drop timing
  - Customizable chat messages and intervals

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:8080`

## Configuration

All configuration is done in `src/config/livestream-config.ts`:

### Video Settings
- Choose video type: `youtube`, `panda`, `vturb`, or `direct`
- For YouTube: Paste complete URL (videos, shorts, or short links) or just the video ID
  - Examples: `https://www.youtube.com/watch?v=VIDEO_ID`, `https://youtu.be/VIDEO_ID`, `https://www.youtube.com/shorts/VIDEO_ID`
- For Panda/VTurb: Paste the embed code
- For Direct: Paste video file URL (MP4, WebM, OGG)
- Configure viewer counts and drop timing

### Channel Settings
- Set channel name
- Add profile image (place in `/public/images/`)
- Customize initials for avatar

### CTA Button
- Enable/disable button
- Set button text and link
- Configure appearance delay
- **5 Color Options**: red, blue, gray, black, white (auto-adjusts text contrast)
- **5 Effect Options**: pulse, glow, shake, bounce, float (can combine multiple effects)

### Chat Settings
- Adjust visible comments count
- Set comment interval
- Customize chat messages

## Profile Image

**Easy Setup (Recommended):**
1. Place your image in `/public/images/` and name it `profile` with any extension
   - Examples: `profile.jpg`, `profile.png`, `profile.jpeg`, `profile.gif`, `profile.webp`
2. The system will automatically detect and use it!

**Custom Name:**
1. Place your image in `/public/images/`
2. Open `src/config/livestream-config.ts`
3. Set `profileImageUrl` to:
   - Just the filename: `"myimage.jpg"` or `"myimage"` (auto-detects extension)
   - Full path: `"/images/myimage.jpg"`

**Recommendations:**
- Square format (1:1 aspect ratio)
- Size: 400x400 pixels
- Max file size: 500KB
- Supported formats: JPG, JPEG, PNG, GIF, WEBP

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Radix UI components
- Lucide icons

## License

This is a personal project for educational purposes.
