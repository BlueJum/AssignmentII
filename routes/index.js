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
      name: 'EIGRP implementation for IPV4',
      icon: 'fa-network-wired',
      tag: 'Classic EIGRP',
      description: 'EIGRP is an interior gateway routing protocol created by Cisco and published as open source in 2016 in RFC 7868. It is a very efficient distance-vector based protocol. In this project I have configured and examined EIGRP in two forms, Classic EIGRP and Named EIGRP. Named EIGRP is an update to Classic EIGRP that added multiprotocol support and default support for wide metrics.'
    },
    {
      name: 'EIGRP implementation for IPV6',
      icon: 'fa-route',
      tag: 'Authentication, Load-balancing, Prefix lists',
      description: 'In this project, I have configured the network with EIGRP for IPv6. I have also configured passive interfaces, propagated a default route, configured a summary route, implemented routing protocol authentication, modified load balancing, and filtered routes with a prefix list.'
    },
    {
      name: 'VRF-lite implementation',
      icon: 'fa-diagram-project',
      tag: 'VRF-Lite, Static routing',
      description: 'In this project, I worked on a router, playing the part of a service provider router, as it supports two customers who have the same addressing scheme configured. I have deployed VRF-Lite and static routing so that the customers have full reachability within their network.'
    },
  ]
  res.render('projects', { title: 'Projects', projects: projects });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});


module.exports = router;

