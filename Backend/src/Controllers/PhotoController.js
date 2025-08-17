const prisma = require("../Models/prisma");



// Create a photo
exports.createPhoto = async (req, res) => {
  try {
    const { album_id, url, thumbnail, caption } = req.body;

    if (!album_id || !url || !thumbnail) {
      return res
        .status(400)
        .json({ msg: "albumId, url and thumbnail are required", error: true });
    }

    // Validate album exists
    const album = await prisma.album.findUnique({ where: { id: parseInt(album_id) } });
    if (!album) {
      return res.status(400).json({ msg: "Album not found", error: true });
    }

    const photo = await prisma.photo.create({
      data: {
        album: { connect: { id: parseInt(album_id) } },
        url,
        thumbnail,
        caption,
      },
    });

    res.status(201).json({ msg: "Photo created successfully", error: false, photo });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};

// Get all photos of an album
exports.getPhotosByAlbum = async (req, res) => {
  try {
    const { albumId } = req.params;

    const photos = await prisma.photo.findMany({
      where: { albumId: parseInt(album_id) },
    });

    res.status(200).json({ msg: "Photos retrieved", error: false, photos });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};

// Update a photo
exports.updatePhoto = async (req, res) => {
  try {
    const { id, album_id, url, thumbnail, caption } = req.body;

    if (!id) return res.status(400).json({ msg: "Photo ID is required", error: true });

    const updateData = {};
    if (url) updateData.url = url;
    if (thumbnail) updateData.thumbnail = thumbnail;
    if (caption) updateData.caption = caption;

    if (albumId) {
      const album = await prisma.album.findUnique({ where: { id: parseInt(albumId) } });
      if (!album) return res.status(400).json({ msg: "Album not found", error: true });
      updateData.album = { connect: { id: parseInt(albumId) } };
    }

    const updatedPhoto = await prisma.photo.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({ msg: "Photo updated successfully", error: false, photo: updatedPhoto });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};

// Delete a photo
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.photo.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ msg: "Photo deleted successfully", error: false });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};