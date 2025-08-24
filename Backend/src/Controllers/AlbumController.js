const prisma = require("../Models/prisma");

// Create album for a user
exports.createAlbum = async (req, res) => {
  try {
    const { title, user_id } = req.body;

    if (!title || !user_id) {
      return res
        .status(400)
        .json({ msg: "Title and userId are required", error: true });
    }

    // Validate user exists
    const user = await prisma.user.findUnique({
      where: { id: parseInt(user_id) },
    });

    if (!user) {
      return res.status(400).json({ msg: "User not found", error: true });
    }

    // Create album with relation
    const album = await prisma.album.create({
      data: {
        title,
        user: { connect: { id: parseInt(user_id) } }, 
      },
    });

    res
      .status(201)
      .json({ msg: "Album created successfully", error: false, album });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};

// Get all albums
exports.getAlbums = async (req, res) => {
  try {
    const albums = await prisma.album.findMany({ include: { user: true } });
    res.status(200).json({ msg: "Albums fetched", error: false, albums });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};


// Update an album
exports.updateAlbum = async (req, res) => {
  try {
    const { id, title, user_id } = req.body;

    if (!id) {
      return res.status(400).json({ msg: "Album ID is required", error: true });
    }

    if (!title && !user_id) {
      return res
        .status(400)
        .json({ msg: "Provide title or user_id to update", error: true });
    }

    const updateData = {};

    if (title) updateData.title = title;

    if (user_id) {
      // Validate user exists
      const user = await prisma.user.findUnique({ where: { id: parseInt(user_id) } });
      if (!user)
        return res.status(400).json({ msg: "User not found", error: true });

      // Connect album to new user
      updateData.user = { connect: { id: parseInt(user_id) } };
    }

    const updatedAlbum = await prisma.album.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res
      .status(200)
      .json({ msg: "Album updated successfully", error: false, album: updatedAlbum });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};


// Delete album
exports.deleteAlbum = async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.album.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ msg: "Album deleted successfully", error: false });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};
