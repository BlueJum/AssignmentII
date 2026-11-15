var express = require('express');
var router = express.Router();

/* GET route page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  const projects = [
    {
      name: 'Cryptography',
      icon: 'fa-lock',
      tag: 'Caeser, Vigenere, Playfair',
      description: 'Traditional ciphers encode messages in a way that only those with the secret key can decode it. In my first project I have practiced encryption and decryption using ciphers such as Caesar cipher, Vigenere cipher and playfair cipher.'
    },
    {
      name: 'Cryptography',
      icon: 'fa-lock',
      tag: 'Caeser, Vigenere, Playfair',
      description: 'Traditional'
    },
    {
      name: 'Cryptography',
      icon: 'fa-lock',
      tag: 'Caeser, Vigenere, Playfair',
      description: 'Traditional'
    },
    {
      name: 'Cryptography',
      icon: 'fa-lock',
      tag: 'Caeser, Vigenere, Playfair',
      description: 'Traditional'
    },
  ]
  res.render('projects', { title: 'Projects', projects: projects });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});


module.exports = router;

