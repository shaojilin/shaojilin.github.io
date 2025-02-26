# Music Player

A modern, responsive music player web application with playlist pagination functionality.

## Features

- Play, pause, skip tracks
- Volume control and mute functionality
- Progress bar with seek functionality
- Playlist with 10 different songs
- Pagination (5 songs per page)
- Loop and shuffle modes
- Responsive design for mobile and desktop

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome for icons

## Demo

Open `a.html` in your browser to see the music player in action.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the master branch. The deployment process will make the `a.html` file the default page that loads when visiting the GitHub Pages URL.

### How it works:
1. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the deployment
2. When you push to the master branch, it automatically:
   - Copies `a.html` to `index.html` (making it the default page)
   - Deploys all files to GitHub Pages

### To set up GitHub Pages:
1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will be available at `https://[your-username].github.io/[repository-name]/`

## Usage

1. Click on a song in the playlist to play it
2. Use the controls at the top to navigate between songs
3. Use the pagination controls to browse through the song list
4. Adjust volume using the volume slider or buttons

## Credits

Demo music tracks from [SoundHelix](https://www.soundhelix.com/audio-examples) 