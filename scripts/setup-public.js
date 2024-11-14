const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the public directory structure
const directories = [
  'public',
  'public/images',
  'public/images/projects',
  'public/images/profile',
  'public/images/blog',
  'public/images/testimonials'
];

// Create directories
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to download file
const downloadFile = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

// Files to download
const files = [
  {
    url: 'https://placehold.co/32x32/png',
    path: 'public/favicon.ico'
  },
  {
    url: 'https://placehold.co/192x192/png',
    path: 'public/logo192.png'
  },
  {
    url: 'https://placehold.co/512x512/png',
    path: 'public/logo512.png'
  },
  {
    url: 'https://placehold.co/600x400/png',
    path: 'public/images/projects/project1.png'
  },
  {
    url: 'https://placehold.co/600x400/png',
    path: 'public/images/projects/project2.png'
  },
  {
    url: 'https://placehold.co/600x400/png',
    path: 'public/images/projects/project3.png'
  }
];

// Download files
files.forEach(file => {
  downloadFile(file.url, file.path)
    .then(filepath => console.log(`Downloaded file: ${filepath}`))
    .catch(error => console.error(`Error downloading file: ${file.path}`, error));
}); 