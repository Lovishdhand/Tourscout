const prisma = require("../Models/prisma");

// Create a new user (name only)
exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: true,msg:"Name is required" });
    }

    const newUser = await prisma.user.create({
      data: { name },
    });

    res.status(201).json({
      msg: "User created successfully",
      error: false,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: true, msg: err.msg });
  }
};


exports.getUsers = async (req, res) => {
  try {
    // Get query params
    const { page = 1, limit = 10, search = "" } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    // Search condition
    const where = search
      ? {
          OR: [
            { name: { contains: search  } },
            
          ],
        }
      : {};

    // Fetch paginated users
    const users = await prisma.user.findMany({
      where,
      skip,
      take,
      orderBy: { id: "desc" },
    });

    // Fetch total count
    const total = await prisma.user.count({ where });

    res.status(200).json({
      msg: "Users Fetched Successfully",
      error: false,
      users: users,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    // res.status(500).json({ error: err.message, error: true });
    res.status(500).json({ 
  error: true, 
  message: err.message ,
  stack: err.stack 
});
  }
};


// Update a user by ID (name only)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.body;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    res.status(200).json(
        {
      msg: "Users Fetched Successfully",
      error: false,
      user: updatedUser,
    }
    );
  } catch (err) {
    res.status(500).json({ error: err.msg,error:true });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
