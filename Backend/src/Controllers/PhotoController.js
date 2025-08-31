const prisma = require("../Models/prisma");



// Create a photo

exports.createPhoto = async (req, res) => {
  try {
    const { album_id, caption } = req.body;

    if (!album_id || !req.file) {
      return res
        .status(400)
        .json({ msg: "albumId and photo file are required", error: true });
    }

    const album = await prisma.album.findUnique({
      where: { id: parseInt(album_id) },
    });
    if (!album) {
      return res.status(400).json({ msg: "Album not found", error: true });
    }

    const photoUrl = `/uploads/photos/${req.file.filename}`;
    const thumbnailUrl = photoUrl;

    const photo = await prisma.photo.create({
      data: {
        album: { connect: { id: parseInt(album_id) } },
        url: photoUrl,
        thumbnail: thumbnailUrl,
        caption,
      },
    });

    res.status(201).json({ msg: "Photo uploaded successfully", error: false, photo });
  } catch (err) {
    res.status(500).json({ msg: err.message, error: true });
  }
};







exports.getPhotosByAlbum = async (req, res) => {
  try {
    let { search, user_id, album_id, page, limit} = req.query;
page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    
    const where = {
      AND: [
        search
          ? { caption: { contains: search} }
          : {},

        user_id
          ? { album: { is: { user_id: Number(user_id) } } }
          : {},

        album_id
          ? { album_id: Number(album_id) }
          : {},
      ],
    };

   
    const photos = await prisma.photo.findMany({
      where,
      include: {
        album: {
          include: { user: true },
        },
      },
      skip: (page - 1) * limit,
      take: Number(limit),
    });

 
    const total = await prisma.photo.count({ where });

    res.status(200).json({
      msg: "Photos retrieved",
      error: false,
      photos,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
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