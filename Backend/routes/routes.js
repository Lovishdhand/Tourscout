const express = require('express');
const router = express.Router();
const userController = require('../src/Controllers/UserController');
const albumController = require('../src/Controllers/AlbumController');


router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Lovish' },
    { id: 2, name: 'John' }
  ]);
});


router.post('/users', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User created successfully!', user: newUser });
});




// Get all users
router.get('/allusers', userController.getUsers);

// Create user
router.post('/createuser', userController.createUser);

// Update user
router.put('/edituser', userController.updateUser);

// Delete user
router.delete('/deleteuser', userController.deleteUser);

// Create album
router.post('/createalbum', albumController.createAlbum);

// Get all albums
router.get('/allalbums', albumController.getAlbums);

// Update album (title and/or userId)
router.put('/editalbum', albumController.updateAlbum); 

// Delete album
router.delete('/deletealbum', albumController.deleteAlbum); 

module.exports = router;
