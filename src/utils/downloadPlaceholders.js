const https = require('https');
const fs = require('fs');

const downloadImage = (url, filepath) => {
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

// Create directories if they don't exist
const dirs = [
  'public/images/projects',
  'public/images/profile',
  'public/images/blog',
  'public/images/testimonials'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Download placeholder images
const images = [
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
  },
  {
    url: 'https://placehold.co/300x300/png',
    path: 'public/images/profile/avatar.png'
  },
  {
    url: 'https://placehold.co/800x400/png',
    path: 'public/images/blog/post1.png'
  },
  {
    url: 'https://placehold.co/800x400/png',
    path: 'public/images/blog/post2.png'
  }
];

Promise.all(images.map(img => downloadImage(img.url, img.path)))
  .then(() => console.log('All images downloaded successfully'))
  .catch(err => console.error('Error downloading images:', err)); 